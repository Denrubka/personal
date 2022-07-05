export default (function preloader() {
  const preloader = document.querySelector('.preloader');
  document.addEventListener('DOMContentLoaded', () => {
    preloader.style.display = 'none';
  });
})()