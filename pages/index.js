import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [lastSent, setLastSent] = useState(null);

  const sendEmail = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '2336000632@utna.edu.mx',
          subject: 'Recordatorio de Tarea - UTNA',
          message: '¡Hola! Este es un recordatorio amigable de que tienes que hacer la tarea. Por favor, no olvides completar tus asignaciones pendientes para mantener tu progreso académico al día. Si necesitas ayuda, no dudes en contactar a tu profesor o coordinador académico.'
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setMessage('¡Email enviado exitosamente a 2336000632@utna.edu.mx!');
        setLastSent(new Date().toLocaleString('es-MX'));
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error de conexión: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sistema de Recordatorios UTNA</title>
        <meta name="description" content="Next.js app for sending homework reminders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        padding: '2rem', 
        maxWidth: '900px', 
        margin: '0 auto',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              color: '#333',
              fontSize: '2.5rem',
              marginBottom: '0.5rem'
            }}>
              📧 Sistema de Recordatorios UTNA
            </h1>
            <p style={{ 
              color: '#666',
              fontSize: '1.1rem'
            }}>
              Envío automático de recordatorios de tareas
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#e7f3ff',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid #b8daff'
          }}>
            <h2 style={{ 
              marginBottom: '1rem', 
              color: '#0056b3',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🎯 Detalles del Email
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <strong style={{ color: '#333' }}>📮 Destinatario:</strong>
                <div style={{ color: '#666', fontSize: '1.1rem', marginTop: '0.25rem' }}>
                  2336000632@utna.edu.mx
                </div>
              </div>
              <div>
                <strong style={{ color: '#333' }}>📋 Asunto:</strong>
                <div style={{ color: '#666', marginTop: '0.25rem' }}>
                  Recordatorio de Tarea - UTNA
                </div>
              </div>
              <div>
                <strong style={{ color: '#333' }}>📝 Mensaje:</strong>
                <div style={{ 
                  color: '#666', 
                  marginTop: '0.5rem',
                  padding: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  border: '1px solid #dee2e6',
                  lineHeight: '1.6'
                }}>
                  ¡Hola! Este es un recordatorio amigable de que tienes que hacer la tarea. 
                  Por favor, no olvides completar tus asignaciones pendientes para mantener 
                  tu progreso académico al día. Si necesitas ayuda, no dudes en contactar 
                  a tu profesor o coordinador académico.
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button
              onClick={sendEmail}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#6c757d' : '#007bff',
                color: 'white',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isLoading ? 'none' : '0 2px 8px rgba(0, 123, 255, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {isLoading ? '📤 Enviando...' : '🚀 Enviar Recordatorio'}
            </button>
          </div>

          {message && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
              color: message.includes('Error') ? '#721c24' : '#155724',
              borderRadius: '8px',
              border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
              textAlign: 'center',
              fontSize: '1.1rem'
            }}>
              <div style={{ 
                fontSize: '1.5rem', 
                marginBottom: '0.5rem' 
              }}>
                {message.includes('Error') ? '❌' : '✅'}
              </div>
              {message}
            </div>
          )}

          {lastSent && (
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              border: '1px solid #dee2e6',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#6c757d'
            }}>
              <strong>🕒 Último envío:</strong> {lastSent}
            </div>
          )}

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            border: '1px solid #ffeaa7'
          }}>
            <h3 style={{ 
              color: '#856404', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              💡 Información Técnica
            </h3>
            <div style={{ color: '#856404', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0.5rem 0' }}>
                • Este sistema simula el envío de emails para propósitos de demostración
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                • En producción, se integraría con un servicio de email real (SMTP, SendGrid, etc.)
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                • Los logs del servidor mostrarán los detalles del email "enviado"
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}