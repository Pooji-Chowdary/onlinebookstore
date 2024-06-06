document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    header.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

const bookData = {
    fiction: [
        { title: "The Alchemist", image: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg", price: 20 },
        { title: "Dracula", image: "https://m.media-amazon.com/images/I/811hr0FIS8L._AC_UF350,350_QL80_.jpg", price: 15 },
        { title: "The Great Gatsby",  image: "https://images-eu.ssl-images-amazon.com/images/I/71X7HnBk6VL._AC_UL600_SR600,600_.jpg",price: 25 },
        { title: "The God of Small Things", image: "https://m.media-amazon.com/images/I/91saO95VziL._AC_UF1000,1000_QL80_.jpg", price: 10 },
        { title: "The Paying Guests", image: "https://m.media-amazon.com/images/I/515OPsggGwL._AC_UF1000,1000_QL80_.jpg", price: 30 },
        { title: "Lord of the Flies", image: "https://m.media-amazon.com/images/I/81uc0ffe6xL._AC_UF1000,1000_QL80_.jpg", price: 25 },
        { title: "Adventures of Sherlock Holmes", image: "https://m.media-amazon.com/images/I/71-YShuOLdL._AC_UF1000,1000_QL80_.jpg", price: 15 },
        { title: "All the Light We Cannot See", image: "https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UF1000,1000_QL80_.jpg", price: 20 },
        { title: "Charlotte's Web", image: "https://m.media-amazon.com/images/I/91YS0h1kz5L._AC_UF1000,1000_QL80_.jpg", price: 30 },
        { title: "Memoirs of a Geisha", image: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/244790_MEMOIRS%20OF%20A%20GEISHA_1400x2100%20UV_Eng_0.jpg?itok=Vt01XTKw", price: 10 },
    ],
    computer_science: [
        { title: "THE SELF-TAUGHT PROGRAMMER",  image: "data:image/jpeg;base64,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", price: 30 },
        { title: "Introduction to Algorithms", image: "http://ecx.images-amazon.com/images/I/41u4nFsBWrL._SL160_.jpg", price: 25 },
        { title: "Modern Operating Systems", image: "http://ecx.images-amazon.com/images/I/51u3BZpfrML._SL160_.jpg", price: 15 },
        { title: "C Programming Language", image: "http://ecx.images-amazon.com/images/I/41qX6YdIJ7L._SL160_.jpg", price: 50 },
        { title: "Computer Organization and Design", image: "http://ecx.images-amazon.com/images/I/51Td8wQuHbL._SL160_.jpg", price: 35 },
        { title: "Clean Code: A Handbook of Agile Software Craftsmanship", image: "http://ecx.images-amazon.com/images/I/41D5QxOwn9L._SL160_.jpg", price: 25 },
        { title: "Thinking in Java", image: "http://ecx.images-amazon.com/images/I/51nrRHBSPHL._SL160_.jpg", price: 20 },
        { title: "Effective Java", image: "http://ecx.images-amazon.com/images/I/51poMjBx7PL._SL160_.jpg", price: 10 },
        { title: "Data Structures and Algorithms", image: "http://ecx.images-amazon.com/images/I/51nFaksq%2BvL._SL160_.jpg", price: 20 },
        { title: "Introduction to the Theory of Computation", image: "http://ecx.images-amazon.com/images/I/51yQiIxzRsL._SL160_.jpg", price: 25 },
    ],
    mathematics: [
        { title: "Mathematics for Computer Science", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdnJPmSYjTJhgckXC119NJXvCUKsUOV8r8SfVs3uNyJih4iHH", price: 18 },
        { title: "Introductory discrete mathematics", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJ-0mXVjEs1j3ltMkrGgdXEUd3VroSklfQ_9-xFH7jcly_6_n4", price: 22 },
        { title: "Concrete Mathematics: A Foundation for Computer Science", image: "https://m.media-amazon.com/images/I/91vRF15qLuL._AC_UY436_FMwebp_QL65_.jpg", price: 22 },
        { title: "Mathematical Foundation of Computer Science", image: "https://m.media-amazon.com/images/I/91KSUkrgn6L._AC_UY436_FMwebp_QL65_.jpg", price: 22 },
        { title: "Elements Of Mathematical Foundation Of Computer Science", image: "https://m.media-amazon.com/images/I/51dqJxOZ6sL._AC_UY436_FMwebp_QL65_.jpg", price: 22 },
        { title: "Mathematics-I Calculus and Linear Algebra", image: "https://m.media-amazon.com/images/I/81p1I9YOpwL._AC_UY436_FMwebp_QL65_.jpg", price: 22 },
    ],
    ai_ml: [
        { title: "AI vs Humans", image: "https://m.media-amazon.com/images/I/71sx9JkOK5S._AC_UY436_FMwebp_QL65_.jpg", price: 40 },
        { title: "Introduction to AI/ML and Data Science", image: "https://m.media-amazon.com/images/I/71f5lgVPkML._AC_UY436_FMwebp_QL65_.jpg", price: 35 },
        { title: "Artificial Intelligence: Concepts and Applications", image: "https://m.media-amazon.com/images/I/715T-q4XxwL._AC_UY436_FMwebp_QL65_.jpg", price: 35 },
        { title: "Machine Learning using Python", image: "https://m.media-amazon.com/images/I/71uQ8VB99rL._AC_UY436_FMwebp_QL65_.jpg", price: 25 },
        { title: "Practical AI for Cybersecurity", image: "https://m.media-amazon.com/images/I/91WJ3+8xlHL._AC_UY436_FMwebp_QL65_.jpg", price: 5 },
        { title: "Generative AI with LangChain", image: "https://m.media-amazon.com/images/I/619IEHSoeoL._AC_UY436_FMwebp_QL65_.jpg", price: 10 },
        { title: "AI FOR CYBER SECURITY ", image: "https://m.media-amazon.com/images/I/51vQR473aPL._SY522_.jpg", price: 20 },
    ],
};

function showBooks(genre) {
    if (!bookData[genre]) {
        console.error(`Genre "${genre}" not found in bookData`);
        return;
    }

    // Prevent default behavior of scrolling
    event.preventDefault();

    const bookListContainer = document.getElementById("book-list-container");
    bookListContainer.innerHTML = ""; // Clear existing content

    const bookList = document.createElement("ul");
    bookList.className = "book-list";
    bookListContainer.appendChild(bookList);

    bookData[genre].forEach(book => {
        const bookItem = document.createElement("li");
        bookItem.className = "book-item";

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "title-wrapper";

        const title = document.createElement("h3");
        title.innerText = book.title;
        titleWrapper.appendChild(title);

        const image = document.createElement("img");
        image.src = book.image;
        image.alt = book.title + " Image";
        image.className = "book-image";
        titleWrapper.appendChild(image);

        bookItem.appendChild(titleWrapper);

        const price = document.createElement("p");
        price.innerText = `Price: $${book.price}`;
        bookItem.appendChild(price);

        bookList.appendChild(bookItem);
    });

    // Adding script for toggling opacity
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        if (item.getAttribute('onclick').includes(genre)) {
            item.classList.remove('unselected');
        } else {
            item.classList.add('unselected');
        }
    });
}