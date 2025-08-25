# Test Script for Email API

This directory contains a test script to demonstrate the email sending functionality without needing to install all dependencies.

## Quick Test

Run the demo script:
```bash
node demo.js
```

## API Test (when server is running)

Test the API endpoint directly:
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "2336000632@utna.edu.mx",
    "subject": "Recordatorio de Tarea - UTNA",
    "message": "¡Hola! Este es un recordatorio amigable de que tienes que hacer la tarea."
  }'
```

## Expected Response

The API will return a JSON response like:
```json
{
  "success": true,
  "message": "Email enviado exitosamente a 2336000632@utna.edu.mx",
  "details": {
    "recipient": "2336000632@utna.edu.mx",
    "subject": "Recordatorio de Tarea - UTNA",
    "timestamp": "2025-08-25T14:29:16.415Z"
  }
}
```