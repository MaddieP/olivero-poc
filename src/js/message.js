(function() {
    const closeBtn = document.querySelectorAll(".messages__close");

    closeBtn.forEach(function(btn) {
      btn.addEventListener("click", function() {
        this.parentElement.style.display = 'none';
      })
    })
})();
