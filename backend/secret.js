import 'dotenv/config'


 const Mongo_connect_url = process.env.ATLAS_URL;
 const smtpUser = process.env.SMTP_USERNAME;
 const smtpPassword = process.env.SMTP_PASSWORD;
 const secretKey = process.env.SECRET_KEY;
 const login_secret_key = process.env.LOGIN_SECRET_KEY; 
 const resend_api_key = process.env.RESEND_API_KEY;
 const frontend_url = process.env.FRONTEND_URL;

export { Mongo_connect_url , smtpUser , smtpPassword, secretKey, login_secret_key, resend_api_key, frontend_url};


