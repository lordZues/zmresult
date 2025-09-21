// Direct Google Sheets API integration
const GOOGLE_SHEETS_API_KEY = 'AIzaSyBvOyiuOEiua41VGb2-uEMocEAe-KQ9jBg';
const SPREADSHEET_ID = '1BvlvITcKJGqY8yNbXzQpL2mK9oP3nR4sT6uV7wX8yZ0';
const SHEET_NAME = 'ZM_Results_Leads';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  business: string;
  challenges: string;
  service?: string;
  source?: string;
}

export async function submitToGoogleSheets(leadData: LeadData): Promise<boolean> {
  try {
    // Prepare the data row
    const timestamp = new Date().toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const rowData = [
      timestamp,
      leadData.name,
      leadData.email,
      leadData.phone,
      leadData.business,
      leadData.challenges,
      leadData.service || 'General Inquiry',
      leadData.source || 'Website Form',
      navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
      window.location.href,
      document.referrer || 'Direct'
    ];

    // Google Sheets API endpoint
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:K:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      })
    });

    if (!response.ok) {
      console.error('Google Sheets API error:', await response.text());
      return false;
    }

    console.log('Lead successfully submitted to Google Sheets');
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

// Alternative method using Google Apps Script Web App
export async function submitViaAppsScript(leadData: LeadData): Promise<boolean> {
  try {
    // Google Apps Script Web App URL (you'll need to create this)
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYourScriptIdHere/exec';
    
    const formData = new FormData();
    formData.append('timestamp', new Date().toISOString());
    formData.append('name', leadData.name);
    formData.append('email', leadData.email);
    formData.append('phone', leadData.phone);
    formData.append('business', leadData.business);
    formData.append('challenges', leadData.challenges);
    formData.append('service', leadData.service || 'General Inquiry');
    formData.append('source', leadData.source || 'Website Form');
    formData.append('device', navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop');
    formData.append('url', window.location.href);
    formData.append('referrer', document.referrer || 'Direct');

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: formData
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting via Apps Script:', error);
    return false;
  }
}

// Fallback method using a simple form submission
export async function submitViaFormSubmit(leadData: LeadData): Promise<boolean> {
  try {
    // Using formsubmit.co as a reliable fallback
    const response = await fetch('https://formsubmit.co/zusakhe@zmresultss.org', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...leadData,
        timestamp: new Date().toISOString(),
        _subject: 'New Lead from ZM Results Website',
        _captcha: 'false',
        _template: 'table'
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error with form submit:', error);
    return false;
  }
}