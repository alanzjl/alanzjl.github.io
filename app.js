const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Remove old scroll functionality as we have a fixed sidebar now
// The mobile menu toggle is handled inline in the HTML

let linkItems = document.querySelectorAll(".link-item");
for (let linkItem of linkItems) {
  linkItem.innerText = `[${linkItem.innerText}]`;
}

// Blog posts data
const blogPosts = [
  {
    id: 2,
    title: "DIY Equatorial Mount with HarmonicDrive",
    date: "2022-07-01",
    excerpt: "Building a precision equatorial mount for astrophotography using HarmonicDrive gearboxes. A complete guide from design to assembly.",
    url: "blog/alkaid-mount.html"
  },
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "2025-01-10",
    excerpt: "This is the beginning of my blog where I'll share thoughts on robotics, AI, and my various projects.",
    url: "blog/welcome.html"
  }
  // Add more blog posts here
];

// Function to render blog posts
function renderBlogPosts() {
  const blogList = document.querySelector('.blog-list');
  if (!blogList) return;
  
  if (blogPosts.length === 0) {
    blogList.innerHTML = '<p class="text-center text-muted">Blog posts coming soon...</p>';
    return;
  }
  
  blogList.innerHTML = blogPosts.map(post => `
    <div class="blog-post-item">
      <h3 class="blog-post-title">
        <a href="${post.url}">${post.title}</a>
      </h3>
      <div class="blog-post-date">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      <p class="blog-post-excerpt">${post.excerpt}</p>
    </div>
  `).join('');
}

// Call renderBlogPosts when the page loads
document.addEventListener('DOMContentLoaded', function() {
  renderBlogPosts();
});

// Handle tab changes to maintain scroll position
document.querySelectorAll('#mainTabs button').forEach(button => {
  button.addEventListener('shown.bs.tab', function() {
    window.scrollTo(0, 0);
  });
});