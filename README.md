# TalenTech Financial Products Platform

Una plataforma moderna para la visualización y gestión de productos financieros, construida con Next.js, TypeScript y Tailwind CSS.

## Características

- Visualización de productos financieros con información detallada
- Filtrado por categoría y nivel de riesgo
- Gráficos de riesgo-retorno
- Diseño responsivo y accesible
- Tipado estricto con TypeScript
- Componentes reutilizables y bien estructurados

## Tecnologías

- **Next.js 15**: Framework React para renderizado del lado del servidor
- **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad
- **Tailwind CSS**: Framework de utilidades CSS para estilos rápidos y consistentes
- **Styled Components**: Para componentes estilizados reutilizables
- **ESLint**: Para mantener la calidad del código
- **Prettier**: Para formateo consistente del código

## Estructura del Proyecto

```
src/
├── app/              # Rutas y páginas de Next.js
├── components/       # Componentes React reutilizables
│   └── styled/      # Componentes estilizados base
├── hooks/           # Custom hooks
├── types/           # Definiciones de tipos TypeScript
└── data/            # Datos y mocks
```

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd test
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## Desarrollo

### Convenciones de Código

- **Componentes**: Usar PascalCase para nombres de componentes
- **Hooks**: Prefijo 'use' para custom hooks
- **Tipos**: Interfaces para objetos, types para uniones
- **Estilos**: Tailwind para estilos específicos, Styled Components para componentes base

### Estructura de Commits 

Los commits deben seguir el formato:
```
feat: nueva característica
fix: corrección de bug
docs: documentación
style: cambios de formato
refactor: refactorización de código
test: pruebas
```

## Accesibilidad

El proyecto sigue las mejores prácticas de accesibilidad:
- ARIA labels para elementos interactivos
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos para imágenes

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

