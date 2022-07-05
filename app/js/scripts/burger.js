const burgerHandler = (burger, sidebar) => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    sidebar.classList.toggle('sidebar_active');
  })
}
export default burgerHandler;