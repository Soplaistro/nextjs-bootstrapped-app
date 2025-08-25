#!/usr/bin/env node

// Demo script to show email functionality
console.log('🚀 DEMO: Sistema de Recordatorios UTNA\n');
console.log('='.repeat(50));

// Simulate the API call
const emailData = {
  to: '2336000632@utna.edu.mx',
  subject: 'Recordatorio de Tarea - UTNA',
  message: '¡Hola! Este es un recordatorio amigable de que tienes que hacer la tarea. Por favor, no olvides completar tus asignaciones pendientes para mantener tu progreso académico al día. Si necesitas ayuda, no dudes en contactar a tu profesor o coordinador académico.'
};

// Simulate email processing
console.log('\n=== EMAIL ENVIADO ===');
console.log('Para:', emailData.to);
console.log('Asunto:', emailData.subject);
console.log('Mensaje:', emailData.message);
console.log('Fecha:', new Date().toISOString());
console.log('Fecha (México):', new Date().toLocaleDateString('es-MX'), 'a las', new Date().toLocaleTimeString('es-MX'));
console.log('==================\n');

// Simulate HTML content
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Recordatorio de Tarea - UTNA</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
            <h2 style="color: #333; margin-top: 0;">📚 Recordatorio de Tarea</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin: 15px 0;">
                ${emailData.message}
            </p>
            <div style="background-color: #fff; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="color: #666; margin: 0; font-size: 14px;">
                    <strong>📅 Fecha de envío:</strong> ${new Date().toLocaleDateString('es-MX')} a las ${new Date().toLocaleTimeString('es-MX')}
                </p>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
            <p style="font-size: 12px; color: #888; margin: 0;">
                Este es un mensaje automático del sistema de gestión de tareas de la Universidad Tecnológica del Norte de Aguascalientes (UTNA).
                <br>Si tienes alguna duda, contacta a tu profesor o coordinador académico.
            </p>
        </div>
    </div>
</body>
</html>
`;

console.log('✅ Email simulado enviado exitosamente!');
console.log('📧 El email tendría el siguiente contenido HTML:');
console.log('-'.repeat(50));
console.log(htmlContent);
console.log('-'.repeat(50));

console.log('\n💡 Para usar en producción:');
console.log('1. Instala las dependencias: npm install');
console.log('2. Configura variables de entorno SMTP en .env.local');
console.log('3. Ejecuta: npm run dev');
console.log('4. Abre http://localhost:3000 en tu navegador');
console.log('5. Haz clic en "🚀 Enviar Recordatorio"');

console.log('\n🎓 Sistema desarrollado para UTNA');
console.log('📮 Destinatario: 2336000632@utna.edu.mx');