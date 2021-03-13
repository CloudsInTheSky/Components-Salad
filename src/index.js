import React from 'react';
import ReactDom from 'react-dom';

function Greet() {
  return <h1>Hello World</h1>;
}

ReactDom.render(<Greet />, document.getElementById('root')
);