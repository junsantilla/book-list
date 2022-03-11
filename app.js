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

// Delete book
UI.prototype.deleteBook = function (target) {
	if (target.className === "delete") {
		target.parentElement.parentElement.remove();
		const ui = new UI();
		ui.showAlert("Book is successfully deleted!", "success");
	}
};

// Clear fields after submit
UI.prototype.clearFields = function () {
	title.value = "";
	author.value = "";
	isbn.value = "";
};

// Show alert
UI.prototype.showAlert = function (message, className) {
	const div = document.createElement("div");
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(message));
	const container = document.querySelector(".container");
	const form = document.querySelector("#book-form");
	container.insertBefore(div, form);
	setTimeout(() => {
		document.querySelector(".alert").remove();
	}, 3000);
};

// Event listeners
const formSubmit = document.getElementById("book-form");
formSubmit.addEventListener("submit", function (e) {
	const title = document.getElementById("title").value,
		author = document.getElementById("author").value,
		isbn = document.getElementById("isbn").value;

	const book = new Book(title, author, isbn);

	const ui = new UI();

	// Validate
	if (title == "" || author == "" || isbn == "") {
		ui.showAlert("Please fill all of the fields", "error");
	} else {
		ui.addBookToList(book);
		ui.clearFields();
		ui.showAlert("Book is successfully added!", "success");
	}

	e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
	const ui = new UI();

	ui.deleteBook(e.target);

	e.preventDefault();
});
