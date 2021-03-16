import React from 'react';
import ReactDom from 'react-dom';

import './main.css';

import { books } from './books';
import Book from './book'

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root')
);