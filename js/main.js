
let listView = document.querySelector('.product-blocks');
let gridView = document.querySelector('.grid-cards');


function gridbtn() {
  listView.classList.add('hide-blocks');
  gridView.classList.add('show-grid');
}

function listbtn() {
  listView.classList.remove('hide-blocks');
  gridView.classList.remove('show-grid');
}

