const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const app = express();
admin.initializeApp();

const db = admin.firestore();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for submitting contact form
app.post("/submit-contact-form", async (req, res) => {
  try {
    // Validate input
    const {name, email, message} = req.body;
    if (!name || !email || !message) {
      return res.status(400).send("Name, email, and message are required.");
    }

    // Save submission to Firestore
    const submissionRef = await db.collection("contactForms").add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Log submission
    console.log("Contact form submission saved with ID:", submissionRef.id);

    // Respond with success
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).send("Error submitting contact form. Please try again later.");
  }
});

exports.contactForm = functions.https.onRequest(app);
