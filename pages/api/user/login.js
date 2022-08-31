import { login } from "../../../server/controllers/userController";
import { apiHandler } from "../../../server/helpers/api-handler";

export default apiHandler(handler);

async function handler(req, res) {
  if (req.method === "POST") {
    return res.status(404).json({ message: "url not found" });
  }
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "no data sent" });
  }
  if (!req.body.email) {
    return res.status(400).json({ message: "no email" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "no password" });
  }

  const result = await login(req.body);

  if (result.message === "error") {
    return res.status(401).json({ message: result.data });
  }

  return res.status(201).json({ message: "success", body: result.data });
}
