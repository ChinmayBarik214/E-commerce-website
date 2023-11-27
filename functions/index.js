/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51OGH9jSDLuezvdQH4Q3CFdOtejUl1lp0WhfVLHAhAO3LPLjjkxUpfx5VMKyZ8wMPNdZjpfUUhQiQEeZTxpnXZwbd00dtrU6xlV')
// API
// - App config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// - Listen command
exports.api = functions.https.onRequest(app)