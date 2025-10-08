import * as templates from './templates.js'
import { projects } from './projects.js'

init()

function init () {
  const currentPage = getCurrentPage()
  templates.initHeader(currentPage)

  if (window.location.pathname.includes('projects.html')) {
    loadProjects()
  } else if (window.location.pathname.includes('project-detail.html')) {
    loadProjectDetail()
  }
}

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

// Load projects on the projects page
function loadProjects () {
  const projectsGrid = document.querySelector('.projects-grid')

  if (!projectsGrid) return // Exit if not on projects page

  projectsGrid.innerHTML = '' // Clear existing content

  projects.forEach(project => {
    const projectCard = createProjectCard(project)
    projectsGrid.appendChild(projectCard)
  })
}

// Create a project card element
function createProjectCard (project) {
  const card = document.createElement('div')
  card.className = 'project-card'

  // Create tags HTML
  const tagsHTML = project.tags.map(tag =>
        `<span class="project-tag">${tag}</span>`
  ).join('')

  card.innerHTML = `
        <h3>${project.title}</h3>
        <div class="project-tags">
            ${tagsHTML}
        </div>
        <p>${project.shortDescription}</p>
        <a href="project-detail.html?id=${project.id}" class="project-link">View Details →</a>
    `

  return card
}

// Load project details on the detail page
function loadProjectDetail () {
  const urlParams = new URLSearchParams(window.location.search)
  const projectId = parseInt(urlParams.get('id'))

  if (!projectId) {
    // Redirect to projects page if no ID
    window.location.href = 'projects.html'
    return
  }

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    // Redirect if project not found
    window.location.href = 'projects.html'
    return
  }

  // Update page title
  document.title = `${project.title} - Andy De Schuytener`

  // Update project details
  document.querySelector('.project-detail-header h2').innerHTML =
        `<span class="accent">### </span>${project.title}`

  // Update tags
  const tagsContainer = document.querySelector('.project-detail-header .project-tags')
  tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="project-tag">${tag}</span>`
  ).join('')

  const projectSections = document.querySelectorAll('.project-section')

  // Update overview
  const overviewSection = projectSections[0].querySelector('p')
  overviewSection.innerHTML = project.description

  // Update features
  const featuresSection = projectSections[1].querySelector('p')
  featuresSection.innerHTML = project.features.map(feature =>
        `• ${feature}`
  ).join('<br>')

  // Update technologies
  const techSection = projectSections[2].querySelector('p')
  techSection.textContent = project.technologies

  // Update links
  const demoLink = document.querySelector('.project-button:not(.secondary)')
  const githubLink = document.querySelector('.project-button.secondary')

  demoLink.href = project.demoLink
  githubLink.href = project.githubLink

  // Update image if exists
  if (project.image) {
    const imageContainer = document.querySelector('.project-detail-header')
    const img = document.createElement('img')
    img.src = project.image
    img.alt = `${project.title} Screenshot`
    img.className = 'project-image'
    img.onerror = function () {
      this.style.display = 'none' // Hide if image doesn't exist
    }
    imageContainer.appendChild(img)
  }
}

// Detect current page
function getCurrentPage () {
  const path = window.location.pathname
  if (path.includes('projects.html') || path.includes('project-detail.html')) {
    return 'projects'
  } else if (path.includes('about.html')) {
    return 'about'
  } else if (path.includes('contact.html')) {
    return 'contact'
  } else {
    return 'home'
  }
}

export { initBurgerMenu }
