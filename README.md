# Modo Noche app

## Descripción
Este proyecto es una implementación del diseño proporcionado en Figma utilizando React, TypeScript, React Router y Tailwind CSS. La aplicación presenta una página de "User Persona" con un diseño responsivo y un modo noche que cambia automáticamente según la preferencia del sistema o de manera manual.

## Tecnologías Utilizadas
- **React** (con TypeScript)
- **React Router** (para la navegación)
- **Tailwind CSS** (para el diseño y estilos)
- **Vite** (para un entorno de desarrollo rápido)

## Características
- Implementación fiel al diseño de Figma.
- Uso de componentes reutilizables en React con TypeScript.
- Implementación de modo noche con detección automática según la preferencia del sistema y opción manual.
- Diseño completamente responsivo utilizando Tailwind CSS y su sistema de grid.
- Navegación eficiente con React Router.

## Instalación y Uso
### 1. Clonar el repositorio
```bash
git clone https://github.com/MohhamedDaki/Modo-Noche-PRACTIA.git
cd user-persona-app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar la aplicación
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` por defecto.

## Estructura del Proyecto
```
/user-persona-app
├── src
│   ├── components  # Componentes reutilizables
│   ├── assets      # Imágenes y otros recursos
│   ├── hooks       
│   ├── context     
│   ├── routes      # Páginas y rutas
│   ├── App.css     # Estilado
│   ├── root.tsx    # Renderizado principal
│
├── public          # Archivos estáticos
├── tailwind.config.ts  # Configuración de Tailwind CSS
├── tsconfig.json   # Configuración de TypeScript
├── package.json    # Dependencias y scripts
└── README.md       # Documentación del proyecto
```

## Deploy
Puedes desplegar la aplicación en **Vercel**, **Netlify** o cualquier otro servicio compatible con React. Para desplegar en Vercel:
```bash
npm install -g vercel
vercel
```


