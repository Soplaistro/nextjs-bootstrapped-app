# 📧 Sistema de Recordatorios UTNA

Una aplicación Next.js para enviar recordatorios de tareas automáticamente a estudiantes.

## 🎯 Funcionalidad

Esta aplicación permite enviar un recordatorio por email al estudiante con matrícula `2336000632@utna.edu.mx` notificándole que tiene tareas pendientes por completar.

### Características:

- **Interfaz moderna**: UI intuitiva y responsive
- **Email automático**: Envío de recordatorios con mensaje personalizado
- **Simulación completa**: Muestra cómo funcionaría el sistema en producción
- **Logging detallado**: Los emails se registran en la consola del servidor

## 📨 Detalles del Email

- **Destinatario**: 2336000632@utna.edu.mx
- **Asunto**: Recordatorio de Tarea - UTNA
- **Mensaje**: Recordatorio amigable sobre tareas pendientes con información de contacto

## 🚀 Cómo usar

1. Abre la aplicación en tu navegador
2. Haz clic en el botón "🚀 Enviar Recordatorio"
3. El sistema enviará el email al destinatario especificado
4. Verás una confirmación del envío exitoso

## 💻 Estructura del Proyecto

```
├── app/
│   ├── api/send-email/
│   │   └── route.ts          # API endpoint para envío de emails
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal con UI
├── .env.local               # Variables de entorno
├── package.json             # Dependencias del proyecto
└── README.md               # Este archivo
```

## 🔧 Desarrollo

Para ejecutar en modo desarrollo:

```bash
npm run dev
```

Para construir para producción:

```bash
npm run build
npm start
```

## 📝 Notas Técnicas

- **Simulación**: En el entorno actual, los emails se simulan y se registran en la consola
- **Producción**: Para uso real, se requiere configuración SMTP (Gmail, SendGrid, etc.)
- **Seguridad**: Las credenciales de email se manejan a través de variables de entorno

## 🎓 Contexto Académico

Esta aplicación fue desarrollada para la Universidad Tecnológica del Norte de Aguascalientes (UTNA) como sistema de recordatorios automáticos para estudiantes.

---

*Sistema desarrollado para mejorar la comunicación académica y ayudar a los estudiantes a mantenerse al día con sus tareas.*