import * as templates from './utility/templates.js'
import * as ProjectsModule from './modules/projects.js'
import * as BlogModule from './modules/blog.js'
import * as ContactModule from './modules/contact.js'
import * as Nav from './utility/nav.js'
import { getCurrentPage } from './utility/utils.js'

// Initialize the application
init()

function init () {
  const currentPage = getCurrentPage()
  templates.initHeader(currentPage)
  templates.initFooter(currentPage)
  Nav.initBurgerMenu()
  routePage(currentPage)
}

// Route to the appropriate page module
function routePage (currentPage) {
  const path = window.location.pathname

  if (path.includes('projects.html')) {
    ProjectsModule.loadProjects()
  } else if (path.includes('project-detail.html')) {
    ProjectsModule.loadProjectDetail()
  } else if (path.includes('blog.html')) {
    BlogModule.loadBlog()
  } else if (path.includes('blog-post.html')) {
    BlogModule.loadBlogPost()
  } else if (path.includes('contact.html')) {
    ContactModule.initContactForm()
  }
}