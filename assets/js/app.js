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

  for (let i = 0; i < projects.length; i++) { // use for-loop because we do math w/ i
    projects[i].addEventListener('click', function (e) {
      window.open(this.getAttribute('data-href'), '_blank');
    });
    window.setTimeout(function () { // wait an extra second for each project
      projects[i].classList.remove('hidden');
    }, 1000 * (i + 1))
  }
};
