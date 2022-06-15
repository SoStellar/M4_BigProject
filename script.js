var favSec = document.getElementById('favoriteSection')
var liveAniSec = document.getElementById('liveAnimeSection')
var popAniSec = document.getElementById('popularAnimeSection')
var detailSec = document.getElementById('detailSection')
var animeIdGET = ''
function hideAll(){
    favSec.style.display = 'none'
    liveAniSec.style.display = 'none'
    popAniSec.style.display = 'none'
    detailSec.style.display = 'none'
}
function onLoad(){
    displayHomepage()
}
function displayHomepage(){
    hideAll()
    liveAniSec.style.display = 'block'
    popAniSec.style.display = 'block'
}
function displayFav(){
    hideAll()
    favSec.style.display = 'block'
}
function displayDetails(){
    hideAll()
    detailSec.style.display = 'block'
}
function addAnimeDetail(){
    
}