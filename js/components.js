// Shared components for the website
const components = {
    // Retain the legacy method name for existing consumers.
    getSidebar: function(pathPrefix = '') {
        return this.getHeader(pathPrefix);
    },

    getHeader: function(pathPrefix = '') {
        return `<a class="skip-link" href="#main">Skip to content</a>
        <header class="site-header">
            <a class="wordmark" href="${pathPrefix}index.html">Alan Zhao<span class="wordmark-dot" aria-hidden="true">.</span></a>
            <nav class="site-nav" aria-label="Main navigation">
                <a href="${pathPrefix}index.html#about">About</a>
                <a href="${pathPrefix}index.html#research">Research</a>
                <a href="${pathPrefix}index.html#build">Projects</a>
                <a href="${pathPrefix}index.html#blog" aria-current="page">Writing</a>
            </nav>
        </header>`;
    },

    getFooter: function() {
        return `<footer class="site-footer"><span>Alan (Jialiang) Zhao</span><a href="#main">Back to top ↑</a></footer>`;
    },

    // Generate common head content with enhanced SEO
    getCommonHead: function(title, description, canonical, pathPrefix = '', options = {}) {
        const {
            ogImage = `${pathPrefix}images/profile.jpg`,
            ogType = 'website',
            twitterCard = 'summary',
            author = 'Alan (Jialiang) Zhao',
            keywords = 'robotics, AI, MIT, tactile sensing, robot learning, manipulation',
            publishDate = '',
            modifiedDate = new Date().toISOString()
        } = options;

        return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <!-- Primary Meta Tags -->
        <title>${title}</title>
        <meta name="title" content="${title}">
        <meta name="description" content="${description}">
        <meta name="author" content="${author}">
        <meta name="keywords" content="${keywords}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="${ogType}">
        <meta property="og:url" content="${canonical}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${new URL(ogImage, canonical).href}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="Alan (Jialiang) Zhao">
        <meta property="og:locale" content="en_US">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="${twitterCard}">
        <meta property="twitter:url" content="${canonical}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${description}">
        <meta property="twitter:image" content="${new URL(ogImage, canonical).href}">
        <meta property="twitter:creator" content="@alanzjl">
        
        <!-- Canonical URL -->
        <link rel="canonical" href="${canonical}">
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="${pathPrefix}images/favicon.ico?v=profile-rounded-2026">
        <link rel="icon" type="image/png" sizes="32x32" href="${pathPrefix}images/favicon-32.png?v=profile-rounded-2026">
        <link rel="apple-touch-icon" sizes="180x180" href="${pathPrefix}images/apple-touch-icon.png?v=profile-2026">
        
        <!-- Theme Color -->
        <meta name="theme-color" content="#faf9f6">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        
        ${publishDate ? `<meta property="article:published_time" content="${publishDate}">` : ''}
        ${modifiedDate ? `<meta property="article:modified_time" content="${modifiedDate}">` : ''}
        
        <link rel="stylesheet" href="${pathPrefix}style.css">`;
    },

    // No external JavaScript is needed for navigation or layout.
    getCommonScripts: function() {
        return '';
    },

    // Initialize components on page load
    init: function(config = {}) {
        const { 
            pathPrefix = '', 
            renderSidebar = true, 
            renderFooter = true,
            sidebarSelector = '#sidebar-container',
            footerSelector = '#footer-container'
        } = config;

        // Render sidebar if container exists
        if (renderSidebar) {
            const sidebarContainer = document.querySelector(sidebarSelector);
            if (sidebarContainer) {
                sidebarContainer.innerHTML = this.getSidebar(pathPrefix);
            }
        }

        // Render footer if container exists
        if (renderFooter) {
            const footerContainer = document.querySelector(footerSelector);
            if (footerContainer) {
                footerContainer.innerHTML = this.getFooter();
            }
        }
    }
};

// Auto-initialize on DOM load if containers are present
document.addEventListener('DOMContentLoaded', function() {
    // Check if auto-init is enabled via data attribute
    if (document.body.dataset.autoInitComponents !== 'false') {
        const pathPrefix = document.body.dataset.pathPrefix || '';
        components.init({ pathPrefix });
    }
});