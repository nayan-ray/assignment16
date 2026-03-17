import { Resend } from "resend";
import { resend_api_key } from "../../secret.js";


const resend = new Resend(resend_api_key);

const sendEmail = async ({ to, subject, html }) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // default sender
      to,
      subject,
      html,
    });

    console.log("Email sent:", data);
    return data;

  } catch (error) {
    console.error("Email error:", error.message);
    throw error;
  }
};

export default sendEmail;