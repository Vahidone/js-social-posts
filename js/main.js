

const posts = [
    {
        "id": 1,
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "created": "2021-06-25",
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
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
                    <div class="post-meta__time">${new Date(post.created).toLocaleDateString('en-US')}</div>
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
                    <a href="#" class="like-button js-like-button" data-postid="${post.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone</div>
            </div>
        </div>
    `;

    return postElement;
}

// Aggiungo i post creati al container
posts.forEach((post) => {
    const postCard = createPostCard(post);
    container.appendChild(postCard);
});




