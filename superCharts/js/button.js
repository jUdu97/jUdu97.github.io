//https://codepen.io/GCrispino/pen/EEXmYd
function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;
}

function toggleDisplay(elem){
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === 'none' || curDisplayStyle === ''){
    elem.style.display = 'block';
  }
  else{
    elem.style.display = 'none';
  }

}

function toggleMenuDisplay(e){
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.dropdown-menu');

  toggleClass(menu,'hide');
}

function handleOptionSelected(e){
  toggleClass(e.target.parentNode, 'hide');

  const id = e.target.id;
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown-toggle');
  titleElem.textContent = newValue;

  //trigger custom event
  document.querySelector('.dropdown-toggle').dispatchEvent(new Event('change'));
}

function handleTitleChange(e){
  const result = document.getElementById('result');
}

//get elements
const dropdownTitle = document.querySelector('.dropdown-toggle');
const dropdownOptions = document.querySelectorAll('.dropdown-menu .dropdown-item');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);


//loop through options
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

document.querySelector('.dropdown-toggle').addEventListener('change',handleTitleChange);
