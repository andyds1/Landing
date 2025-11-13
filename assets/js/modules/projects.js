import { projects } from '../data/project-array.js'
import { getURLParameter, redirectTo, updatePageTitle } from '../utility/utils.js'

// Load projects on the projects page
export function loadProjects () {
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
export function loadProjectDetail () {
  const projectId = parseInt(getURLParameter('id'))

  if (!projectId) {
    redirectTo('projects.html')
    return
  }

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    redirectTo('projects.html')
    return
  }

  // Update page title
  updatePageTitle(project.title)

  // Update project details
  document.querySelector('.project-detail-header h1').innerHTML =
    `${project.title}`

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

  // Update links if they exist
  const demoLink = document.querySelector('.project-button:not(.secondary)')
  const githubLink = document.querySelector('.project-button.secondary')

  if (project.demoLink) {
    demoLink.href = project.demoLink
  } else {
    demoLink.style.display = 'none'
  }

  if (project.githubLink) {
    githubLink.href = project.githubLink
  } else {
    githubLink.style.display = 'none'
  }

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