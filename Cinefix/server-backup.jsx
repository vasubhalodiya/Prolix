// import express from 'express';
// import Razorpay from 'razorpay';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// const razorpay = new Razorpay({
//   key_id: 'rzp_test_f72l5fnGjUGpvZ',
//   key_secret: 'ZUUqE6ZQKOs0jbwuerXey4EN',
// });

// app.post('/create-order', async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const options = {
//       amount: amount * 100,  // Razorpay expects the amount in paise
//       currency: 'INR',
//       receipt: `receipt#${Math.floor(Math.random() * 100000)}`,
//     };
//     const order = await razorpay.orders.create(options);
//     res.status(200).json(order);
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ error: 'Error creating Razorpay order' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



// const express = require("express");
// const Razorpay = require("razorpay");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,   // Your Razorpay key_id
//   key_secret: process.env.RAZORPAY_SECRET  // Your Razorpay key_secret
// });

// app.post('/create-order', async (req, res) => {
//     try {
//         // Extract the amount or other required data from the request body
//         const { amount } = req.body;

//         // Log the request body for debugging
//         console.log("Received request body:", req.body);

//         // Ensure amount is valid
//         if (!amount || isNaN(amount)) {
//             return res.status(400).json({
//                 message: 'Invalid amount provided'
//             });
//         }

//         // Create an order using Razorpay API
//         const orderOptions = {
//             amount: amount * 100,  // Convert to paise (1 INR = 100 paise)
//             currency: "INR",
//             receipt: "order_receipt_" + new Date().getTime(),  // Unique receipt ID
//         };

//         // Create Razorpay order
//         razorpay.orders.create(orderOptions, (err, order) => {
//             if (err) {
//                 console.error("Error creating Razorpay order:", err);
//                 return res.status(500).json({
//                     message: 'Error creating order',
//                     error: err.message,
//                 });
//             }

//             // Send the order details back to the frontend
//             res.status(200).json({
//                 message: 'Order created successfully',
//                 orderId: order.id,
//                 amount: order.amount,
//             });
//         });
//     } catch (error) {
//         console.error("Error in /create-order:", error);  // Log the full error
//         return res.status(500).json({
//             message: 'Server error',
//             error: error.message,
//         });
//     }
// });


// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });


const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());  // Enable CORS to allow frontend to communicate with backend
app.use(bodyParser.json());  // Parse JSON requests

// Initialize Razorpay instance with your Razorpay credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Set your Razorpay key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Set your Razorpay key secret
});

// Route to create an order
app.post('/create-order', async (req, res) => {
  try {
    // Razorpay order creation logic
    const order = await razorpay.orders.create({
      amount: req.body.amount * 100,  // Convert amount to paise
      currency: req.body.currency,
      receipt: `receipt_${Date.now()}`,
    });

    res.json({
      order,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
