# Google Sheets Direct Integration Setup - ZM Results

## 🎯 IMMEDIATE SETUP REQUIRED

Your website now has **DIRECT Google Sheets integration** that bypasses Supabase completely. Follow these steps to get it working:

## 📊 Step 1: Create Your Google Sheet

1. **Go to Google Sheets**: https://sheets.google.com
2. **Create a new spreadsheet** named: "ZM Results - Customer Leads"
3. **Set up column headers** in Row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Business Type
   - F1: Challenges/Message
   - G1: Service Interest
   - H1: Lead Source
   - I1: Device Type
   - J1: Page URL
   - K1: Referrer

4. **Copy the Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/1BvlvITcKJGqY8yNbXzQpL2mK9oP3nR4sT6uV7wX8yZ0/edit`
   - ID is: `1BvlvITcKJGqY8yNbXzQpL2mK9oP3nR4sT6uV7wX8yZ0`

## 🔑 Step 2: Enable Google Sheets API

1. **Go to Google Cloud Console**: https://console.cloud.google.com
2. **Create a new project** or select existing one
3. **Enable Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"
4. **Create API Key**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

## 🛠️ Step 3: Update the Code

Replace the API key in `src/utils/googleSheets.ts`:
```typescript
const GOOGLE_SHEETS_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
const SPREADSHEET_ID = 'YOUR_ACTUAL_SPREADSHEET_ID_HERE';
```

## 🔒 Step 4: Make Sheet Public (For API Access)

1. **Open your Google Sheet**
2. **Click "Share" button**
3. **Change permissions**:
   - Click "Anyone with the link"
   - Set to "Editor" (required for API writes)
4. **Copy the share link**

## 🚀 Alternative Method: Google Apps Script (Recommended)

For better security, use Google Apps Script:

1. **Open Google Apps Script**: https://script.google.com
2. **Create new project**
3. **Paste this code**:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE');
    const worksheet = sheet.getActiveSheet();
    
    const data = e.parameter;
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.business,
      data.challenges,
      data.service,
      data.source,
      data.device,
      data.url,
      data.referrer
    ];
    
    worksheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Deploy as Web App**:
   - Click "Deploy" > "New Deployment"
   - Choose "Web app"
   - Set execute as "Me"
   - Set access to "Anyone"
   - Copy the Web App URL

5. **Update the code** with your Web App URL in `src/utils/googleSheets.ts`

## 📧 Step 5: Email Backup (Already Configured)

The system also sends leads to: `zusakhe@zmresultss.org` as a backup.

## ✅ Testing Your Setup

1. **Fill out a form** on your website
2. **Check the browser console** for any errors
3. **Verify data appears** in your Google Sheet
4. **Check your email** for backup notifications

## 🎯 Current Integration Features

✅ **Triple Redundancy**: Google Sheets API → Apps Script → Email backup
✅ **Complete Data Capture**: All form fields + device info + referrer tracking
✅ **Real-time Updates**: Instant data capture
✅ **South African Timezone**: Timestamps in Johannesburg time
✅ **Lead Source Tracking**: Identifies which form was used
✅ **Device Detection**: Mobile vs Desktop tracking

## 🔧 Troubleshooting

**If leads aren't appearing:**
1. Check browser console for errors
2. Verify API key is correct
3. Ensure sheet permissions are set to "Editor"
4. Test with Apps Script method
5. Check email backup

**Need Help?**
- Email: zusakhe@zmresultss.org
- WhatsApp: +27 73 695 7783

Your lead capture system is now **100% independent** and will work immediately once you complete the Google Sheets setup!