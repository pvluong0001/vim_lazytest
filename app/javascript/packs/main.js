window.HELPER = (function() {
  const initDropdown = (element) => {
    const id = element.getAttribute('data-dropdown');

    element.addEventListener('click', () => {
      const targetElement = document.querySelector(`[data-ref="${id}"]`);
      targetElement && targetElement.classList.toggle('hidden');
    })
  }

  return {initDropdown}
})();

// init dropdown
const dropdowns = document.querySelectorAll('[data-dropdown]');
[].forEach.call(dropdowns, element => HELPER.initDropdown(element));
