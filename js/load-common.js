window.onload = () => {
  fetch("./common/header.html")
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const $header = temp.querySelector('header');
    document.querySelector("#header-wrap").append($header);

    /**
     * mobile gnb
     */
    const $gnbBtn = document.querySelector('.gnb-btn');
    const $gnb = document.getElementById('gnb');
    if (!$gnbBtn || !$gnb) return;

    $gnbBtn.addEventListener('click', () => {
      $gnb.classList.add('active');
    });

    const $closeBtn = document.querySelector('.close-btn');
    if (!$closeBtn) return;

    [$closeBtn, $gnb].forEach($e => {
      $e.addEventListener('click', () => {
        $gnb.classList.remove('active');
      });
    })
  });

  fetch("./common/footer.html")
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const $footer = temp.querySelector('footer');
    document.querySelector("#footer-wrap").append($footer);
  });
};