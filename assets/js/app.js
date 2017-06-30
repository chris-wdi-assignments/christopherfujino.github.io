// sanity check
console.log("app.js linked.");

window.onload = function () {
  let skipResize = false;
  function resize (skipDelay) {
    if (skipResize) return;
    let windowHeight = document.documentElement.clientHeight;
    if (windowHeight > document.getElementById('middle-column').clientHeight) {
      document.getElementById('page-wrapper').style.height = windowHeight + 'px';
      document.getElementById('middle-column').style.height = windowHeight + 'px';
    }
    if (!skipDelay) {
      skipResize = true;
      setTimeout('skipResize = false', 15); // for performance reasons
    }
  };
  resize('skip delay');
  window.addEventListener('resize', resize);

  var projects = document.querySelectorAll('#portfolio-list > li');
  projects.forEach(function (el) {
    el.addEventListener('click', function (e) {
      window.open(this.getAttribute('data-href'), '_blank');
    });
  })
};
