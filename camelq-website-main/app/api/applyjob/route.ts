import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
import fs from "fs";
import path from "path";

const uri = process.env.MONGODB_URI || "mongodb+srv://tejaswaroop999:Swaroop123@camelq.mz1dsxm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const position = formData.get("position")?.toString() || "";
    const experience = formData.get("experience")?.toString() || "";
    const coverLetter = formData.get("cover-letter")?.toString() || "";
    const resume = formData.get("resume-upload") as File;

    if (!name || !email || !position || !experience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Handle file upload (either save to server or cloud storage)
    let resumePath = "";
    if (resume) {
      const fileName = `${name.replace(" ", "_")}_resume_${Date.now()}.pdf`;  // Example filename
      const uploadsDir = path.join(process.cwd(), "uploads");

      // Ensure uploads directory exists
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir); // Create the uploads directory if it doesn't exist
      }

      const filePath = path.join(process.cwd(), "uploads", fileName); // Save to a folder named "uploads"
      const fileBuffer = await resume.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(fileBuffer)); // Save file on server (you can use S3 or other storage instead)
      resumePath = filePath; // Or store URL if you use cloud storage
    }

    // Connect to DB and insert application
    await client.connect();
    const db = client.db("camelq");
    const collection = db.collection("applications");

    const application = {
      name,
      email,
      phone,
      position,
      experience,
      coverLetter,
      resumePath, // store file path or URL
      submittedAt: new Date(),
    };

    await collection.insertOne(application);

    return NextResponse.json({ success: true, message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Submission failed. Please try again later." }, { status: 500 });
  }
}
