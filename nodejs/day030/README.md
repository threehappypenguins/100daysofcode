```console
npm install nodemailer dotenv
```

This package is set up assuming that you are using Gmail. You will need 2-Step Verification enabled. Follow [these instructions](https://support.google.com/mail/answer/185833?hl=en) to set up an App Password.

Create an `.env` file with the following (putting in your username and App Password):
```console
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient@example.com
```

```console
node sendemail.js
```