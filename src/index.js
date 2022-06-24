// write your code here
document.addEventListener('DOMContentLoaded', () => {
})
    const BASE_URL = 'http://localhost:3000/ramens';
fetch(BASE_URL)
.then(resp => resp.json())
// .then(food => console.log(food))                 //This has successfully logged the array like structure containing our Ramen objects
.then(ramen => ramen.forEach(renderSingleRamen))

    const newRamenForm = document.querySelector('#new-ramen')
        newRamenForm.addEventListener('submit', (e) => {
          e.preventDefault()

        const newRamen = {}
        newRamen.name = document.querySelector('#new-name').value
        newRamen.restaurant = document.querySelector('#new-restaurant').value
        newRamen.image = document.querySelector('#new-image').value
        newRamen.rating = document.querySelector('#new-rating').value
        newRamen.comment = document.querySelector('#new-comment').value

        renderSingleRamen(newRamen)
    })

   function renderSingleRamen (ramen) {

    const ramenMenu = document.querySelector('#ramen-menu')
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenMenu.append(ramenImg)

    ramenImg.addEventListener('click', () => {

        const detailImg = document.querySelector('.detail-image')
        detailImg.src = ramen.image
        detailImg.alt = ramen.name

        const ramenName = document.querySelector('.name')
        ramenName.innerHTML = ramen.name

        const ramenRestaurant = document.querySelector('.restaurant')
        ramenRestaurant.innerHTML = ramen.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramen.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramen.comment
    })   
   } 