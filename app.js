// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to the list
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById("book-list");

	const row = document.createElement("tr");
	row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</td>
    `;
	list.appendChild(row);
};

// Clear fields after submit
UI.prototype.clearFields = function () {
	title.value = "";
	author.value = "";
	isbn.value = "";
};

// Event listeners
const formSubmit = document.getElementById("book-form");
formSubmit.addEventListener("submit", function (e) {
	const title = document.getElementById("title").value,
		author = document.getElementById("author").value,
		isbn = document.getElementById("isbn").value;

	const book = new Book(title, author, isbn);

	const ui = new UI();
	ui.addBookToList(book);
	ui.clearFields();

	e.preventDefault();
});
