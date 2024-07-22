document.addEventListener('DOMContentLoaded', (event) => {
  loadPosts();
});

function createPost() {
    event.preventDefault();
    let post = document.getElementById('postText').value;
    let postContainer = document.getElementById('mainPosts');
    const date = new Date().toLocaleString();

    //console.log(post);
    //console.log(postContainer.innerHTML);

    const newPost = `<div class="card">
            <div class="post">
              <div class="userInfo"></div>
                <div class="userImg"></div>
                <h3 class="author">Nome do autor</h3>
                <p class="cardText">
                ${post}
                </p>
                <div class="dateHour">
                  <p>${date}</p>
                </div>
                <div class="actionBtnPost">
                  <button type="button" class="like btn btn-primary" onclick="likeCount()">Curtir</button>
                  <button type="button" class="comment btn btn-primary" onclick="commentPost()">Comentar</button>
                  <button type="button" class="share btn btn-primary" onclick="sharePost()">Compartilhar</button>
                </div>
            </div>
          </div>`;

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    
    localStorage.setItem('posts', JSON.stringify(posts));

    const addPost = postContainer.innerHTML + newPost;
    postContainer.innerHTML = addPost;

  }

  function renderPosts() {
    let postContainer = document.getElementById('mainPosts');
    postContainer.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
      const postHTML = post;
      const histPost = postContainer.innerHTML + postHTML;
      postContainer.innerHTML = histPost;
    });
  }

  function loadPosts() {
    renderPosts();
  }