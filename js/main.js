

const posts = [
    {
        "id": 1,
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "created": "2021-06-25",
        "content": "Pioggia leggera danza nel silenzio, sussurri d'argento tra foglie e terra, il mondo s'addormenta nel suo abbraccio liquido.",
        "media": "https://unsplash.it/600/300?image=171",
        "likes": 80
    },
    {
        "id": 2,
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "created": "2021-09-03",
        "content": "Nel campo di grano, ondeggiano segreti d'oro sotto il sole, danza la vita tra spighe dorate, un sussurro nell'anima.",
        "media": "https://unsplash.it/600/400?image=112",
        "likes": 120
    },
    {
        "id": 3,
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=30"
        },
        "created": "2021-05-15",
        "content": "Parigi, città delle meraviglie, sotto il cielo d'azzurro la Torre Eiffel sfavilla come un sogno d'amore nell'eternità.",
        "media": "https://unsplash.it/600/400?image=234",
        "likes": 78
    },
    {
        "id": 4,
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=40"
        },
        "created": "2021-04-03",
        "content": "Nella letteratura, parole come stelle illuminano il buio della mente, creando mondi incantati e svelando l'anima umana.",
        "media": "https://unsplash.it/600/400?image=24",
        "likes": 56
    },
    {
        "id": 5,
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=50"
        },
        "created": "2021-03-05",
        "content": "L'architettura è il linguaggio silente delle forme, dove pietra e spazio danzano insieme, raccontando storie di tempo e bellezza.",
        "media": "https://unsplash.it/600/400?image=534",
        "likes": 95
    }
];




const container = document.getElementById('container');


function createPostCard(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Creo degli elementi html per il post
    postElement.innerHTML = `
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post.author.image}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post.author.name}</div>
                    <div class="post-meta__time">${new Date(post.created).toLocaleDateString('it-IT')}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${post.content}</div>
        <div class="post__image">
            <img src="${post.media}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a href="##" class="like-button js-like-button" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone</div>
            </div>
        </div>
    `;




    
    // Aggiungo un gestore di eventi al bottone "Mi Piace" del post
    const likeButton = postElement.querySelector('.js-like-button');
    let isLiked = false;


    likeButton.addEventListener('click', function () {
        

        const likeCounter = postElement.querySelector('.js-likes-counter');
        

        if (!isLiked) {
            likeCounter.innerText = parseInt(likeCounter.innerText) + 1;
            likeButton.classList.add('like-button-liked');
          
        } else {
            likeCounter.innerText = parseInt(likeCounter.innerText) - 1;
            likeButton.classList.remove('like-button-liked');
           
        }

        isLiked = !isLiked

    });

    return postElement;
}

// Aggiungo i post creati al container
posts.forEach((post) => {
    const postCard = createPostCard(post);
    container.appendChild(postCard);
});