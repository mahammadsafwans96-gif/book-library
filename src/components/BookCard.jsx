// src/components/BookCard.jsx
import React from "react";

export default function BookCard({ id, title, author, genre, year, description }) {
  // use a placeholder cover image (picsum) — replace with real covers if you have images
  const coverUrl = `https://picsum.photos/seed/book${id}/400/500`;

  return (
    <article className="book-card" tabIndex="0" aria-label={`${title} by ${author}`}>
      <div className="cover-wrap">
        <img src={coverUrl} alt={`Cover for ${title}`} className="cover" />
      </div>

      <div className="card-body">
        <div className="meta-row">
          <h3 className="book-title">{title}</h3>
          <span className={`genre-badge genre-${genre.toLowerCase().replace(/\s+/g,'-')}`}>
            {genre}
          </span>
        </div>

        <p className="book-author"><strong>Author:</strong> {author}</p>

        <div className="meta-small">
          <span className="year">{year}</span>
        </div>

        <p className="book-desc">{description}</p>

        <div className="card-actions">
          <button className="btn">Details</button>
          <button className="btn ghost">Add to List</button>
        </div>
      </div>
    </article>
  );
}
