// Shared components for the website
const components = {
    // Generate sidebar HTML
    getSidebar: function(pathPrefix = '') {
        return `
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-content">
                <div class="profile-section">
                    <img src="${pathPrefix}images/profile.jpg" alt="Alan Zhao" id="profilePicture" class="profile-picture">
                    <h1 class="profile-name">Alan <span class="nickname">(Jialiang)</span> Zhao</h1>
                    <a href="https://alanz.info/myname/index.html" class="chinese-name"><span class="cn-name" lang="zh-Hans">赵家樑</span></a>
                    <p class="profile-title">Robotics and AI</p>
                    <p class="profile-affiliation">1X Technologies & Ph.D from MIT CSAIL</p>
                </div>
                
                <nav class="contact-links">
                    <a class="contact-link" href="https://www.linkedin.com/in/jialiang-zhao">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a class="contact-link" href="https://github.com/alanzjl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a class="contact-link" href="https://scholar.google.com/citations?user=LaW7igYAAAAJ&hl=en">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <span>Scholar</span>
                    </a>
                    <a class="contact-link" href="mailto:alanzhao@csail.mit.edu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                        </svg>
                        <span>Email</span>
                    </a>
                </nav>
            </div>
        </aside>`;
    },

    // Generate footer HTML
    getFooter: function() {
        return `
        <footer class="footer">
            2025 By Alan (Jialiang) Zhao
        </footer>`;
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
        <meta property="og:image" content="https://alanz.info/${ogImage}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="Alan (Jialiang) Zhao">
        <meta property="og:locale" content="en_US">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="${twitterCard}">
        <meta property="twitter:url" content="${canonical}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${description}">
        <meta property="twitter:image" content="https://alanz.info/${ogImage}">
        <meta property="twitter:creator" content="@alanzjl">
        
        <!-- Canonical URL -->
        <link rel="canonical" href="${canonical}">
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="${pathPrefix}images/favicon.ico">
        <link rel="apple-touch-icon" sizes="180x180" href="${pathPrefix}images/apple-touch-icon.png">
        
        <!-- Theme Color -->
        <meta name="theme-color" content="#52796f">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        
        ${publishDate ? `<meta property="article:published_time" content="${publishDate}">` : ''}
        ${modifiedDate ? `<meta property="article:modified_time" content="${modifiedDate}">` : ''}
        
        <!-- Preconnect to external domains -->
        <link rel="preconnect" href="https://cdn.jsdelivr.net">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        
        <!-- Fonts -->
        <style>
            @font-face {
                font-family: 'Exo';
                src: url("${pathPrefix}fonts/Exo-VariableFont_wght.ttf"), url("${pathPrefix}fonts/Exo-Italic-VariableFont_wght.ttf");
                font-display: swap;
            }
            @font-face {
                font-family: 'kai';
                src: url("${pathPrefix}fonts/kai.ttf");
                font-display: swap;
            }
        </style>
        
        <!-- Stylesheets -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        <link rel="stylesheet" href="${pathPrefix}style.css">`;
    },

    // Generate common scripts
    getCommonScripts: function() {
        return `
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>`;
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