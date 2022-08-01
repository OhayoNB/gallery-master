'use strict'

function initPage() {
  renderProjects()
}

function renderProjects() {
  const projects = gProjs

  var strHTMLs = projects.map((project) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              onclick="renderModal('${project.id}')"
              href="#portfolioModal"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="${project.imgUrl}"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.title}</p>
            </div>
          </div>
    `
  })

  document.querySelector('.portfolio-items').innerHTML = strHTMLs.join('')
}

function renderModal(projectId) {
  const project = getProjectById(projectId)

  const elProjectModalDetails = document.querySelector('.project-details')

  elProjectModalDetails.querySelector('h2').innerText = project.name
  elProjectModalDetails.querySelector('.item-intro').innerText = project.title
  elProjectModalDetails.querySelector('.img-fluid').src = project.imgUrl
  elProjectModalDetails.querySelector('.proj-desc').innerText = project.desc
  elProjectModalDetails.querySelector('.project-link').href = project.url

  const date = new Date(project.publishedAt)
  const dateStr =
    `${date.getDate()}` +
    '/' +
    `${date.getMonth() + 1}` +
    '/' +
    `${date.getFullYear()}`
  elProjectModalDetails.querySelector('.project-date').innerText =
    `Date: ` + dateStr

  elProjectModalDetails.querySelector('.project-category').innerText =
    `Category: ` + project.labels.join(', ')
}

function onFormSubmit() {
  const email = document.querySelector('.contact-form .email')
  const subject = document.querySelector('.contact-form .subject')
  const message = document.querySelector('.contact-form .message')

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email.value}&su=${subject.value}&body=${message.value}`,
    '_blank'
  )

  email.value = ''
  subject.value = ''
  message.value = ''
}
