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
git clone [[url-del-repositorio]](https://github.com/rescobars/fintechpro.git)
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
pnpm dev  # Recomendado
# o
npm run dev
# o
yarn dev
```

> 💡 **¿Por qué usar pnpm?**
> - **Eficiencia en el espacio**: pnpm usa un almacenamiento de contenido direccionable que evita duplicar paquetes, ahorrando espacio en disco.
> - **Instalación más rápida**: Al usar enlaces duros y un almacenamiento compartido, las instalaciones son significativamente más rápidas.
> - **Seguridad mejorada**: pnpm crea una estructura de node_modules estricta que evita el acceso a paquetes no declarados.
> - **Consistencia**: Garantiza que todos los desarrolladores usen exactamente las mismas versiones de dependencias.

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

## Preguntas Complementarias

### 1. Criterios de Diseño UI para Productos Financieros

Para el diseño de la UI de productos financieros, seguí los siguientes criterios:

- **Claridad y Simplicidad**: 
  - Diseño limpio y minimalista para evitar sobrecarga de información
  - Jerarquía visual clara para destacar información importante
  - Uso de iconografía y colores consistentes para indicar niveles de riesgo

- **Accesibilidad**:
  - Contraste adecuado para texto y fondos
  - Etiquetas ARIA para mejorar la accesibilidad
  - Tamaños de fuente legibles y espaciado consistente

- **Experiencia de Usuario**:
  - Flujo intuitivo para la exploración de productos
  - Filtros y búsqueda fáciles de usar
  - Feedback visual inmediato en interacciones

- **Seguridad y Confianza**:
  - Diseño profesional y corporativo
  - Indicadores claros de seguridad
  - Transparencia en la presentación de información financiera

### 2. Decisión entre Tailwind y Styled Components

La elección entre Tailwind CSS y Styled Components se basó en los siguientes criterios:

- **Tailwind CSS**:
  - Uso en componentes de layout y estructura general
  - Estilos utilitarios para espaciado, grid, y flexbox
  - Componentes que requieren alta personalización y reutilización
  - Ventaja en desarrollo rápido y mantenimiento

- **Styled Components**:
  - Componentes con lógica de estilo compleja
  - Temas dinámicos y props condicionales
  - Componentes que necesitan encapsulación de estilos
  - Ventaja en componentes reutilizables con variantes

### 3. Estrategia de Escalabilidad para Banca Digital

Para escalar este proyecto a una aplicación real de banca digital, implementaría:

- **Arquitectura Frontend**:
  - **Optimización de Rendimiento**:
    - Code splitting por rutas y componentes
    - Virtualización de listas largas (react-window)
    - Memoización de componentes con React.memo y useMemo

  - **Gestión de Estado**:
    - Normalización de datos con Redux Toolkit
    - Caché local con IndexedDB
    - Optimistic updates para mejor UX
    - Gestión de errores y estados de carga

  - **Componentes y UI**:
    - Sistema de diseño atómico
    - Storybook para documentación y testing visual
    - Temas dinámicos con CSS Variables

- **Arquitectura Backend (API)**:
  - GraphQL para consultas eficientes
  - Caché de consultas frecuentes (TRPC)
  - Rate limiting y throttling
  - WebSockets para actualizaciones en tiempo real

- **Seguridad**:
  - JWT con refresh tokens
  - SSO
  - Sanitización de inputs
  - Protección contra XSS y CSRF
  - Validación de datos en frontend y backend

- **Monitoreo y Analytics**:
  - Segmentación de usuarios
  - Tracking de errores en producción
  - Métricas de rendimiento (Core Web Vitals)
  - A/B testing de features

### 4. Herramientas de Rendimiento y Monitoreo

Para mejorar el rendimiento y monitoreo en producción:

- **Monitoreo**:
  - Datadog para APM
  - Sentry para monitoreo de errores
  - Posthog para reproducción de sesiones

- **Optimización**:
  - CDN para assets estáticos
  - Lazy loading de componentes
  - Optimización de imágenes

- **CI/CD**:
  - GitHub Actions para automatización
  - Pruebas automatizadas
  - Despliegue gradual (canary releases)

- **Seguridad**:
  - WAF (Web Application Firewall)
  - Escaneo de vulnerabilidades
  - Monitoreo de intentos de intrusión
  - Auditorías de seguridad periódicas

