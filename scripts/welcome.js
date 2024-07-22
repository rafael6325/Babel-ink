document.addEventListener('DOMContentLoaded', (event) => {
  loadPosts();
  loadUser();
  loadImages();
});

function loadUser() {
  const user = JSON.parse(localStorage.getItem('users'));
  const loggedUser = user[user.length - 1].name;
  return loggedUser;
};

function clearMessages() {
  document.getElementById('nullpost-message').textContent = '';
};

function clearPostContent() {
  document.getElementById('postText').value = '';
};

function createPost(event) {
    event.preventDefault();
    uploadImg()
    let post = document.getElementById('postText').value;
    if (!post) {
      document.getElementById('nullpost-message').textContent = 'Não pode estar vazio.';
      return;
    }
    clearMessages();
    let postContainer = document.getElementById('mainPosts');
    const date = new Date().toLocaleString();

    const actualUser = loadUser();

    const newPost = `<div class="card">
            <div class="post">
              <div class="userInfo"></div>
                <div class="userImg"></div>
                <h3 class="author">${actualUser}</h3>
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
    clearPostContent();
  };

function uploadImg() { 

    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageData = e.target.result;

            // Save image data to localStorage
            let images = JSON.parse(localStorage.getItem('images')) || [];
            images.push(imageData);
            localStorage.setItem('images', JSON.stringify(images));

            // Clear the file input
            fileInput.value = '';

            // Reload the images
            loadImages();
        };

        reader.readAsDataURL(file);
    }
};

function loadImages() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear existing images

    const images = JSON.parse(localStorage.getItem('images')) || [];

    images.forEach(imageData => {
        const img = document.createElement('img');
        img.src = imageData;
        imageContainer.appendChild(img);
    });
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
  };

  function loadPosts() {
    renderPosts();
    loadUser();
  };