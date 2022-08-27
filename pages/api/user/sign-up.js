import { signUp } from "../../../server/controllers/userController";
import { apiHandler } from "../../../server/helpers/api-handler";
import sgMail from "@sendgrid/mail";
import { base_url } from "../../../server/helpers/urls";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = (userEmail, username, token) => {
  return {
    to: userEmail, // Change to your recipient
    from: "shahmansurov1001@gmail.com", // Change to your verified sender
    subject: `Welcome ${username}!`,
    text: "You have successfully signed up.",
    html: `<div>
        <p>Please verify your account by clicking this</p>
        <a href="${base_url}/api/user/verify-email?token=${token}">link</a>
        </div>`,
  };
};

export default apiHandler(handler);

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "url not found" });
  }
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "no data sent" });
  }
  if (!req.body.username) {
    res.status(400).json({ message: "no username" });
  }
  if (!req.body.email) {
    res.status(400).json({ message: "no email" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "no password" });
  }
  if (req.body.password.length < 6) {
    res
      .status(400)
      .json({ message: "password must be at least 6 characters long!" });
  }
  const result = await signUp(req.body);
  if (result.id) {
    res.status(201).json({ message: "success", body: result });
    const message = msg(req.body.email, req.body.username, result.token);
    sgMail
      .send(message)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
