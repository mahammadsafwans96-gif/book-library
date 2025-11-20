// src/App.jsx
import React from "react";
import BookCard from "./components/BookCard";
import "./index.css";

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, description: "A classic novel about compassion and justice in the Deep South seen through the eyes of a child." },
  { id: 2, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Non-Fiction", year: 2011, description: "An exploration of human history from the Stone Age to the modern age that reframes our view of humanity." },
  { id: 3, title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "Mystery", year: 1902, description: "A classic Sherlock Holmes mystery that blends detective work with gothic atmosphere." },
  { id: 4, title: "1984", author: "George Orwell", genre: "Fiction", year: 1949, description: "A dystopian novel that warns of totalitarianism and mass surveillance." },
  { id: 5, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Non-Fiction", year: 2011, description: "A deep look into human decision-making and the two systems that drive how we think." },
  { id: 6, title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", year: 2012, description: "A modern psychological thriller with unreliable narrators and dark twists." }
];

function getMostCommonGenre(arr) {
  const counts = {};
  arr.forEach(b => (counts[b.genre] = (counts[b.genre] || 0) + 1));
  let max = 0, most = "";
  for (const [g, c] of Object.entries(counts)) {
    if (c > max) { max = c; most = g; }
  }
  return most;
}

export default function App() {
  const totalBooks = books.length;
  const mostCommonGenre = getMostCommonGenre(books);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div>
            <h1 className="main-title">My Book Collection</h1>
            <p className="subtitle">Books That Changed My Perspective</p>
          </div>
          <div className="header-actions">
            <input className="search" placeholder="Search books..." aria-label="Search books" />
          </div>
        </div>
      </header>

      <main className="app-main">
        <section className="books-grid" aria-label="Books list">
          {books.map(book => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              year={book.year}
              description={book.description}
            />
          ))}
        </section>

        <aside className="summary-card">
          <h2>Books Summary</h2>
          <p><strong>Total books:</strong> {totalBooks}</p>
          <p><strong>Most common genre:</strong> {mostCommonGenre}</p>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">Your Name</p>
            <p className="footer-email">youremail@example.com</p>
          </div>
          <div className="footer-right">
            <p>© {new Date().getFullYear()} Book Lover</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
