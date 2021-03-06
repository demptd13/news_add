
// Find Elements
let title = document.querySelector(".input__title");
let article = document.querySelector(".input__article");
let news = document.querySelector(".news");
let btn = document.querySelector(".input__btn");

// Add News
btn.addEventListener("click", function () {
  if (title.value != "" && article.value != "") {
    btn.textContent = "publish"
  }
  if (title.value == "" && article.value == "") {
    title.placeholder = "enter article name";
    article.placeholder = "enter article text";
    btn.classList.toggle("input__btn--error");
    title.classList.toggle("input__title--error");
    article.classList.toggle("input__article--error")
    btn.textContent = "enter content"
    return
  }
  if(article.value == "") {
    article.placeholder = "enter article text";
    article.classList.toggle("input__article--error")
    title.classList.remove("input__title--error");
    btn.classList.toggle("input__btn--error");
    return
  }
  if (title.value == "") {
    title.placeholder = "enter article name";
    title.classList.toggle("input__title--error");
    article.classList.remove("input__article--error")
    btn.classList.toggle("input__btn--error");
    return
  }
  title.placeholder = "";
  article.placeholder = "";
  title.classList.remove("input__title--error");
  article.classList.remove("input__article--error")
  btn.classList.remove("input__btn--error");

  let btnDeleteText = "delete";
  let btnChangeText = "edit article";

  news.insertAdjacentHTML("afterbegin",
    `<div class="news__item">
              <h2 class="news__title"> ${title.value} </h2>
              <p class="news__article"> ${article.value} </p>
              <div class="news__buttons">
                <button class="news__btn-change"> ${btnChangeText} </button>
                <button class="news__btn-delete"> ${btnDeleteText} </button>
              </div>
            </div>`);

  title.value = "";
  article.value = "";

// Delete News

  let btnDelete = document.querySelector(".news__btn-delete");
  btnDelete.addEventListener("click", function () {
    this.parentElement.parentElement.remove()
  });

  let btnChange = document.querySelector(".news__btn-change");
  let addNewsArticle = document.querySelector(".news__article");
  let addNewsTitle = document.querySelector(".news__title");

// Change News
  
  btnChange.addEventListener("click", function () {
    addNewsArticle.contentEditable = "false"
    addNewsTitle.contentEditable = "false"
    if (addNewsArticle.contentEditable = "false") {
      addNewsArticle.contentEditable = "true";
      addNewsTitle.contentEditable = "true"
      this.textContent = "confirm changes";
      btnChange.addEventListener("click", function () {
        if (addNewsArticle.contentEditable = "true" && this.textContent == "confirm changes") {
          this.textContent = "edit article";
          addNewsArticle.contentEditable = "false"
          addNewsTitle.contentEditable = "false"
        }
        else {
          addNewsArticle.contentEditable = "true";
          addNewsTitle.contentEditable = "true"
          this.textContent = "confirm changes";
        }
      });
    }
    else {
      this.textContent = "edit article";
      addNewsArticle.contentEditable = "false"
      addNewsTitle.contentEditable = "false"
    }
  });
});
