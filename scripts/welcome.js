function createPost() {
    event.preventDefault();
    const post = document.getElementById('postText').value;
    let postContainer = document.getElementById('mainPosts');

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
                  <p>data - horario</p>
                </div>
                <div class="actionBtnPost">
                  <button type="button" class="like btn btn-primary" onclick="likeCount()">Curtir</button>
                  <button type="button" class="comment btn btn-primary" onclick="commentPost()">Comentar</button>
                  <button type="button" class="share btn btn-primary" onclick="sharePost()">Compartilhar</button>
                </div>
            </div>
          </div>`;

    const addPost = postContainer.innerHTML + newPost;
    return postContainer.innerHTML = addPost;
  }