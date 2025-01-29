const axios = require('axios');

module.exports = async (req, res) => {
    const userInput = req.body.message;  // Message envoyé par l'utilisateur
    try {
        // Appel à l'API GPT-J (remplace par l'URL correcte)
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
};
