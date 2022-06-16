var favSec = document.getElementById('favoriteSection')
var liveAniSec = document.getElementById('liveAnimeSection')
var popAniSec = document.getElementById('popularAnimeSection')
var searchAniSec = document.getElementById('searchAnimeSection')
var detailSec = document.getElementById('detailSection')
var animeIdGET = ''
function hideAll(){
    /*favSec.style.display = 'none'
    liveAniSec.style.display = 'none'
    popAniSec.style.display = 'none'
    searchAniSec.style.display = 'none'
    detailSec.style.display = 'none'*/
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
function displaySearch(){
    hideAll()
    searchAniSec.style.display = 'block'
}
function addTableLive(animeDe){
    const liveAniSec = document.getElementById('liveAniSec')
    let liveitem1 = document.createElement('div')
    liveitem1.classList.add('col')
    let liveitem2 = document.createElement('div')
    liveitem2.classList.add('card')
    let liveImg = document.createElement('img')
    liveImg.setAttribute('src', animeDe.images.jpg.large_image_url)
    liveImg.classList.add('card-img-top')
    liveitem2.appendChild(liveImg)
    let livecardBody = document.createElement('div')
    livecardBody.classList.add('card-body')
    let livecardTitle = document.createElement('h5')
    livecardTitle.classList.add('card-title')
    livecardTitle.innerHTML = animeDe.title
    livecardBody.appendChild(livecardTitle)
    liveitem2.appendChild(livecardBody)
    liveitem1.appendChild(liveitem2)
    liveAniSec.appendChild(liveitem1)
    liveitem1.addEventListener('click',function (){
        displayDetails()
        showDetailSec(animeDe)
    })
}
function addTableFav(animeDe){
    const favAniSec = document.getElementById('favSec')
    let favitem1 = document.createElement('div')
    favitem1.classList.add('col')
    let favitem2 = document.createElement('div')
    favitem2.classList.add('card')
    let favImg = document.createElement('img')
    favImg.setAttribute('src', animeDe.images.jpg.large_image_url)
    favImg.classList.add('card-img-top')
    favitem2.appendChild(favImg)
    let favcardBody = document.createElement('div')
    favcardBody.classList.add('card-body')
    let favcardTitle = document.createElement('h5')
    favcardTitle.classList.add('card-title')
    favcardTitle.innerHTML = animeDe.title
    let favDelBtn = document.createElement('button')
    favDelBtn.classList.add('btn')
    favDelBtn.classList.add('btn-danger')
    favDelBtn.setAttribute('type','button')
    favDelBtn.innerHTML = 'Delete'
    favcardBody.appendChild(favDelBtn)
    favitem2.appendChild(favDelBtn)
    favitem2.appendChild(favcardBody)
    favitem1.appendChild(favitem2)
    favAniSec.appendChild(favitem1)
    favitem1.addEventListener('click',function (){
        displayDetails()
        showDetailSec(animeDe)
    })
}
function addTablePop(animeDe){
    const popAniSec = document.getElementById('popularAniSec')
    let popitem1 = document.createElement('div')
    popitem1.classList.add('col')
    let popitem2 = document.createElement('div')
    popitem2.classList.add('card')
    let popImg = document.createElement('img')
    popImg.setAttribute('src', animeDe.images.jpg.large_image_url)
    popImg.classList.add('card-img-top')
    popitem2.appendChild(popImg)
    let popcardBody = document.createElement('div')
    popcardBody.classList.add('card-body')
    let popcardTitle = document.createElement('h5')
    popcardTitle.classList.add('card-title')
    popcardTitle.innerHTML = animeDe.title
    popcardBody.appendChild(popcardTitle)
    popitem2.appendChild(popcardBody)
    popitem1.appendChild(popitem2)
    popAniSec.appendChild(popitem1)
    popitem1.addEventListener('click',function (){
        displayDetails()
        showDetailSec(animeDe)
    })
}
function addTableSearch(animeDe){
    const searchAniSec = document.getElementById('searchAniSec')
    let searchitem1 = document.createElement('div')
    searchitem1.classList.add('col')
    let searchitem2 = document.createElement('div')
    searchitem2.classList.add('card')
    let searchImg = document.createElement('img')
    searchImg.setAttribute('src', animeDe.images.jpg.large_image_url)
    searchImg.classList.add('card-img-top')
    searchitem2.appendChild(searchImg)
    let searchcardBody = document.createElement('div')
    searchcardBody.classList.add('card-body')
    let searchcardTitle = document.createElement('h5')
    searchcardTitle.classList.add('card-title')
    searchcardTitle.innerHTML = animeDe.title
    searchcardBody.appendChild(searchcardTitle)
    searchitem2.appendChild(searchcardBody)
    searchitem1.appendChild(searchitem2)
    searchAniSec.appendChild(searchitem1)
    searchitem1.addEventListener('click',function (){
        displayDetails()
        showDetailSec(animeDe)
    })
}
function showDetailSec(animeDe){
    let detailName = document.getElementById('detailName')
    detailName.innerHTML = animeDe.title
    let animeImage = document.getElementById('animeImage')
    animeImage.setAttribute("src", animeDe.images.jpg.image_url)
    let score = document.getElementById('score')
    score.innerHTML = animeDe.score
    let userScored = document.getElementById('userScored')
    userScored.innerHTML = animeDe.scored_by + " users"
    let rank = document.getElementById('rank')
    rank.innerHTML = "Ranked #"+ animeDe.rank
    let popular = document.getElementById('popular')
    popular.innerHTML = "Popularity #"+animeDe.popularity
    let member = document.getElementById('member')
    member.innerHTML = "Members "+animeDe.members
    let season = document.getElementById('season')
    season.innerHTML = `${animeDe.season} ${animeDe.year}`
    let type = document.getElementById('type')
    type.innerHTML = animeDe.type
    let episodes = document.getElementById('episodes')
    episodes.innerHTML = animeDe.episodes + ' episodes'
    let synopsis = document.getElementById('synopsis')
    synopsis.innerHTML = animeDe.synopsis
}
function addSearchAniList(aniList){
    for (anis of aniList) {
        addTableSearch(anis);
    }
}
function addPopAniList(aniList) {
    for (anis of aniList) {
        addTablePop(anis);
    }
}
function addNowAniList(aniList){
    for (anis of aniList){
        addTableLive(anis);
    }
}
function addFavAniList(aniList){
    for(anis of aniList){
        addTableFav(anis)
    }
}
function changeSearchName(search){
    document.getElementById('searchName').innerHTML = 'Search: ' + search
}
function searchAnimefetch(search){
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(response => {
            return response.json()
        }).then(data => {
            let animeDe = data.data
            displaySearch()
            console.log(animeDe)
            addSearchAniList(animeDe,search)
        })
}
function onLoad() {
    fetch('https://api.jikan.moe/v4/seasons/now').then(response => {
        return response.json().then(data => {
            let animeDe = data.data
            displayHomepage()
            console.log(animeDe)
            addNowAniList(animeDe)
            addTableFav(animeDe)
        })
    })
    fetch('https://api.jikan.moe/v4/top/anime').then(response => {
        return response.json().then(data => {
            let animeDe = data.data
            console.log(animeDe)
            addPopAniList(animeDe)
        })
    })
}
document.getElementById('searchButton').addEventListener('click', (event) => {
    let search = document.getElementById('inputText').value
    changeSearchName(search)
    searchAnimefetch(search)
})
document.getElementById('inputText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let search = document.getElementById('inputText').value
        changeSearchName(search)
        searchAnimefetch(search)
    }
});
function onFav(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies/642110323').then(response => {
        return response.json().then(data => {
            let animeDe = data
            for (animeDe of aniList) {
                
            }
        })
    })
}
function addAniToFavoriteList(animeDe) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movies/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('success', data)
    })
}
document.getElementById('addFavBtn').addEventListener('click',(event) =>{
    let confirmButton = confirm(`Add ${movie.title} to your favorites`)
    if (confirmButton) {
        poom2.style.backgroundColor = 'red';
        poom2.style.color = 'white';
        poom2.classList.add('disabled')

        const addMovie = {
            id: '642110323',
            movie: {
                url: movie.url,
                image_url: movie.images.jpg.image_url,
                title: movie.title,
                synopsis: movie.synopsis,
                type: movie.type,
                episodes: movie.episodes,
                score: movie.score,
                rated: movie.rating,
            },
        };
        console.log(addMovie)
        addMovieToFavoriteList(addMovie)
    }
})