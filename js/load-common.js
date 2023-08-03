(() => {
  fetch("../common/header.html")
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const $header = temp.querySelector('header');
    document.querySelector("#header-wrap").append($header);
  });

  fetch("../common/footer.html")
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const $footer = temp.querySelector('footer');
    document.querySelector("#footer-wrap").append($footer);
  });
})();