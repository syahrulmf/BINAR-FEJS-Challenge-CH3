/* eslint-disable no-undef */
function getNameFile() {
  const date = new Date();
  const result = `IMG/${date.getMonth()}/${date.getFullYear()}/001`;
  document.getElementById('file-input').innerHTML = result;
}

$('#toggleSidebar').click(() => {
  $('.collapseSidebar').toggle();

  const currTabElem1 = document.getElementById('show-col-lg-0');
  const currentClassName1 = document.getElementById('show-col-lg-0').className;

  if (currentClassName1 === 'col-lg-0') {
    currTabElem1.setAttribute('class', 'col-lg-2');
  } else {
    currTabElem1.setAttribute('class', 'col-lg-0');
  }

  const currTabElem2 = document.getElementById('show-col-lg-12');
  const currentClassName2 = document.getElementById('show-col-lg-12').className;

  if (currentClassName2 === 'col-lg-12') {
    currTabElem2.setAttribute('class', 'col-lg-10');
  } else {
    currTabElem2.setAttribute('class', 'col-lg-12');
  }
});
