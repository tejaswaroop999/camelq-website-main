import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

// Replace <db_password> with your actual password or use environment variable
const uri = "mongodb+srv://tejaswaroop999:Swaroop123@camelq.mz1dsxm.mongodb.net/?retryWrites=true&w=majority";

// MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to MongoDB and insert the data
    await client.connect();
    const db = client.db("camelq");
    const collection = db.collection("contacts");

    const contactData = {
      name,
      email,
      phone,
      company,
      subject,
      message,
      submittedAt: new Date(),
    };

    await collection.insertOne(contactData);

    console.log("Contact form submitted:", contactData);

    return NextResponse.json({ success: true, message: "Message sent and saved to database!" }, { status: 200 });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  } finally {
    // Always close the DB connection
    await client.close();
  }
}
