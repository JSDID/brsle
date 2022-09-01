document.getElementById('btnProduct').onclick = function () {
  calcCost();
};

  function calcCost () {
  let sP = document.getElementById('selectProduct').value;
  let qP = document.getElementById('quantityProduct').value;
  let total = sP * qP;
  document.getElementById('priceProduct').innerHTML = total;
  document.getElementById('infoProduct').style.display = 'block';
  if(sP == 0 || qP == 0) {
    document.getElementById('infoProduct').style.display = 'none';
    alert('Вкажіть значення!');
    return;
  }
}

const scrolling = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function (item) {
 
  item.addEventListener('click', function (e) {
   
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    
    let scroller = setInterval(function () {
    
      let scrollBy = coordY / framesCount;

  
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

// https://www.youtube.com/watch?v=fTeJBNV-Gu8