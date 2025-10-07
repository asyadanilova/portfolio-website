const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175'
    ]
}));
app.use(express.json());

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many form submissions, please try again later.'
});

app.post('/api/submit-form', limiter, async (req, res) => {
    try {
        const { name, phone, service, workExperience, message, language } = req.body;

        if (!name || !phone || !service) {
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
            lead.COMMENTS = `Message: ${message}\n\nSubmitted: ${new Date().toISOString()}\nLanguage: ${language}`;
        }

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
            throw new Error(`Bitrix24 error: ${bitrixResponse.status}`);
        }

        const result = await bitrixResponse.json();

        if (result.error) {
            throw new Error(`Bitrix24 API error: ${result.error_description}`);
        }

        res.json({
            success: true,
            message: 'Form submitted successfully',
            leadId: result.result
        });

    } catch (error) {
        console.error('Form submission error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to submit form'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});