// ********* Search for Items ***********
const SEARCH = document.forms['search-item'].querySelector('input');

// add event listener
SEARCH.addEventListener('keyup', (e) => {
  // lets grab the users text
  let text = e.target.value.toLowerCase();
  //lets grab each li tag
  let groceryList = document.querySelector('grocery-list ul');
  let groceries = groceryList.getElementsByTagName('li');
  // convert the groceries to an array, so we can use for each method
  let groceriesArray = Array.from(groceries);
  
  groceriesArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;

    let groceryNameLower = groceryName.toLocaleLowerCase();
    
    if(groceryNameLower.toLocaleLowerCase(text) == -1){
      grocery.style.display = 'none';
    } else {
      grocery.style.display = 'block';
    }
    
  })
})
  // *********Hide Elements ***********
  let checkbox = document.querySelector('#hide');
  checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list');
    if(checkbox.checked){
      groceryList.style.display = 'none';
    } else{
      groceryList.style.display = 'block';
    }
  })

// add items
   let formAdd = document.getElementById('add-item');

// Delete items********
formAdd.addEventListener('submit',(e) => {
  let ul = document.getElementsByTagName('ul')[0];
//prevent the page from refreshing
  e.preventDefault();
// grab user's text
  let text = formAdd.querySelector('input').value;
// clear the input box
  formAdd.querySelector('input').value = null;

  //creating list items dynamically 
  let li = document.createElement('li');
  let groceryName = document.createElement('span');
  let deleteButton = document.createElement('span');
  

  li.appendChild(groceryName); 
  li.appendChild(deleteButton);

  ul.appendChild(li);

  //add text 
  groceryName.textContent = text;
  deleteButton.textContent = 'delete';

  //add classes
  groceryName.classList.add('name');
  deleteButton.classList.add('delete'); 
});
            //  delete items
let groceryList = document.querySelector('#grocery-list ul');
//add event listener 
groceryList.addEventListener('click', remove);
// define our handler funtion 
function remove(e){
  let target = e.target; 
  if(target.className == 'delete'){
    let li = target.parentElement;
    li.remove();
  }
} 

             //  Tabs
let headings = document.querySelector('.heading');

let panels = document.querySelectorAll('.panel');
// define a selectedItem variable to toggle between classes
let selectedPanel = null;

headings.addEventListener('click', (e)=> {
  // lets find out which li tag triggered the event
  let target = e.target;

  let dataAttribute = e.target.dataset.clicked; 

  if(target.tagName === "LI"){
//remove the currently selected element 
  if(selectedPanel != null){
selectedPanel.classList.toggle('selected');
}; 
selectedPanel = target; 
selectedPanel.classList.toggle('selected');

// panel we want to show
let targetPanel = document.querySelector(dataAttribute);
panels.forEach((panel) => {
  if(panel === targetPanel){
    panel.classList.add('active');
  } else{
    panel.classList.remove('active');
  }
})
  }
     
});

//button to display the answer 
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer() {
  document.getElementById('answer').classList.add('show');
  document.getElementById('answer').textContent = 'AN IMPASTA';
  answerButton.style.display = 'none';
}