var favSec = document.getElementById('favoriteSection')
var liveAniSec = document.getElementById('liveAnimeSection')
var popAniSec = document.getElementById('popularAnimeSection')
var searchAniSec = document.getElementById('searchAnimeSection')
var detailSec = document.getElementById('detailSection')
var animeIdGET = ''
function hideAll() {
    favSec.style.display = 'none'
    liveAniSec.style.display = 'none'
    popAniSec.style.display = 'none'
    searchAniSec.style.display = 'none'
    detailSec.style.display = 'none'
}
function displayHomepage() {
    hideAll()
    clearAll()
    liveAniSec.style.display = 'block'
    popAniSec.style.display = 'block'
}
function displayFav() {
    hideAll()
    clearAll()
    favSec.style.display = 'block'
}
function displayDetails() {
    hideAll()
    clearAll()
    detailSec.style.display = 'block'
}
function displaySearch() {
    hideAll()
    clearAll()
    searchAniSec.style.display = 'block'
}
function clearAll(){
    document.getElementById('favSec').innerHTML = ''
    document.getElementById('liveAniSec').innerHTML = ''
    document.getElementById('popularAniSec').innerHTML = ''
    document.getElementById('detailSection').innerHTML = ''
    document.getElementById('searchAniSec').innerHTML = ''
}
function addTableLive(animeDe) {
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
    liveitem1.addEventListener('click', function () {
        displayDetails()
        document.getElementById('detailSection').innerHTML = ''
        showDetailSec(animeDe)
    })
}
function addTableFav(animeDe) {
    const favAniSec = document.getElementById('favSec')
    let favitem1 = document.createElement('div')
    favitem1.classList.add('col')
    let favitem2 = document.createElement('div')
    favitem2.classList.add('card')
    let favImg = document.createElement('img')
    favImg.setAttribute('src', animeDe.image_url)
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
    favDelBtn.setAttribute('type', 'button')
    favDelBtn.innerHTML = 'Delete'
    favitem2.appendChild(favcardTitle)
    favitem2.appendChild(favDelBtn)
    favitem2.appendChild(favcardBody)
    favitem1.appendChild(favitem2)
    favAniSec.appendChild(favitem1)
    favDelBtn.addEventListener('click', function () {
        let confirmBtn = confirm(`Confirm Delete ${animeDe.title} form your favorites`)
        if (confirmBtn) {
            deleteAnime(animeDe.id)
        }
    })
    favitem1.addEventListener('click', function () {
        displayDetails()
        document.getElementById('detailSection').innerHTML = ''
        showDetailSec(animeDe)
    })
}
function addTablePop(animeDe) {
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
    popitem1.addEventListener('click', function () {
        displayDetails()
        document.getElementById('detailSection').innerHTML = ''
        showDetailSec(animeDe)
    })
}
function addTableSearch(animeDe) {
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
    searchitem1.addEventListener('click', function () {
        displayDetails()
        document.getElementById('detailSection').innerHTML = ''
        showDetailSec(animeDe)
    })
}
function showDetailSec(animeDe) {
    const detailAniSec = document.getElementById('detailSection')
    let detailName = document.createElement('span')
    detailName.classList.add('detail-name')
    detailName.innerHTML = animeDe.title
    detailAniSec.appendChild(detailName)
    let deRowInfo = document.createElement('div')
    deRowInfo.classList.add('row')
    let deColImg = document.createElement('div')
    deColImg.classList.add('col-md-3')
    deColImg.classList.add('col-sm-6')
    let deImg = document.createElement('img')
    deImg.setAttribute('src', animeDe.images.jpg.image_url)
    deColImg.appendChild(deImg)
    deRowInfo.appendChild(deColImg)
    let deColExInfo1 = document.createElement('div')
    deColExInfo1.classList.add('col-lg-1')
    deColExInfo1.classList.add('col-sm-12')
    let deRowScore1 = document.createElement('div')
    deRowScore1.classList.add('row')
    let deSpanScore1 = document.createElement('span')
    deSpanScore1.classList.add('score1')
    deSpanScore1.innerHTML = 'Score'
    deRowScore1.appendChild(deSpanScore1)
    let deRowScore2 = document.createElement('div')
    deRowScore2.classList.add('row')
    let deSpanScore2 = document.createElement('span')
    deSpanScore2.classList.add('score2')
    deSpanScore2.innerHTML = animeDe.score
    deRowScore2.appendChild(deSpanScore2)
    let deRowScore3 = document.createElement('div')
    deRowScore3.classList.add('row')
    let deSpanScore3 = document.createElement('span')
    deSpanScore3.classList.add('score3')
    deSpanScore3.innerHTML = animeDe.scored_by + ' users'
    deRowScore3.appendChild(deSpanScore3)
    deColExInfo1.appendChild(deRowScore1)
    deColExInfo1.appendChild(deRowScore2)
    deColExInfo1.appendChild(deRowScore3)
    let deColExInfo2 = document.createElement('div')
    deColExInfo2.classList.add('col-lg-6')
    deColExInfo2.classList.add('col-sm-12')
    let deRowExInfo1 = document.createElement('div')
    deRowExInfo1.classList.add('row')
    let deColRank = document.createElement('div')
    deColRank.classList.add('col-lg-4')
    deColRank.classList.add('col-sm-12')
    let deSpanRank = document.createElement('span')
    deSpanRank.classList.add('rank')
    deSpanRank.innerHTML = 'Ranked #'+animeDe.rank
    deColRank.appendChild(deSpanRank)
    let deColPop = document.createElement('div')
    deColPop.classList.add('col-lg-4')
    deColPop.classList.add('col-sm-12')
    let deSpanPop = document.createElement('span')
    deSpanPop.classList.add('popular')
    deSpanPop.innerHTML = 'Popularity #'+animeDe.popularity
    deColPop.appendChild(deSpanPop)
    let deColMem = document.createElement('div')
    deColMem.classList.add('col-lg-4')
    deColMem.classList.add('col-sm-12')
    let deSpanMem = document.createElement('span')
    deSpanMem.classList.add('member')
    deSpanMem.innerHTML = 'Member '+animeDe.members
    deColMem.appendChild(deSpanMem)
    deRowExInfo1.appendChild(deColRank)
    deRowExInfo1.appendChild(deColPop)
    deRowExInfo1.appendChild(deColMem)
    let deRowExInfo2 = document.createElement('div')
    deRowExInfo2.classList.add('row')
    deRowExInfo2.innerHTML = '<br>'
    let deRowExInfo3 = document.createElement('div')
    deRowExInfo3.classList.add('row')
    let deColSeason = document.createElement('div')
    deColSeason.classList.add('col-lg-4')
    deColSeason.classList.add('col-sm-12')
    let deSpanSeason = document.createElement('span')
    deSpanSeason.classList.add('season')
    deSpanSeason.innerHTML = animeDe.season + " " + animeDe.year
    deColSeason.appendChild(deSpanSeason)
    let deColType = document.createElement('div')
    deColType.classList.add('col-lg-4')
    deColType.classList.add('col-sm-12')
    let deSpanType = document.createElement('span')
    deSpanType.classList.add('type')
    deSpanType.innerHTML = animeDe.type
    deColType.appendChild(deSpanType)
    let deColEp = document.createElement('div')
    deColEp.classList.add('col-lg-4')
    deColEp.classList.add('col-sm-12')
    let deSpanEp = document.createElement('span')
    deSpanEp.classList.add('episodes')
    deSpanEp.innerHTML = animeDe.episodes + " episodes"
    deColEp.appendChild(deSpanEp)
    deRowExInfo3.appendChild(deColSeason)
    deRowExInfo3.appendChild(deColType)
    deRowExInfo3.appendChild(deColEp)
    deColExInfo2.appendChild(deRowExInfo1)
    deColExInfo2.appendChild(deRowExInfo2)
    deColExInfo2.appendChild(deRowExInfo3)
    let deColExInfo3 = document.createElement('div')
    deColExInfo3.classList.add('col-lg-2')
    deColExInfo3.classList.add('col-sm-12')
    let deBtn1 = document.createElement('div')
    deBtn1.classList.add('col-md-1')
    deBtn1.classList.add('col-sm-12')
    let deBtn2 = document.createElement('button')
    deBtn2.setAttribute('type','button')
    deBtn2.classList.add('btn')
    deBtn2.classList.add('btn-primary')
    deBtn2.classList.add('btn-lg')
    deBtn2.setAttribute('id','addFavBtn')
    let deBtn3 = document.createElement('i')
    deBtn3.classList.add('bi')
    deBtn3.classList.add('bi-suit-heart')
    deBtn2.innerHTML = 'Add to Favorites'
    deBtn2.appendChild(deBtn3)
    deBtn1.appendChild(deBtn2)
    deColExInfo3.appendChild(deBtn1) 
    deRowInfo.appendChild(deColExInfo1)
    deRowInfo.appendChild(deColExInfo2)
    deRowInfo.appendChild(deColExInfo3)
    let deRowSynop = document.createElement('div')
    deRowSynop.classList.add('row')
    deRowSynop.classList.add('py-3')
    let deGridSynopHead = document.createElement('div')
    deGridSynopHead.classList.add('d-flex')
    deGridSynopHead.classList.add('justify-content-center')
    let deGirdRowSynopHead = document.createElement('div')
    deGirdRowSynopHead.classList.add('row')
    let deGridSpanSynopHead = document.createElement('span')
    deGridSpanSynopHead.innerHTML = 'Synopsis'
    deGirdRowSynopHead.appendChild(deGridSpanSynopHead)
    deGridSynopHead.appendChild(deGirdRowSynopHead)
    let deGridSynopBody = document.createElement('div')
    deGridSynopBody.classList.add('d-flex')
    deGridSynopBody.classList.add('justify-content-center')
    let deGridRowSynopBody = document.createElement('div')
    deGridRowSynopBody.classList.add('row')
    let deGridSpanSynopBody = document.createElement('span')
    deGridSpanSynopBody.classList.add('synopsis')
    deGridSpanSynopBody.innerHTML = animeDe.synopsis
    deGridRowSynopBody.appendChild(deGridSpanSynopBody)
    deGridSynopBody.appendChild(deGridRowSynopBody)
    deRowSynop.appendChild(deGridSynopHead)
    deRowSynop.appendChild(deGridSynopBody)
    detailAniSec.appendChild(deRowInfo)
    detailAniSec.appendChild(deRowSynop)

    fetch('https://se104-project-backend.du.r.appspot.com/movies/642110323').then(response => {
        return response.json().then(data => {
            let aniList = data
            for (anis of aniList) {
                if (anis.title == animeDe.title) {
                    addFavBtn.style.backgroundColor = 'lightgray';
                    addFavBtn.style.borderColor = 'lightgray';
                    addFavBtn.style.color = 'white';
                    addFavBtn.classList.add('disabled')
                }
            }
        })
    })

    addFavBtn.addEventListener('click',function(){
    let confirmBtn = confirm(`Do you sure to add ${animeDe.title} to Favorite?`)
    if(confirmBtn){     
        addFavBtn.style.backgroundColor = 'lightgray';
        addFavBtn.style.borderColor = 'lightgray';
        addFavBtn.style.color = 'white';
        addFavBtn.classList.add('disabled')
        const animeDB = {
            "id": "642110323",
            "movie": {
                "url": animeDe.url,
                "image_url": animeDe.images.jpg.large_image_url,
                "title": animeDe.title,
                "synopsis": animeDe.synopsis,
                "type": animeDe.type,
                "episodes": animeDe.episodes,
                "score": animeDe.score,
                "rated": animeDe.rating
            }
        }
        addAnimeToDB(animeDB)
    }
})
}
function addSearchAniList(aniList) {
    for (anis of aniList) {
        addTableSearch(anis);
    }
}
function addPopAniList(aniList) {
    for (anis of aniList) {
        addTablePop(anis);
    }
}
function addNowAniList(aniList) {
    for (anis of aniList) {
        addTableLive(anis);
    }
}
function addFavAniList(aniList) {
    for (anis of aniList) {
        addTableFav(anis)
    }
}
function changeSearchName(search) {
    document.getElementById('searchName').innerHTML = 'Search: ' + search
}
function addAnimeToDB(animeDB) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movies/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animeDB)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('success', data)
    })
}
function searchAnimefetch(search) {
    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(response => {
            return response.json()
        }).then(data => {
            let animeDe = data.data
            displaySearch()
            console.log(animeDe)
            addSearchAniList(animeDe, search)
        })
}
function deleteAnime(id) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=642110323&&movieId=${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`${data.title} is now deleted`)
        fetch('https://se104-project-backend.du.r.appspot.com/movies/642110323').then(response => {
            return response.json().then(data => {
                console.log(data)
                displayFav()
                addFavAniList(data)
            })
        })
    }).catch(error => {
        alert('your request is not in the database')
    })
}
function onLoad() {
    fetch('https://api.jikan.moe/v4/seasons/now').then(response => {
        return response.json().then(data => {
            let animeDe = data.data
            displayHomepage()
            console.log(animeDe)
            addNowAniList(animeDe)
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
function onFav() {
    fetch('https://se104-project-backend.du.r.appspot.com/movies/642110323').then(response => {
        return response.json().then(data => {
            let animeDe = data
            document.getElementById('favSec').innerHTML = ''
            displayFav()
            addFavAniList(animeDe)
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

