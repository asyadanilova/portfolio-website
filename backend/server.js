/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        'https://bvetra.netlify.app',
        'https://bvetra.by',
        'https://www.bvetra.by',
        /^https:\/\/.*\.netlify\.app$/,
        /^https:\/\/.*\.vercel\.app$/
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`, {
        origin: req.get('Origin'),
        userAgent: req.get('User-Agent')
    });
    next();
});

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many form submissions, please try again later.'
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'BVetra Backend API is running',
        endpoints: ['/api/health', '/api/submit-form'],
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Server is running',
        env: {
            nodeEnv: process.env.NODE_ENV,
            hasBitrixUrl: !!process.env.BITRIX24_WEBHOOK_URL,
            frontendUrl: process.env.FRONTEND_URL
        },
        timestamp: new Date().toISOString()
    });
});

app.post('/api/submit-form', limiter, async (req, res) => {
    try {
        console.log('Form submission received:', req.body);

        // Check if BITRIX24_WEBHOOK_URL is configured
        if (!process.env.BITRIX24_WEBHOOK_URL) {
            console.error('BITRIX24_WEBHOOK_URL not configured');
            return res.status(500).json({
                success: false,
                error: 'Server configuration error'
            });
        }

        const { name, phone, service, workExperience, message, language } = req.body;

        if (!name || !phone || !service) {
            console.log('Missing required fields:', { name: !!name, phone: !!phone, service: !!service });
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        const serviceMapping = {
            'transfer': 'Transfer Service',
            'vacancy': 'Job Application',
            'other': 'Other Service'
        };

        const lead = {
            TITLE: `New ${serviceMapping[service] || 'Contact'} - ${name}`,
            NAME: name,
            PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
            SOURCE_ID: 'WEB',
            SOURCE_DESCRIPTION: 'BVetraWebsite Form',
            UF_CRM_SERVICE_TYPE: service
        };

        if (workExperience) {
            lead.UF_CRM_1759751441376 = workExperience;
        }

        if (message) {
            lead.COMMENTS = `Сообщение: ${message}\n\nОтправлено: ${new Date().toISOString()}\nЯзык: ${language}`;
        }

        console.log('Sending to Bitrix24:', lead);

        const bitrixResponse = await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.lead.add.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: lead
            })
        });

        if (!bitrixResponse.ok) {
            const errorText = await bitrixResponse.text();
            console.error('Bitrix24 HTTP error:', bitrixResponse.status, errorText);
            throw new Error(`Bitrix24 error: ${bitrixResponse.status} - ${errorText}`);
        }

        const result = await bitrixResponse.json();
        console.log('Bitrix24 response:', result);

        if (result.error) {
            console.error('Bitrix24 API error:', result.error, result.error_description);
            throw new Error(`Bitrix24 API error: ${result.error_description}`);
        }

        res.json({
            success: true,
            message: 'Form submitted successfully',
            leadId: result.result
        });

    } catch (error) {
        console.error('Form submission error:', error.message);
        console.error('Full error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to submit form',
            details: process.env.NODE_ENV !== 'production' ? error.message : undefined
        });
    }
});

// For Vercel serverless functions, we export the app instead of listening
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;