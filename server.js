const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Simple Calculator Microservice is running...");
});

// Addition
app.get("/add", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input. Please provide two numbers." });
    }
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction
app.get("/subtract", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input. Please provide two numbers." });
    }
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication
app.get("/multiply", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input. Please provide two numbers." });
    }
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division
app.get("/divide", (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid input. Please provide two numbers." });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero." });
    }
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
