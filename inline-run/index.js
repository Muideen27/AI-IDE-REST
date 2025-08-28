// Minimal Express REST API with GET /items and POST /items
// Uses in-memory array + Zod validation

const express = require('express');
const { z } = require('zod');
const app = express();
const port = 3000;

app.use(express.json());

const items = [];

// Zod schema for item validation
const itemSchema = z.object({
    name: z.string().min(1, "Name is required")
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    try {
        const validatedData = itemSchema.parse(req.body);
        const { name } = validatedData;
        const item = { id: items.length + 1, name };
        items.push(item);
        res.status(201).json(item);
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors[0].message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});