function changeStar(star){
    const parent = star.parentNode
    parent.querySelectorAll('.rate-buttons__star').forEach(el => {
    el.classList.contains('rate-buttons__star_active') && el.classList.remove('rate-buttons__star_active')
    })
    star.classList.add('rate-buttons__star_active')
    }
document.addEventListener('DOMContentLoaded', function() {
    const rating = document.querySelectorAll('.rate-buttons__star')
    rating.forEach(star => {
    star.onclick = () => changeStar(star)
    })
    })