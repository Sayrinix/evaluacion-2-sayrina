// Alerta
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-info alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('¡Hola! Soy una alerta')
  })
}

const miAlerta = document.getElementById('liveAlertPlaceholder')
miAlerta.addEventListener('close.bs.alert', event => {
    console.log('Se está cerrando la alerta')

})

//Fin de JS Alerta +++++++++++++++++++++++++++++++++

//Popover 

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const miPopover = document.getElementById('pruebaPopover')
miPopover.addEventListener('show.bs.popover', event => {
    console.log('Se está abriendo el popover')
})
miPopover.addEventListener('hidden.bs.popover', event => {
    console.log('Se está cerrando el popover')
})