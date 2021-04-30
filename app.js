const list = document.querySelector('#book-list ul')

// delete books
list.addEventListener('click', function(e){
    if(e.target.className === 'delete-btn'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


// add books

const addForm = document.forms['add-book']

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('p');
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'submit'
    deleteBtn.value = 'delete'

    // add content
    bookName.textContent = value

    //add classes
    bookName.classList.add('book-name')
    deleteBtn.classList.add('delete-btn')
    li.classList.add('book')
    

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    addForm.reset();
})

// hide books
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    } else{
        list.style.display = 'initial'
    }
})


// search books 
const serachBar = document.forms['search-books'].querySelector('input');

serachBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'flex'
        } else{
            book.style.display = 'none'
        }
    })
})