document.addEventListener("DOMContentLoaded", function () {
  var locationUrl = location.pathname;

  document.querySelectorAll('.collection-card').forEach(function (element) {
    var url = element.querySelector('.collection-card--link')?.getAttribute('href');

    if (url && new URL(url, location.origin).pathname === locationUrl) {
      element.classList.add('active_box');
    }
  });
});
