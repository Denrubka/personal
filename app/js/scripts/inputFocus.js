const inputFocus = (selectorInput) => {
  const inputs = document.querySelectorAll(selectorInput);

  inputs.forEach(input => {
    const label = input.closest('.form-label');
    input.addEventListener('focus', () => {
      label.classList.add('form-label_active');
    })
    input.addEventListener('focusout', () => {
      label.classList.remove('form-label_active');
    })
  })
}

export default inputFocus;