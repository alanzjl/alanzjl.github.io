// Blog template helper
const blogTemplate = {
    // Generate a complete blog page
    createBlogPage: function(config) {
        const {
            title,
            date,
            content,
            canonical
        } = config;

        return `<!DOCTYPE html>
<html lang="en">
<head>
    ${components.getCommonHead(
        `${title} - Alan (Jialiang) Zhao`,
        title,
        canonical,
        '../'
    )}
    <link rel="stylesheet" href="../css/blog.css">
</head>

<body>
    ${components.getHeader('../')}
    <div class="main-container">

        
        <!-- Main Content Area -->
        <div class="content-area">
            <main class="main-content" id="main">
                <div class="back-link">
                    <a href="../index.html#blog">← All writing</a>
                </div>
                
                <article>
                    <header class="blog-header">
                        <h1 class="blog-title">${title}</h1>
                        <div class="blog-meta">${date}</div>
                    </header>
                    
                    <div class="blog-content">
                        ${content}
                    </div>
                </article>
            </main>
        </div>
    </div>

    ${components.getFooter()}

    ${components.getCommonScripts()}
</body>
</html>`;
    }
};