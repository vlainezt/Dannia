# Dannia Assistant - Tutorial Asistente Conversacional (DEMO)

Prueba de tu asistentente Dannia, para demostrar cómo funciona la transmisión de micrófono a GCP, desde una aplicación web.

En esta demostración, puede comenzar a grabar su voz, mostrará las respuestas en una pantalla.

## Pasos de configuración

Estos pasos implementarán una aplicación Node JS con un cliente Angular, en un clúster con **Cloud Run for Anthos**.
También implementará un agente de Dialogflow, para la coincidencia de intenciones.

### Ejecutar secuencia de comandos de configuración

1. Cree el siguiente proyecto y asígnele cuentas de facturación:

   - Dannia

2. Configure la variable PROJECT_ID: export PROJECT_ID=[gcp-project-id]
   
3. Asegúrese de que `$PROJECT_ID` esté configurado: `gcloud config set project $PROJECT_ID`


4. (Opcional) Corrija las variables de entorno. Primero `nano env.txt` luego `mv env.txt .env`

5. Para iniciar la instalación: `. setup.sh` 

