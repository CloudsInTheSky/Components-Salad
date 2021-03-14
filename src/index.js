import React from 'react';
import ReactDom from 'react-dom';

import './main.css';

const firstBook = {
  img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/2/14/enhanced/webdr11/enhanced-22820-1425322972-8.png',
  title: 'To Kill a Mocking Bird',
  author: 'Harper Lee'
}
const secondBook = {
  img: 'https://storage.googleapis.com/du-prd/books/images/9780593318171.jpg',
  title: 'Klara and the Sun',
  author: 'Kazuo Ishiguro'
}

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Content
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />

    </section>
  );
}


const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" width="150px" />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      {props.children}
    </article>
  );
};

// const Greet = () => {
//   return React.createElement('div',{},
//   React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Booklist />, document.getElementById('root')
);