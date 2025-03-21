
// Traversing the DOM

let output;

// Get child elements

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child two';
parent.children[1].style.color ='skyblue';
parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid black';
child.parentElement.style.padding= '10px';

// Sibling  elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.innerText;
secondItem.style.color = 'green';
secondItem.nextElementSibling.style.color = 'red';
secondItem.previousElementSibling.style.color = 'orange';



output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;
parent.lastChild.textContent = 'Hello';

// Parent node
const child = document.querySelector('.child');
output = child.parentNode;
output = child.parentElement;
child.parentNode.style.backgroundColor = '#ccc';
// child.parentElement.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);



