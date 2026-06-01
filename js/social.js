document.addEventListener('DOMContentLoaded', function () {
    const addPostBtn = document.getElementById('addPostBtn');
    const newPostText = document.getElementById('newPostText');
    const postsContainer = document.getElementById('postsContainer');

    function createPost(author, text, time, likes) {
        const article = document.createElement('article');
        article.className = 'card post-card shadow-sm mb-4';
        article.innerHTML = `
            <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    <div class="post-avatar">${author.charAt(0)}</div>
                    <div>
                        <h6 class="mb-0">${author}</h6>
                        <small class="text-muted">${time}</small>
                    </div>
                </div>
                <p>${text}</p>
                <div class="post-actions d-flex justify-content-between align-items-center mt-3">
                    <div class="text-secondary"><span class="likes-count">${likes}</span> إعجاب</div>
                    <div>
                        <button class="btn btn-sm btn-outline-primary like-btn">إعجاب</button>
                        <button class="btn btn-sm btn-outline-secondary">تعليق</button>
                    </div>
                </div>
            </div>
        `;
        return article;
    }

    function attachLikeHandlers(card) {
        const likeBtn = card.querySelector('.like-btn');
        const likesCount = card.querySelector('.likes-count');
        likeBtn.addEventListener('click', function () {
            const current = parseInt(likesCount.textContent, 10);
            likesCount.textContent = current + 1;
            likeBtn.classList.remove('btn-outline-primary');
            likeBtn.classList.add('btn-primary');
            likeBtn.textContent = 'تم الإعجاب';
        }, { once: true });
    }

    postsContainer.querySelectorAll('.post-card').forEach(card => attachLikeHandlers(card));

    addPostBtn.addEventListener('click', function () {
        const text = newPostText.value.trim();
        if (!text) {
            newPostText.focus();
            return;
        }

        const post = createPost('أنت', text, 'منذ لحظات', 0);
        postsContainer.prepend(post);
        attachLikeHandlers(post);
        newPostText.value = '';
    });
});
