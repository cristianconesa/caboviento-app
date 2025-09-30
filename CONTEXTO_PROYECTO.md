# CaboViento App - Contexto y Requerimientos

## Resumen del Proyecto
Aplicación móvil para la gestión de viajes grupales de kitesurf, con autenticación Google, calendario de viajes, chat grupal, perfil de usuario, reportes y sugerencias. Soporte multilenguaje (español/inglés), tema visual oscuro y detalles en verde moderno.

## Stack Tecnológico
- **React Native (Expo)**
- **NativeWind** (Tailwind para React Native)
- **React Navigation** (Stack y Tabs)
- **expo-auth-session** (Login Google)
- **i18next + react-i18next** (Multilenguaje)
- **react-native-calendars** (Calendario minimalista)
- **AsyncStorage** (Persistencia local)

## Tema Visual
- Fondo negro predominante
- Grises para recuadros y textos secundarios
- Detalles en verde moderno (`#00e676`)

## Funcionalidades
### Autenticación
- Login solo con Google
- Selección de nombre de usuario único (además del nombre/apellido de Google)
- Persistencia de sesión

### Home
- Calendario del mes actual (días pasados deshabilitados)
- Días actuales y futuros seleccionables
- Modal fullscreen con viajes del día seleccionado (scroll, X grande)
- Frase principal en Home

### Detalle de Viaje
- Info del viaje, creador, cupos, horarios, valor, historial de viajes del creador
- Restricción: máx 3 reservas activas por usuario
- Solo el creador puede editar su viaje (en futuro)

### Perfil
- Imagen de perfil, nombre de usuario, edad, sexo (mujer/hombre/ninguna)

### Mensajes
- Chat grupal por viaje
- Botón "solicitar" para reservar viaje (cambia a "solicitado")

### Denuncias
- Formulario simple para reportar incidentes, llega directo al admin/desarrollador

### Sugerencias
- Formulario simple (nombre, email, sugerencia)

## Otros datos
- Logo en `assets/logo.png`
- Idioma principal: español, con traducción a inglés
- Botón de crear viaje solo para usuarios logueados
- Usar un verde moderno (`#00e676`), editable
- Calendario minimalista y personalizable

## Estructura de Carpetas Sugerida
```
CaboViento/
├── App.tsx
├── assets/
│   └── logo.png
├── components/
│   ├── Calendar.tsx
│   ├── CustomModal.tsx
│   └── ...
├── navigation/
│   └── index.tsx
├── screens/
│   ├── HomeScreen.tsx
│   ├── RideDetailScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── MessagesScreen.tsx
│   ├── ReportScreen.tsx
│   ├── SuggestionsScreen.tsx
│   └── ...
├── locales/
│   ├── es.json
│   └── en.json
├── tailwind.config.js
├── app.json
└── ...
```

## Buenas Prácticas
- Componentes reutilizables y tipados
- Separar lógica y UI
- Navegación protegida para usuarios autenticados
- Código y comentarios en español
- Uso de hooks y contexto para usuario/sesión

---

> Última actualización: 30/09/2025
