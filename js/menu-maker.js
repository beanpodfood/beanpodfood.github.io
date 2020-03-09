const header = document.getElementsByTagName('header')[0];
const nav = document.createElement('ol');
nav.id = 'nav';
nav.addLinkedItem = function(linkTo, text, refEl) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  const hashLinkTo = '#' + linkTo;
  link.setAttribute('href', hashLinkTo);
  link.innerText = text;
  link.addEventListener('click', function (event) { 
    event.preventDefault(); 
    refEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    history.pushState(null, text, hashLinkTo)
    return false; 
  });
  item.appendChild(link);
  this.appendChild(item);
};

Array.from(document.getElementsByTagName('h1')).forEach(function(header) {
  nav.addLinkedItem(header.id, header.innerText, header);
});

header.appendChild(nav);
