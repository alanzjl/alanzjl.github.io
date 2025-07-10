# Website Refactoring Guide

This guide explains the refactoring done to reduce code redundancy in the website.

## Overview

The refactoring introduces shared JavaScript components to eliminate duplicated HTML code across multiple pages, particularly for:
- Sidebar (profile section and contact links)
- Footer
- Common head elements (meta tags, fonts, stylesheets)
- Common scripts (Bootstrap, Popper.js)

## New Files Created

### 1. `/js/components.js`
Main component library that provides reusable HTML generation functions:
- `getSidebar(pathPrefix)` - Generates the sidebar HTML
- `getFooter()` - Generates the footer HTML
- `getCommonHead(title, description, canonical, pathPrefix)` - Generates common head elements
- `getCommonScripts()` - Generates common script tags
- `init(config)` - Auto-initializes components on page load

### 2. `/css/blog.css`
Shared CSS file for all blog posts containing blog-specific styles.

### 3. `/js/blog-template.js`
Helper for creating new blog posts with consistent structure.

## How to Use

### For Blog Posts

1. Include the shared CSS and components:
```html
<link rel="stylesheet" href="../css/blog.css">
<script src="../js/components.js"></script>
```

2. Add placeholders in your HTML:
```html
<body data-path-prefix="../">
    <div class="main-container">
        <!-- Sidebar will be injected here -->
        <div id="sidebar-container"></div>
        
        <!-- Your content here -->
        
    </div>
    
    <!-- Footer will be injected here -->
    <div id="footer-container"></div>
</body>
```

3. The components will auto-initialize on page load if `data-path-prefix` is set.

### For the Main Index Page

Due to the unique content structure of index.html, you can either:
1. Use the same approach as blog posts
2. Or manually initialize components with custom configuration

## Benefits

1. **Reduced Redundancy**: Sidebar code reduced from ~40 lines per file to 1 line
2. **Easier Maintenance**: Update profile info in one place
3. **Consistent Styling**: Shared CSS ensures uniform appearance
4. **Faster Development**: New blog posts can be created more quickly

## Migration Status

- ✅ `/blog/welcome.html` - Refactored
- ✅ `/blog/alkaid-mount.html` - Refactored
- ⏳ `/index.html` - Demo version created as `index-refactored.html`

## Notes

- The `pathPrefix` parameter handles relative paths correctly for files in subdirectories
- Components auto-initialize on DOM load unless `data-auto-init-components="false"` is set
- The sidebar and footer are injected dynamically, so they won't appear in the HTML source