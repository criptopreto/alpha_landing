import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export async function POST(req) {
  const formData = await req.formData();
  console.log(
    formData.get("email"),
    process.env.MAILCHIMP_AUDIENCE_ID,
    process.env.MAILCHIMP_API_SERVER
  );

  const email = formData.get("email");

  if (!email) {
    return Response.json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return Response.json({ error: "" });
  } catch (error) {
    console.log(error);
    return Response.json({
      error: error.message || error.toString(),
    });
  }
}
