// Top level, which also contains the document prop
// console.log(window);

// Single Element Selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container '));

// Multiple Elements Selector
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

// **************************************************************************************************************** //

// Manipulating the DOM

const ul = document.querySelector('.items');

// ul.remove(); // remove the ul
// ul.lastElementChild.remove(); // remove the last child
ul.firstElementChild.textContent = 'Hello World'; // change the text
ul.children[1].innerText = 'Brad'; // selecting the second li
ul.lastElementChild.innerHTML = '<h1>Hello Again!</h1>' // adding html dynamically

const btn = document.querySelector('.btn');

btn.style.background = 'red'; // change style, why this? we have css! - you can change this
// after events, mouse clicks

// **************************************************************************************************************** //

// EVENTS

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e); // the event
    console.log(e.target) // the element
    // console.log(e.target.className) // the class of the target element
    // console.log(e.target.id) // the id of the target element

    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});