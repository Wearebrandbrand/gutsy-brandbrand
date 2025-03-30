document.addEventListener("DOMContentLoaded",function(){var n=location.pathname;document.querySelectorAll(".collection-card").forEach(function(t){var e;var o=(e=t.querySelector(".collection-card--link"))==null?void 0:e.getAttribute("href");o&&new URL(o,location.origin).pathname===n&&t.classList.add("active_box")})});
//# sourceMappingURL=components--list-collections.js.map
