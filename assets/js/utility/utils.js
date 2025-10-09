// Detect current page from URL
export function getCurrentPage () {
  const path = window.location.pathname
  if (path.includes('projects.html') || path.includes('project-detail.html')) {
    return 'projects'
  } else if (path.includes('about.html')) {
    return 'about'
  } else if (path.includes('contact.html')) {
    return 'contact'
  } else if (path.includes('blog.html') || path.includes('blog-post.html')) {
    return 'blog'
  } else {
    return 'home'
  }
}

// Format date to readable string
export function formatDate (dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Get URL parameter by name
export function getURLParameter (name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

// Redirect to a page
export function redirectTo (page) {
  window.location.href = page
}

// Update page title
export function updatePageTitle (title) {
  document.title = `${title} - Andy De Schuytener`
}