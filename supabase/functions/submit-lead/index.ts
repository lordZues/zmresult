import { corsHeaders } from '../_shared/cors.ts';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  business: string;
  challenges: string;
}

// Google Service Account credentials
const SERVICE_ACCOUNT = {
  "type": "service_account",
  "project_id": "gold-subset-456420-a6",
  "private_key_id": "06853d89368882e0619d075019db9b639d2aaa91",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDr/OcEBgYmGhOD\nUB1Z9KeiBdTeRLA+/+n5UY29cFpp2afbPVGv2Oz+bJZoF6nu1tPK//hMRCSFyyzQ\nWVLSLdtvyIdfdTtRfrOkS2LN7z037JLl+M+y/ul5Fpz397R22PKWP9ohEPsd2TsV\n8KHxIR+ACH30ffo2lB4sqoHA8iFpMYOSiljErqcXQBzlOjY5x/EII9HRjHAU3osc\nMIPx83k9R8y4uPlyzG9XkYz6oVgxCMikQqBCeyHj5c4BV/94nVV31njFZmq5jwaS\njB3kLeZG++DjxVqEF0it1A/9qfRsObkNuUuw3/UEagsCY3dzrAmhhr0PKPvX1GP6\nUfO9x4dxAgMBAAECggEAA2pXG5dMuntxIdrkedtRG8ay1H6xAFBq3flgsEeyf0qv\no7wo9P8SOwJuUNZa1sKUMSFwQgZQcwFERkWsra8NOHpx/x8uuxi2199hcDKQs8EA\nRUTLGL+YuHBr2CjlGz07kZIeAZGB2OY+dSxU460DjDJTRFkYaHbPUv0qwJSgiCmw\nrPM6M0kaiGtWKnbcVzCm4CN1ogB45NPT8oHxDExIjfxF0OY2ci/uTU/O9VSIm+xM\nnVmwqpKLBeMqwh16xanpVl6/oyn8bl8k4yNhyLPqDiYN4Csi3Awofg2VWXTpj0b4\n/XP6A+Z4KvgmAvmlFS/CE7vK60OrVSwvcmAjs4zyIQKBgQD2B9v9AkAWi/UUMXZi\n+9Skd7PP3buAO6/dll+FjQDOHsLC9A7ZNqbTNq10jC3agGUzUws24Qi/fOM95EyR\nJppXsWDThXKPYPxAPk4AhnU45q6T3eK/iHn6J9zIhE/zCq0fXn9C2E32GfFVN0kQ\njivFKGlrTbU3NsXFJaC0j/n1mQKBgQD1jN3R+N6fP1n9jhtTS7eiLdVqrxkpy8Mu\n++10AYkK3HDZaOQPqcJsshE7E38/fWH8yJCb6n/ahs6RYwT72Boz0GwyblePIz9w\n1F9VWPHTjM5OcoREkLq3DW9pM2B6g9FaRzB2MEq5TFwbG321nifN2rfuSD5NPbqm\nPJSd3MsXmQKBgQCHJoAZN0A/YniptBYlf9Mq2brECDj001Tjc7RbZ762e71fXLQ/\nbD8uLY4RROP3cKqnDApQBkRI9HDcUeohnkQQwha/e0IYMx2+qLsunK4OKOJjxfLG\nZlEjMvychdppV0cMwVtFPA9vjoa82hbf6klvD6kBUfmnMAZqKyZhqemUmQKBgBvD\na6k8DF/RF+m1UZ2faAnsSL8hQSUaptz/GyAMtGQH/LJ4S6EBvrvvfkdBsxeIo7Wj\nL8aRQxeAOobxvTSEgKHvJOym0Tub7qZhPM43mlAjEYiJJi9iddoQqNIqPvRbRyZ/\n+hjC6Q/+dEOUXihU04dQ/Y7xmCm/mwUEwIEA3+2xAoGBAIT5Tnn99YGvX4lvi2i8\nbx2kd7/T9UKy/YO//3OHP3qpEt/kakypsKhnccS8/1AI1oHFDsiuMObrlGrvH+Mj\nyarXCaoRkzynaGDB1UHJnJAc9sb8Wlra5pp3ZgPb0c6HhF1relXu5XAN9803AzdO\nV05TAGSXGJQaTPjb7A4NHBNT\n-----END PRIVATE KEY-----\n",
  "client_email": "google@gold-subset-456420-a6.iam.gserviceaccount.com",
  "client_id": "103786017721090176639",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google%40gold-subset-456420-a6.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Your Google Sheet ID extracted from the URL
const GOOGLE_SHEET_ID = '135Ob4gCnXiNk0dL0V7nyk3ZMwR5HxOLK3aTOrYZLcUo';

// Function to create JWT token for Google API authentication
async function createJWT() {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: SERVICE_ACCOUNT.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encoder = new TextEncoder();
  
  // Base64URL encode header and payload
  const encodedHeader = btoa(JSON.stringify(header)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  
  const message = `${encodedHeader}.${encodedPayload}`;
  
  // Import the private key
  const privateKey = await crypto.subtle.importKey(
    'pkcs8',
    new Uint8Array(atob(SERVICE_ACCOUNT.private_key.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, '')).split('').map(c => c.charCodeAt(0))),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  );
  
  // Sign the message
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    encoder.encode(message)
  );
  
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  
  return `${message}.${encodedSignature}`;
}

