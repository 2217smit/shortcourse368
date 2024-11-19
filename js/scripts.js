
// Simulate creating a new blog (static, in-memory functionality)
document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.querySelector('#create-blog-form');
    const blogList = document.querySelector('.blog-list');

    if (blogForm) {
        blogForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = e.target.elements['title'].value;

            if (title.trim()) {
                const newBlog = document.createElement('li');
                newBlog.innerHTML = `<a href="blog_detail.html">${title}</a>`;
                blogList.appendChild(newBlog);
                e.target.reset();
            }
        });
    }
});
