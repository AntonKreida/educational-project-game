const handlers = {
  onSubmitForm: (event) => {
    event.preventDefault()

    const { target } = event
    const inputs = target.querySelectorAll('.js-input')
    const top = target.closest('.js-top')

    if (!target.checkValidity()) {
      return
    }

    inputs.forEach((input) => {
      if (!input.checked) {
        return
      }

      window.globalStateApp.lavel = input.value
      window.globalStateApp.renderPlayField(top)
    })
  },

  onClickLabel: (event) => {
    const target = event.target
    const labels = document.querySelectorAll('.js-label')

    if (!target.closest('.js-label')) {
      return
    }

    labels.forEach((label) => {
      label.classList.remove('active')
    })

    target.classList.add('active')
  },
}

export default handlers
