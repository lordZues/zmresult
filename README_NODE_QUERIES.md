# Visitor Query Logger (Node.js)

This adds a simple Node.js server that:
- Serves a form for visitors to submit queries.
- Stores all visitor queries in `queries.json`.
- Sends an email notification to zusakhe@zmresultss.org every time a query is made.

## Setup

1. Copy/paste the files: `server.js`, `public/index.html`, `queries.json` to your repo.
2. Install dependencies:
   ```
   npm install express body-parser nodemailer
   ```
3. Edit `server.js` and replace `YOUR_EMAIL@gmail.com` and `YOUR_APP_PASSWORD` with your sending email and app password.
   - For Gmail, create an App Password if you have 2FA enabled.
   - You may use any other email service supported by Nodemailer.
4. Start the server:
   ```
   node server.js
   ```
5. Visit [http://localhost:3000](http://localhost:3000) to use the form.

## Security Note
- Do not commit your email credentials to public repos.
- Consider using environment variables or a secrets manager for production use.

## Customization
- You can modify the form and server logic as needed for your use case.