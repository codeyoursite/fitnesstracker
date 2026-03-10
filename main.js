// --- FRONTEND LOGIC ---
const form = document.getElementById("form");
const formTwo = document.getElementById("formTwo");
const formThree = document.getElementById("formThree");
const formFour = document.getElementById("formFour");
const errMsg = document.getElementById("errMsg");

// Store data in a higher scope so all forms can access it
let userData = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = document.getElementById("age").value;
    if (age < 100) {
        userData.age = age;
        form.style.opacity = "0.3";
        formTwo.style.display = "block";
    } else {
        alert("Please enter an age below 100.");
    }
});

formTwo.addEventListener("submit", (e) => {
    e.preventDefault();
    const checked_radio = document.querySelector('input[name="yesno"]:checked');
    if (checked_radio) {
        userData.hasExperience = checked_radio.value;
        formTwo.style.opacity = "0.3";
        formThree.style.display = "block";
    } else {
        alert('Nothing checked');
    }
});

formThree.addEventListener("submit", (e) => {
    e.preventDefault();
    userData.time = document.getElementById("time").value;
    formThree.style.opacity = "0.3";
    formFour.style.display = "block";
});

formFour.onsubmit = async (e) => {
    e.preventDefault();
    userData.goal = document.getElementById("time2")?.value || "General Fitness";

    try {
        const response = await fetch("/askgemini", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const responseJSON = await response.json();
        errMsg.innerText = responseJSON.answer;
        errMsg.style.display = "block";
    } catch (error) {
        errMsg.innerText = "Error: " + error;
        errMsg.style.display = "block";
    }
};

// --- BACKEND LOGIC (Node.js/Express) ---
import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Updated import name

dotenv.config();
const app = express();
app.use(express.json()); // Essential for reading JSON bodies

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/askgemini", async (req, res) => {
    try {
        const { age, hasExperience, time, goal } = req.body;
        
        const prompt = `User Profile: Age ${age}, Experience: ${hasExperience}, Available Time: ${time}, Goal: ${goal}. Please provide a personalized workout suggestion.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.json({ answer: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Gemini API call failed" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
