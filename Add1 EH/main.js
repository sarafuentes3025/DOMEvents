let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

// I'll use the function to make the hidden element (moreInfo) appear when the 'click' event fires.
function showInfo(){
  moreInfo.style.display = 'block';
}

// event handler for a click event
readMore.addEventListener('click', showInfo);
