document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    var content = document.getElementById("content");
  
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = "block";
            scrollToTopButton.style.opacity = "1"; // Rend la flèche opaque
        } else {
            scrollToTopButton.style.opacity = "0"; // Rend la flèche transparente
        }
    });
  
    scrollToTopButton.addEventListener("click", function() {
        content.scrollIntoView({ behavior: "smooth" });
    });
  });