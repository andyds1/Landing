import { blogPosts } from '../data/blog-array.js'
import { formatDate, getURLParameter, redirectTo, updatePageTitle } from '../utility/utils.js'

// Load blog page with all posts
export function loadBlog () {
  renderFilters()
  renderBlogPosts(blogPosts)
  initBlogFilters()
}

// Load individual blog post
export function loadBlogPost () {
  const postId = parseInt(getURLParameter('id'))

  if (!postId) {
    redirectTo('blog.html')
    return
  }

  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    redirectTo('blog.html')
    return
  }

  // Update page title
  updatePageTitle(post.title)

  // Update post content
  document.querySelector('.blog-post-full h1').textContent = post.title

  const metaContainer = document.querySelector('.blog-post-full .blog-post-meta')
  metaContainer.innerHTML = `
    <span><i class="fa fa-calendar"></i> ${formatDate(post.date)}</span>
    <span><i class="fa fa-user"></i> ${post.author}</span>
  `

  const tagsContainer = document.querySelector('.blog-post-full .blog-post-tags')
  tagsContainer.innerHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')

  const contentContainer = document.querySelector('.blog-post-content')
  contentContainer.innerHTML = post.content
}

// Get all unique tags from blog posts
function getAllTags () {
  const tags = new Set()
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
}

// Render filter buttons
function renderFilters () {
  const filtersContainer = document.getElementById('filters')
  if (!filtersContainer) return

  const tags = getAllTags()

  let filtersHTML = '<button class="filter-button active" data-filter="all">All</button>'
  tags.forEach(tag => {
    filtersHTML += `<button class="filter-button" data-filter="${tag}">${tag}</button>`
  })

  filtersContainer.innerHTML = filtersHTML
}

// Initialize filter button click handlers
function initBlogFilters () {
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'))
      this.classList.add('active')
      filterPosts(this.dataset.filter)
    })
  })
}

// Render blog posts
function renderBlogPosts (posts) {
  const blogList = document.getElementById('blog-list')
  if (!blogList) return

  if (posts.length === 0) {
    blogList.innerHTML = '<p>No posts found for this category.</p>'
    return
  }

  let postsHTML = ''
  posts.forEach(post => {
    const tagsHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')

    postsHTML += `
      <article class="blog-post-card">
        <div class="blog-post-meta">
          <span><i class="fa fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fa fa-user"></i> ${post.author}</span>
        </div>
        <h2>${post.title}</h2>
        <div class="blog-post-tags">
          ${tagsHTML}
        </div>
        <p class="blog-post-excerpt">${post.excerpt}</p>
        <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
      </article>
    `
  })

  blogList.innerHTML = postsHTML
}

// Filter posts by tag
function filterPosts (tag) {
  if (tag === 'all') {
    renderBlogPosts(blogPosts)
  } else {
    const filtered = blogPosts.filter(post => post.tags.includes(tag))
    renderBlogPosts(filtered)
  }
}