import { initBurgerMenu } from './nav.js'

function createHeader (activePage) {
  return `
        <h1><span class="accent">#</span> <a href="/index.html">Andy De Schuytener</a></h1>
            <h3><span class="accent">##</span> Student @ <a
                    href="https://www.howest.be/en/programmes/bachelor/applied-computer-science" target="_blank">Howest
                    Applied CS</a></h3>

        <nav class="social-nav">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/andyds/" target="_blank" class="fa fa-linkedin"></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/andyds1" target="_blank" class="fa fa-github"></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.instagram.com/dsc.andy/" target="_blank" class="fa fa-instagram"></a>
                </li>
            </ul>
        </nav>

        <!-- Burger Menu -->
        <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav class="main-nav">
            <ul>
                <li>
                    <span>&#62;&#95; </span><a href="../index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a>
                </li>
                <li>
                    <span>&#62;&#95; </span><a href="/pages/projects.html" ${activePage === 'projects' ? 'class="active"' : ''}>Projects</a>
                </li>
                <li>
                    <span>&#62;&#95; </span><a href="/pages/blog.html" ${activePage === 'blog' ? 'class="active"' : ''}>Blog</a>
                </li>
                <li>
                    <span>&#62;&#95; </span><a href="/pages/contact.html" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a>
                </li>
            </ul>
        </nav>
    `
}

// Initialize header
function initHeader (activePage) {
  const header = document.querySelector('main header')
  if (header) {
    header.innerHTML = createHeader(activePage)
  }
}

function createFooter () {
  return `
        <p>&copy; ${new Date().getFullYear()} <a href="https://adsdev.xyz" target="_blank"><span class="accent">ADS</span></a>Dev<span class="accent">.</span> All rights reserved.</p>
    `
}

function initFooter () {
  const footer = document.querySelector('footer')
  if (footer) {
    footer.innerHTML = createFooter()
  }
}

export { initHeader, initFooter }
