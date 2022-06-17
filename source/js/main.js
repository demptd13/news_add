
// Find Elements
let title = document.querySelector(".input__title");
let article = document.querySelector(".input__article");
let news = document.querySelector(".news");
let item = document.querySelector(".news__item");
let changeTextBtn = document.querySelector(".news__btn-change");
let articleForChange = document.querySelector(".news__article");
let btn = document.querySelector(".input__btn");


// Add News
btn.addEventListener("click", function () {
  let addNewsItem = document.createElement("div");
  addNewsItem.className = "news__item";
  let addNewsTitle = document.createElement("h2");
  addNewsTitle.className = "news__title";
  let addNewsArticle = document.createElement("p");
  addNewsArticle.className = "news__article";
  let buttons = document.createElement("div");
  buttons.className = "news__buttons";
  let btnDelete = document.createElement("button");
  btnDelete.className = "news__btn-delete";
  let btnChange = document.createElement("button");
  btnChange.className = "news__btn-change";
  addNewsItem.prepend(addNewsTitle);
  addNewsTitle.textContent = title.value;
  addNewsItem.append(addNewsArticle);
  addNewsArticle.textContent = article.value;
  buttons.prepend(btnChange);
  btnChange.textContent = "edit article";
  buttons.append(btnDelete);
  btnDelete.textContent = "delete article"
  addNewsItem.append(buttons);
  news.appendChild(addNewsItem);
  title.value = "";
  article.value = "";

  btnDelete.addEventListener("click", function () {
    this.parentElement.parentElement.remove()
  });

  btnChange.addEventListener("click", function () {
    addNewsArticle.contentEditable = "false"
    if (addNewsArticle.contentEditable = "false") {
      addNewsArticle.contentEditable = "true";
      this.textContent = "confirm changes";
      btnChange.addEventListener("click", function () {
        if (addNewsArticle.contentEditable = "true" && this.textContent == "confirm changes") {
          this.textContent = "edit article";
          addNewsArticle.contentEditable = "false"
        }
        else {
          addNewsArticle.contentEditable = "true";
          this.textContent = "confirm changes";
        }
      });
    }
    else {
      this.textContent = "edit article";
      addNewsArticle.contentEditable = "false"
    }
  });
});


