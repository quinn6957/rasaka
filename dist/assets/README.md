# Public Assets Directory

This directory contains all public assets that are served directly by the web server and accessible via direct URLs. These assets are separate from SharePoint storage and are publicly available on the internet.

## Directory Structure

```
/public/assets/
├── logos/           # Company and product logos
├── banners/         # Marketing banners and hero images
├── icons/           # Icons and small graphics
├── documents/       # Public downloadable documents
└── README.md        # This file
```

## Asset Types and Usage

### Logos (`/assets/logos/`)
- Main company logos in various formats and sizes
- Brand assets for consistent presentation
- Available formats: SVG (preferred), PNG, JPG

**Usage in React components:**
```jsx
<img src="/assets/logos/vaiiya-logo.svg" alt="VAIIYA Logo" />
```

**Direct URL access:**
```
https://yourdomain.com/assets/logos/vaiiya-logo.svg
```

### Banners (`/assets/banners/`)
- Hero banners for landing pages
- Promotional graphics
- Social media banners

### Icons (`/assets/icons/`)
- UI icons and small graphics
- Social media icons
- Favicons and app icons

### Documents (`/assets/documents/`)
- Public PDFs, brochures, and reports
- Marketing materials
- Legal documents (public versions only)

## Best Practices

### File Naming
- Use kebab-case: `company-logo.svg`
- Include dimensions for clarity: `banner-1200x400.png`
- Use descriptive names: `quarterly-report-2024.pdf`

### File Formats
- **SVG**: Vector graphics, logos, simple icons (preferred for scalability)
- **PNG**: Images with transparency, complex icons
- **JPG**: Photographs, complex images without transparency
- **WebP**: Modern format for optimized web delivery
- **PDF**: Documents and printable materials

### File Size Optimization
- Compress images before uploading
- Use appropriate formats for content type
- Consider lazy loading for large images
- Optimize SVGs by removing unnecessary metadata

### Security Considerations
- **Public access**: All files in this directory are publicly accessible
- **No sensitive data**: Never place confidential documents here
- **SharePoint for private**: Use SharePoint for sensitive or access-controlled content
- **Version control**: Consider versioning for frequently updated assets

## Integration with Components

### React Components
```jsx
// Direct reference
<img src="/assets/logos/logo.svg" alt="Logo" />

// With import (for bundled assets)
import logo from '/assets/logos/logo.svg';
<img src={logo} alt="Logo" />

// Background image in CSS
<div style={{ backgroundImage: 'url(/assets/banners/hero.jpg)' }} />
```

### CSS Files
```css
.hero {
  background-image: url('/assets/banners/hero-banner.jpg');
}

.logo {
  content: url('/assets/logos/small-logo.svg');
}
```

### HTML
```html
<!-- Favicon -->
<link rel="icon" href="/assets/icons/favicon.ico" />

<!-- Open Graph image -->
<meta property="og:image" content="/assets/banners/social-share.png" />

<!-- Direct download link -->
<a href="/assets/documents/brochure.pdf" download>Download Brochure</a>
```

## Deployment Considerations

1. **CDN Integration**: Consider using a CDN for better performance
2. **Caching**: Set appropriate cache headers for static assets
3. **Backup**: Maintain backups of critical brand assets
4. **Access Control**: Monitor access logs for unusual activity

## Asset Management Workflow

1. **Add New Assets**: Place files in appropriate subdirectories
2. **Update Components**: Reference new assets in your React components
3. **Test Locally**: Verify assets load correctly in development
4. **Deploy**: Assets are automatically deployed with the application
5. **Verify**: Check that assets are accessible at their public URLs

## Performance Tips

- Use WebP format for better compression
- Implement responsive images with multiple sizes
- Lazy load images below the fold
- Compress SVGs and remove unnecessary metadata
- Use appropriate image dimensions (don't rely on CSS scaling)

## Troubleshooting

**Asset not loading?**
- Check file path and case sensitivity
- Verify file exists in public directory
- Check browser network tab for 404 errors
- Ensure proper file permissions

**Large file sizes?**
- Compress images using tools like TinyPNG
- Use appropriate formats (WebP for photos, SVG for graphics)
- Consider multiple sizes for responsive design

**Need private assets?**
- Use SharePoint for sensitive or access-controlled content
- Consider implementing authentication for protected assets
- Use environment-specific asset URLs for development vs. production