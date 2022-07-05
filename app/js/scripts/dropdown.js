const dropdownHandler = (btns) => {
  btns.forEach(btn => {
    const dropdownBlock = btn.querySelector('.dropdown-block');
    const arrow = btn.querySelector('svg.arrow');

    btn.addEventListener('click', () => {
      if(!dropdownBlock.classList.contains('dropdown-block_active')) {
        dropdownBlock.classList.add('dropdown-block_active')
        arrow.classList.add('active');
        dropdownBlock.style.maxHeight = `${dropdownBlock.scrollHeight}px`
      } else {
        dropdownBlock.classList.remove('dropdown-block_active')
        arrow.classList.remove('active');
        dropdownBlock.style.maxHeight = `0px`;
      }
    })
  })
}
export default dropdownHandler;