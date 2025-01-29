const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Middleware pour accepter les données JSON
app.use(express.json());

// Route pour générer une réponse
app.post("/generate", async (req, res) => {
    const userInput = req.body.message;  // Message envoyé par l'utilisateur
    
    try {
        // Appel à l'API GPT-J (exemple d'API HuggingFace)
        const response = await axios.post("URL_DE_TON_API", {
            prompt: userInput,
            max_length: 150
        });
        
        // Retourner la réponse générée par GPT-J
        res.json({ response: response.data.choices[0].text });
    } catch (error) {
        console.error("Error calling GPT-J API:", error);
        res.status(500).json({ error: "Erreur interne" });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
