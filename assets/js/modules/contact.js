export function initContactForm() {
  const form = document.querySelector('.contact-form')
  const submitBtn = form.querySelector('input[type="submit"]')
  
  if (!form) return

  addCharacterCounter()
  
  form.addEventListener('submit', handleSubmit)
  
  const emailField = form.querySelector('#email')
  emailField.addEventListener('blur', validateEmailField)
}

function addCharacterCounter() {
  const messageField = document.querySelector('#message')
  const maxLength = 2000
  
  messageField.setAttribute('maxlength', maxLength)
  
  const counter = document.createElement('div')
  counter.className = 'char-count'
  counter.innerHTML = `<span id="charCount">0</span>/${maxLength}`
  messageField.parentNode.insertBefore(counter, messageField.nextSibling)
  
  messageField.addEventListener('input', () => {
    document.getElementById('charCount').textContent = messageField.value.length
  })
}

function validateEmailField(e) {
  const email = e.target.value.trim()
  const isValid = isValidEmail(email)
  
  if (email && !isValid) {
    showFieldError(e.target, 'Please enter a valid email address')
  } else {
    clearFieldError(e.target)
  }
}

async function handleSubmit(e) {
  e.preventDefault()
  
  const form = e.target
  const submitBtn = form.querySelector('input[type="submit"]')

  if (form.querySelector('input[name="_gotcha"]').value) {
    return // Likely a bot
  }
  
  const formData = {
    name: sanitize(form.querySelector('#name').value.trim()),
    email: sanitize(form.querySelector('#email').value.trim()),
    message: sanitize(form.querySelector('#message').value.trim())
  }
  
  if (!validateForm(formData, form)) {
    return
  }
  
  const originalValue = submitBtn.value
  submitBtn.disabled = true
  submitBtn.value = 'Sending...'
  submitBtn.style.opacity = '0.6'
  submitBtn.style.cursor = 'not-allowed'
  
  try {
    await submitForm(formData)
    showMessage('Message sent successfully! I\'ll get back to you soon.', 'success', form)
    form.reset()
    document.getElementById('charCount').textContent = '0'
  } catch (error) {
    showMessage('Failed to send message. Please try again or email directly at info@adsdev.xyz', 'error', form)
    console.error('Form submission error:', error)
  } finally {
    submitBtn.disabled = false
    submitBtn.value = originalValue
    submitBtn.style.opacity = '1'
    submitBtn.style.cursor = 'pointer'
  }
}

function validateForm(data, form) {
  let isValid = true
  
  clearAllErrors(form)
  
  if (!data.name || data.name.length < 2) {
    showFieldError(form.querySelector('#name'), 'Name must be at least 2 characters')
    isValid = false
  }
  
  if (!data.email) {
    showFieldError(form.querySelector('#email'), 'Email is required')
    isValid = false
  } else if (!isValidEmail(data.email)) {
    showFieldError(form.querySelector('#email'), 'Please enter a valid email address')
    isValid = false
  }
  
  if (!data.message || data.message.length < 10) {
    showFieldError(form.querySelector('#message'), 'Message must be at least 10 characters')
    isValid = false
  }
  
  return isValid
}

async function submitForm(data) {
  const response = await fetch('https://formspree.io/f/mqaydrkw', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      _subject: `Contact Form: Message from ${data.name}`
    })
  })
  
  if (!response.ok) {
    throw new Error('Form submission failed')
  }
  
  return response.json()
}

function sanitize(str) {
  const temp = document.createElement('div')
  temp.textContent = str
  return temp.innerHTML.trim()
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showFieldError(field, message) {
  field.classList.add('error')
  
  const existingError = field.parentNode.querySelector('.field-error')
  if (existingError) {
    existingError.remove()
  }
  
  const errorDiv = document.createElement('div')
  errorDiv.className = 'field-error'
  errorDiv.textContent = message
  field.parentNode.insertBefore(errorDiv, field.nextSibling)
}

function clearFieldError(field) {
  field.classList.remove('error')
  const errorDiv = field.parentNode.querySelector('.field-error')
  if (errorDiv) {
    errorDiv.remove()
  }
}

function clearAllErrors(form) {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'))
  form.querySelectorAll('.field-error').forEach(el => el.remove())
  
  const statusMessage = form.parentNode.querySelector('.status-message')
  if (statusMessage) {
    statusMessage.remove()
  }
}

function showMessage(text, type, form) {
  const existingMessage = form.parentNode.querySelector('.status-message')
  if (existingMessage) {
    existingMessage.remove()
  }
  
  const messageDiv = document.createElement('div')
  messageDiv.className = `status-message ${type}`
  messageDiv.textContent = text
  form.parentNode.insertBefore(messageDiv, form)
  
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove()
    }
  }, 5000)
}