const images = document.querySelectorAll('img');

images.forEach(img => {
  const parentDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.textContent = img.alt;
  parentDiv.appendChild(img.cloneNode());
  parentDiv.appendChild(h2);
  parentDiv.classList.add('art-container')
  img.parentNode.replaceChild(parentDiv, img);
});
