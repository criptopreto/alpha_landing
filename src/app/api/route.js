import MailerLite from "@mailerlite/mailerlite-nodejs";

const API_KEY = process.env.MAILERLITE_API_KEY;
const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

const mailerlite = new MailerLite({
  api_key: API_KEY,
});

export async function POST(req) {
  const formData = await req.formData();

  const ip = req.ip;

  const email = formData.get("email");

  if (!email) {
    return Response.json({ error: "Email is required" });
  }

  const data = {
    email,
    groups: [`${GROUP_ID}`],
    ip_address: ip,
  };

  try {
    const result = await mailerlite.subscribers.createOrUpdate(data);

    return Response.json({ success: true, data: result.data, ip });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,

      error: error.message || error.toString(),
    });
  }
}
