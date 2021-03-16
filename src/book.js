import React from 'react';

const Book = (props) => {
    const { img, title, author } = props.book;
    // const clickHandler = () => {
    //   alert('This action is not permitted');
    // }

    const clickHandlerComplex = (author) => {
        console.log(author);
    }
    return (
        <article className="book">
            <img src={img} alt="" width="150px" />
            <h1>{title}</h1>
            <h2>{author}</h2>
            <button className="btn" type="button" onClick={() => clickHandlerComplex(author)}>Execute</button>
        </article>
    );
};

export default Book