// Function to get access token
async function getAccessToken() {
  const jwt = await createJWT();
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    console.error('Token error:', data);
    throw new Error(`Failed to get access token: ${JSON.stringify(data)}`);
  }
  
  return data.access_token;
}

// Function to get sheet names
async function getSheetNames(accessToken: string) {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}`,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
  );
  
  if (!response.ok) {
    const error = await response.text();
    console.error('Failed to get sheet info:', error);
    throw new Error(`Failed to get sheet info: ${error}`);
  }
  
  const data = await response.json();
  return data.sheets.map((sheet: any) => sheet.properties.title);
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const leadData: LeadData = await req.json();
    console.log('Received lead data:', leadData);

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.business || !leadData.challenges) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get access token
    console.log('Getting access token...');
    const accessToken = await getAccessToken();
    console.log('Access token obtained successfully');

    // Get available sheet names
    console.log('Getting sheet names...');
    const sheetNames = await getSheetNames(accessToken);
    console.log('Available sheets:', sheetNames);

    // Determine which sheet to use
    let targetSheet = 'Sheet1'; // Default fallback
    if (sheetNames.includes('prospecting leads')) {
      targetSheet = 'prospecting leads';
    } else if (sheetNames.includes('Sheet1')) {
      targetSheet = 'Sheet1';
    } else if (sheetNames.length > 0) {
      targetSheet = sheetNames[0]; // Use first available sheet
    }
    
    console.log('Using sheet:', targetSheet);

    // Prepare data for Google Sheets
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
      leadData.challenges
    ];

    console.log('Preparing to send data:', rowData);

    // Google Sheets API endpoint - append to the determined sheet
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${encodeURIComponent(targetSheet)}!A:F:append?valueInputOption=RAW`;
    console.log('Sheets URL:', sheetsUrl);

    // Send data to Google Sheets
    const sheetsResponse = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        values: [rowData]
      }),
    });

    const responseText = await sheetsResponse.text();
    console.log('Sheets API response status:', sheetsResponse.status);
    console.log('Sheets API response:', responseText);

    if (!sheetsResponse.ok) {
      console.error('Google Sheets API error:', responseText);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to save lead data',
          details: responseText,
          sheetUsed: targetSheet,
          availableSheets: sheetNames
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Successfully saved lead to sheet:', targetSheet);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Lead submitted successfully to "${targetSheet}" sheet`,
        sheetUsed: targetSheet,
        availableSheets: sheetNames
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});