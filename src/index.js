import React from 'react';
import ReactDom from 'react-dom';

import './main.css';

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (<img
  src="https://img.buzzfeed.com/buzzfeed-static/static/2015-03/2/14/enhanced/webdr11/enhanced-22820-1425322972-8.png"
  alt="" width="150px"
/>
);

const Title = () => <h1>To Kill a Mocking Bird</h1>;
const Author = () => <h2>Harper Lee</h2>;

// const Greet = () => {
//   return React.createElement('div',{},
//   React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Booklist />, document.getElementById('root')
);