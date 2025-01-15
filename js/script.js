// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
  
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  
  /* [DOME] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  
  /* get 'href' attribute from the clicked link */
  const hrefFromClickedLink = clickedElement.getAttribute("href");
  
  /* find the correct article using the selector (value of 'href' attribute) */
  const articles = document.querySelectorAll('.posts article');
  let chosenArticle;

  for (let article of articles) {
    if ('#' + article.getAttribute('id') == hrefFromClickedLink) {
      chosenArticle = article.getAttribute('id');
      break;
    }
  }
  
  /* add class 'active' to the correct article */
  document.getElementById(chosenArticle).classList.add('active');
}
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }