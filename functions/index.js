const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51CWjQeArDbEkNdGgSuUbqDrlfzpMETEKUxRW0GQ9xTERHtDi0MLokzlqwDWUsKNWkPkYXgxxcSGpkxWE4pb6g2YT00gqLnD2Lk"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// app.listen(5000);

//http://localhost:5001/fir-clone-d52ea/us-central1/api