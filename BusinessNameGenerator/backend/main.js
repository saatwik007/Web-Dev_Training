const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Backend');
})



app.post('/api/generate-name', async (req, res) => {
    try {
        const { prompt } = req.body;
        const HF_API_KEY = process.env.HF_API_KEY;

        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                headers: {
                    Authorization: `Bearer ${HF_API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful assistant that generates creative business names and valid domain names. Suggest a short, catchy business name along with valid domain names."
                        },
                        {
                            role: "user",
                            content: prompt || "Generate a creative business name"
                        }
                    ],
                    model: "openai/gpt-oss-20b",
                }),
            }
        );

        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate business name' });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});