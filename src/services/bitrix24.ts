export interface BitrixLead {
    TITLE: string;
    NAME: string;
    PHONE: Array<{ VALUE: string; VALUE_TYPE: string }>;
    SOURCE_ID: string;
    SOURCE_DESCRIPTION?: string;
    COMMENTS?: string;
    UF_CRM_SERVICE_TYPE?: string;
    UF_CRM_1759751441376?: string;
}

export interface FormSubmissionData {
    name: string;
    phone: string;
    service: string;
    workExperience?: string;
    message?: string;
    timestamp: string;
    userAgent: string;
    language: string;
}

class Bitrix24Service {
    private bitrixWebhookUrl: string;
    private readonly STORAGE_KEY = 'portfolio_form_submissions';

    constructor() {
        this.bitrixWebhookUrl = import.meta.env.VITE_BITRIX24_WEBHOOK_URL || '';
    }
    saveToLocalStorage(data: FormSubmissionData): void {
        try {
            const existingData = this.getStoredSubmissions();
            existingData.push(data);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData));
            console.log('Form data saved to local storage:', data);
        } catch (error) {
            console.error('Error saving to local storage:', error);
        }
    }

    getStoredSubmissions(): FormSubmissionData[] {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error reading from local storage:', error);
            return [];
        }
    }

    private transformToBitrixLead(data: FormSubmissionData): BitrixLead {
        const serviceMapping: Record<string, string> = {
            'transfer': 'Transfer Service',
            'vacancy': 'Job Application',
            'other': 'Other Service'
        };

        const lead: BitrixLead = {
            TITLE: `New ${serviceMapping[data.service] || 'Contact'} - ${data.name}`,
            NAME: data.name,
            PHONE: [{ VALUE: data.phone, VALUE_TYPE: 'WORK' }],
            SOURCE_ID: 'WEB',
            SOURCE_DESCRIPTION: 'BVetraWebsite Form',
            UF_CRM_SERVICE_TYPE: data.service
        };

        if (data.workExperience) {
            lead.UF_CRM_1759751441376 = data.workExperience;
        }

        if (data.message) {
            lead.COMMENTS = `Message: ${data.message}\n\nSubmitted: ${data.timestamp}\nLanguage: ${data.language}`;
        }

        return lead;
    }

    async sendToBitrix24(data: FormSubmissionData): Promise<boolean> {
        if (!this.bitrixWebhookUrl) {
            console.warn('Bitrix24 webhook URL not configured');
            return false;
        }

        try {
            const lead = this.transformToBitrixLead(data);
            const apiUrl = this.bitrixWebhookUrl.includes('crm.lead.add.json')
                ? this.bitrixWebhookUrl
                : `${this.bitrixWebhookUrl}/crm.lead.add.json`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: lead
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Bitrix24 error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
            }

            const result = await response.json();
            console.log('Bitrix24 response:', result);

            if (result.error) {
                throw new Error(`Bitrix24 API error: ${result.error_description || result.error}`);
            }

            console.log('Successfully sent to Bitrix24:', result);
            return true;
        } catch (error) {
            console.error('Error sending to Bitrix24:', error);
            return false;
        }
    }

    async handleFormSubmission(formData: {
        name: string;
        phone: string;
        service: string;
        workExperience?: string;
        message?: string;
    }, language: string = 'en'): Promise<{ success: boolean; savedLocally: boolean; sentToBitrix: boolean }> {
        const submissionData: FormSubmissionData = {
            ...formData,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            language
        };

        this.saveToLocalStorage(submissionData);
        const sentToBitrix = await this.sendToBitrix24(submissionData);

        return {
            success: true,
            savedLocally: true,
            sentToBitrix
        };
    }

    exportSubmissions(): void {
        try {
            const submissions = this.getStoredSubmissions();
            const dataStr = JSON.stringify(submissions, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

            const exportFileDefaultName = `form-submissions-${new Date().toISOString().split('T')[0]}.json`;

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        } catch (error) {
            console.error('Error exporting submissions:', error);
        }
    }

    clearStoredSubmissions(): void {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            console.log('Cleared all stored form submissions');
        } catch (error) {
            console.error('Error clearing stored submissions:', error);
        }
    }
}

export default new Bitrix24Service();