const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit-query', (req, res) => {
    const query = req.body.query;
    
    // Log query to queries.json
    fs.readFile('queries.json', (err, data) => {
        if (err) throw err;
        const queries = JSON.parse(data);
        queries.push({ query: query, timestamp: new Date() });
        fs.writeFile('queries.json', JSON.stringify(queries, null, 2), (err) => {
            if (err) throw err;
        });
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
        // Configure your email service here
        service: 'gmail',
        auth: {
            user: 'YOUR_EMAIL@gmail.com', // Change to your email
            pass: 'YOUR_PASSWORD' // Change to your password
        }
    });

    const mailOptions = {
        from: 'YOUR_EMAIL@gmail.com',
        to: 'zusakhe@zmresultss.org',
        subject: 'New Query Submitted',
        text: `New query submitted: ${query}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });

    res.send('Query submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
