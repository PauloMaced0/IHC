function displayBooks() {
    const bookContainer = document.querySelector('.grid');
    books.forEach(book => {
        bookContainer.innerHTML += `
          <div class="group relative">
            <div
              class="aspect-w-1 aspect-h-1.5 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70 lg:w-60">
              <img src="${book["Cover Image"]}" alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${book.Title}
              </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">By ${book.Author}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">${book.Price.toFixed(2)}€</p>
            </div>
          </div>
      `;
    });
}

document.addEventListener('DOMContentLoaded', displayBooks);


const books = [
        
        {
            "Id": 1,
            "Title": "The Night Circus",
            "Author": "Erin Morgenstern",
            "Release Date": "2011",
            "Description": "A mesmerizing and magical tale of two young illusionists, bound by love and fate, set against the backdrop of a mysterious circus.",
            "Cover Image": "../assets/Images/1.jpg",
            "Price": 14.99 
        },
        {
            "Id": 2,
            "Title": "1984",
            "Author": "George Orwell",
            "Release Date": "1949",
            "Description": "A dystopian novel depicting a totalitarian regime where truth is manipulated, and individualism is suppressed.",
            "Cover Image": "../assets/Images/2.jpeg",
            "Price": 29.99 
        },
        {
            "Id": 3,
            "Title": "The Alchemist",
            "Author": "Paulo Coelho",
            "Release Date": "1988",
            "Description": "A philosophical novel about a young Andalusian shepherd who embarks on a journey to discover his personal legend.",
            "Cover Image": "../assets/Images/3.jpg",
            "Price": 19.99 
        },
        {
            "Id": 4,
            "Title": "The Great Gatsby",
            "Author": "F. Scott Fitzgerald",
            "Release Date": "1925",
            "Description": "Set in the Roaring Twenties, this novel explores themes of love, wealth, and the American Dream through the eyes of Jay Gatsby.",
            "Cover Image": "../assets/Images/4.jpeg",
            "Price": 29.99 
        },
        {
            "Id": 5,
            "Title": "Harry Potter and the Philosopher's Stone",
            "Author": "J.K. Rowling",
            "Release Date": "1997",
            "Description": "The first installment in the beloved Harry Potter series, following the young wizard's adventures at Hogwarts School of Witchcraft and Wizardry.",
            "Cover Image": "../assets/Images/5.jpg",
            "Price": 19.99 
        },
        {
            "Id": 6,
            "Title": "To Kill a Mockingbird",
            "Author": "Harper Lee",
            "Release Date": "1960",
            "Description": "A powerful story set in the racially charged atmosphere of the American South, tackling themes of justice and moral growth.",
            "Cover Image": "../assets/Images/6.jpeg",
            "Price": 17.09 
        },
        {
            "Id": 7,
            "Title": "Pride and Prejudice",
            "Author": "Jane Austen",
            "Release Date": "1813",
            "Description": "A classic romance novel exploring societal norms, love, and marriage in early 19th-century England.",
            "Cover Image": "../assets/Images/7.jpg",
            "Price": 19.99 
        },
        {
            "Id": 8,
            "Title": "The Hobbit",
            "Author": "J.R.R. Tolkien",
            "Release Date": "1937",
            "Description": "A fantasy adventure novel following the journey of Bilbo Baggins, a hobbit who embarks on a quest to reclaim treasure guarded by a dragon.",
            "Cover Image": "../assets/Images/8.jpg",
            "Price": 18.29 
        },
        {
            "Id": 9,
            "Title": "The Catcher in the Rye",
            "Author": "J.D. Salinger",
            "Release Date": "1951",
            "Description": "A coming-of-age novel narrated by Holden Caulfield, a disillusioned teenager navigating the complexities of adolescence.",
            "Cover Image": "../assets/Images/9.png",
            "Price": 19.99 
        },
        {
            "Id": 10,
            "Title": "The Hunger Games",
            "Author": "Suzanne Collins",
            "Release Date": "2008",
            "Description": "The first book in a dystopian trilogy where teenagers are forced to participate in a televised fight to the death for entertainment.",
            "Cover Image": "../assets/Images/10.jpg",
            "Price": 15.99 
        },
    
        {
            "Id": 11,
            "Title": "The Book Thief",
            "Author": "Markus Zusak",
            "Release Date": "2005",
            "Description": "Narrated by Death, this novel follows a young girl named Liesel who steals books and shares them with her neighbors during World War II in Germany.",
            "Cover Image": "../assets/Images/11.jpg",
            "Price": 19.49 
        },
        {
            "Id": 12,
            "Title": "The Da Vinci Code",
            "Author": "Dan Brown",
            "Release Date": "2003",
            "Description": "A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum and unravels a conspiracy.",
            "Cover Image": "../assets/Images/12.jpg",
            "Price": 19.99 
        },
        {
            "Id": 13,
            "Title": "The Girl with the Dragon Tattoo",
            "Author": "Stieg Larsson",
            "Release Date": "2005",
            "Description": "The first book in the Millennium series, featuring journalist Mikael Blomkvist and hacker Lisbeth Salander as they delve into a decades-old disappearance.",
            "Cover Image": "../assets/Images/13.jpg",
            "Price": 21.99 
        }
        
    ]