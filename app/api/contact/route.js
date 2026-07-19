import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      program,
      qualification,
    } = body;

    // Basic Validation
    if (!fullName || !phone || !email || !program) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
        <div style="font-family:Arial,sans-serif;padding:20px">

            <h2 style="color:#0f2740">
                New Healthcare Consultation Enquiry
            </h2>

            <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%">
                <tr>
                    <td><strong>Full Name</strong></td>
                    <td>${fullName}</td>
                </tr>

                <tr>
                    <td><strong>Phone</strong></td>
                    <td>${phone}</td>
                </tr>

                <tr>
                    <td><strong>Email</strong></td>
                    <td>${email}</td>
                </tr>

                <tr>
                    <td><strong>Program</strong></td>
                    <td>${program}</td>
                </tr>

                <tr>
                    <td><strong>Qualification / Experience</strong></td>
                    <td>${qualification || "-"}</td>
                </tr>
            </table>

        </div>
    `;

    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry - ${fullName}`,
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}