import * as templates from './templates.js'
import * as ProjectsModule from './modules/projects.js'
import * as BlogModule from './modules/blog.js'
import { getCurrentPage } from './utility/utils.js'

// Initialize the application
init()

function init () {
  const currentPage = getCurrentPage()
  templates.initHeader(currentPage)
  initBurgerMenu()
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
  }
}

// Initialize burger menu for mobile navigation
function initBurgerMenu () {
  const burgerMenu = document.querySelector('.burger-menu')
  const mainNav = document.querySelector('nav.main-nav')

  if (!burgerMenu) return

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active')
    mainNav.classList.toggle('active')
  })

  // Close menu when clicking a nav link
  const navLinks = mainNav.querySelectorAll('a')
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      burgerMenu.classList.remove('active')
      mainNav.classList.remove('active')
    })
  })
}