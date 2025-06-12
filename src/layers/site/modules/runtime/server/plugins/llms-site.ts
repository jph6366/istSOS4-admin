// Site Layer runtime server plugin for LLMs documentation
export default defineNitroPlugin(async (nitroApp) => {
  console.log('Site LLMs plugin loaded')
  
  nitroApp.hooks.hook('llms:generate', async (event, options) => {
    console.log('Site llms:generate hook called')
    // Add Site layer specific documentation
    options.sections.push({
      title: 'Site Components & Layout',
      description: 'General purpose components, layouts, and pages for the istSOS4 Admin interface',
      links: [
        {
          title: 'Main Layout',
          description: 'Primary application layout with header, footer, and navigation structure',
          href: `${options.domain}/layouts/MainLayout`
        },
        {
          title: 'Main Header',
          description: 'Application header component with navigation and branding',
          href: `${options.domain}/components/MainHeader`
        },
        {
          title: 'Main Footer',
          description: 'Application footer with links and information',
          href: `${options.domain}/components/MainFooter`
        },
        {
          title: 'Default Layout',
          description: 'Default page layout for standard content pages',
          href: `${options.domain}/layouts/default`
        }
      ]
    })

    options.sections.push({
      title: 'Shared Utilities',
      description: 'Common utilities, error handling, and type definitions shared across the application',
      links: [
        {
          title: 'HTTP Error Handling',
          description: 'Standardized HTTP error classes and status code management',
          href: `${options.domain}/shared/http/HttpError`
        },
        {
          title: 'Parse Error Utilities',
          description: 'Error parsing and validation utilities for data processing',
          href: `${options.domain}/shared/error/ParseError`
        },
        {
          title: 'HTTP Status Codes',
          description: 'Enumeration of HTTP status codes for consistent error handling',
          href: `${options.domain}/shared/http/HttpStatusCode`
        }
      ]
    })
  })

  nitroApp.hooks.hook('llms:generate:full', async (event, options, contents) => {
    console.log('Site llms:generate:full hook called')
    contents.push(`## Site Layer Architecture

### Purpose
The Site layer serves as a general-purpose container for non-specific concerns in the istSOS4 Admin application. It provides common components, layouts, and utilities that don't belong to specific domain modules.

### Component Structure

#### Layout Components
The site layer includes essential layout components for consistent UI structure:

**MainLayout.vue**
- Primary application wrapper
- Provides consistent header/footer structure
- Responsive design implementation
- Navigation integration

**MainHeader.vue**  
- Application branding and title
- Primary navigation menu
- User authentication status
- Responsive navigation collapse

**MainFooter.vue**
- Copyright information
- Additional navigation links
- Contact information
- Social media links

**Default Layout**
- Standard page template
- Content area with proper spacing
- Sidebar integration capability
- Breadcrumb navigation support

### Shared Utilities

#### Error Handling System
The site layer implements a comprehensive error handling system:

**HttpError.ts**
\`\`\`typescript
class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message)
    this.name = 'HttpError'
  }
}
\`\`\`

**ParseError.ts**
Specialized error handling for data parsing and validation:
- JSON parsing errors
- Schema validation failures
- Type conversion errors
- Data format inconsistencies

**HttpStatusCode.ts**
Enumeration of standard HTTP status codes:
- 200 range: Success responses
- 400 range: Client error responses  
- 500 range: Server error responses

### Configuration
The site layer configuration emphasizes modularity:

\`\`\`typescript
export default defineNuxtConfig({
  components: [{
    path: 'components',
    pathPrefix: false, // No component prefixing
  }],
  dir: {
    layouts: 'layouts',
    modules: 'modules', 
    pages: 'pages',
    public: 'public',
    shared: 'shared',
  }
})
\`\`\`

### Design Principles
1. **Modularity**: Components are self-contained and reusable
2. **Consistency**: Standardized patterns across all components
3. **Accessibility**: WCAG compliance for inclusive design
4. **Responsiveness**: Mobile-first responsive design approach
5. **Performance**: Optimized for fast loading and rendering

### Integration with Other Layers
The site layer serves as the foundation for:
- Core layer: Provides base functionality and assets
- STA layer: Implements SensorThings API specific features
- Admin layer: Administrative interface components

### Static Assets
- Favicon and application icons
- Robots.txt for search engine optimization
- Static images and graphics
- Font files and typography assets`)
  })
})
