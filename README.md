# AI-IDE-REST

A minimal Node.js/Express REST API with in-memory storage and Zod validation.

## Features

- **GET /items** - Retrieve all items
- **POST /items** - Create a new item with validation
- In-memory array storage with auto-incrementing IDs
- Zod schema validation for POST requests
- Error handling with appropriate HTTP status codes

## Installation

```bash
cd inline-run
npm install
```

## Running the API

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on port 3000.

## API Endpoints

### GET /items
Retrieve all items.

**Response:**
```json
[
  {"id": 1, "name": "Item 1"},
  {"id": 2, "name": "Item 2"}
]
```

### POST /items
Create a new item.

**Request Body:**
```json
{
  "name": "New Item"
}
```

**Response (Success - 201):**
```json
{
  "id": 3,
  "name": "New Item"
}
```

**Response (Validation Error - 400):**
```json
{
  "error": "Name is required"
}
```

## Testing with cURL

### Get all items
```bash
curl http://localhost:3000/items
```

### Create a new item
```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item"}'
```

### Test validation (should return 400)
```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{}'
```

## Project Structure

```
inline-run/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Dependencies

- **express**: Web framework
- **zod**: Schema validation
- **nodemon**: Development auto-reload (dev dependency)
