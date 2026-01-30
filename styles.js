const btns = document.querySelectorAll('a');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    removeActiveClass();
    btn.classList.add('active');
  })
})

function removeActiveClass() {
  btns.forEach(function(btn) {
    btn.classList.remove('active');
  })
}