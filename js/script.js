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
  console.log('clickedHref:', hrefFromClickedLink);
  
  /* find the correct article using the selector (value of 'href' attribute) */
  const articles = document.querySelectorAll('.posts article');
  let chosenArticle;
  console.log('articles: ', articles)

  for (let article of articles) {
    console.log('#' + article.getAttribute('id'));
    if ('#' + article.getAttribute('id') == hrefFromClickedLink) {
      chosenArticle = article.getAttribute('id')
    }
  }
  console.log('Chosen article: ', chosenArticle);
  
  /* add class 'active' to the correct article */
  document.getElementById(chosenArticle).classList.add('active');
}
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }