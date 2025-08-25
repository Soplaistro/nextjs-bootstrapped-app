export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  try {
    const { to, subject, message } = req.body;

    // Validate the email address
    if (!to || !to.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido'
      });
    }

    // Email content that would be sent
    const emailContent = {
      from: '"Sistema de Tareas UTNA" <sistema@utna.edu.mx>',
      to: to,
      subject: subject || 'Recordatorio de Tarea',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
            <h2 style="color: #333; margin-top: 0;">📚 Recordatorio de Tarea</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin: 15px 0;">
              ${message}
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
      `,
      text: `
Recordatorio de Tarea - UTNA

${message}

Fecha de envío: ${new Date().toLocaleDateString('es-MX')} a las ${new Date().toLocaleTimeString('es-MX')}

Este es un mensaje automático del sistema de gestión de tareas de la Universidad Tecnológica del Norte de Aguascalientes (UTNA).
Si tienes alguna duda, contacta a tu profesor o coordinador académico.
      `
    };

    // Log the email content for demonstration purposes
    console.log('\n=== EMAIL ENVIADO ===');
    console.log('Para:', emailContent.to);
    console.log('Asunto:', emailContent.subject);
    console.log('Mensaje:', message);
    console.log('Fecha:', new Date().toISOString());
    console.log('==================\n');

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: `Email enviado exitosamente a ${to}`,
      details: {
        recipient: to,
        subject: emailContent.subject,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor al enviar el email'
    });
  }
}