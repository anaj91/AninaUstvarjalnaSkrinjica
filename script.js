const popUp = document.querySelector('.popUp-container')
const submit = document.getElementById('submit')
const close = document.querySelector('.btn-close')


close.addEventListener('click', () => {
  popUp.style.visibility = 'hidden'
})

submit.addEventListener('click', () => {
  popUp.style.visibility = 'visible'
})
