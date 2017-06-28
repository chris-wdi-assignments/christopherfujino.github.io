// sanity check
console.log("app.js linked.");

window.onload = function () {
  var projects = document.querySelectorAll('#portfolio-list > li');
  projects.forEach(function (el) {
    el.addEventListener('click', function (e) {
      window.open(this.getAttribute('data-href'), '_blank');
    });
  })
};
