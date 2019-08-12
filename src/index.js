import React from "react";
import ReactDOM from "react-dom";

/* USING JS  IN JSX 

function Person() {
  const btn = "search button";
  const name = "John";
  const lastName = "Doe";

  return <section>
     <button>{btn}</button>
    <h2>{`${name} ${lastName}`}</h2>
    <p>{5858}</p>
  </section>;
}///////////////////////////////////

/*   Displaying Books Information 

function Greeting() {
  return (
    ///////////////  JSX , NOT HTML
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}

const CoverImage = () => (
  <img
    width="200"
    src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL436_.jpg"
    alt="book cover"
  />
); // stateless function comp

const Title = () => <h1>The Subtle Art of Not Giving a Fuck </h1>;

const Author = () => <p style=={{backgroundColor:"black"}}>Mark Manson</p>; */






/*
////      Three arguments elements , propsObject , children 
////      React.createElement creates element with the content

function Greeting(){
    return React.createElement('div',{},'hello world')
} */



/*
 ////       THIS IS AN STATELESS FUNCTIONAL COMPONENT 
 ////       ALWAYS RETURN JSX


function Greeting() {
  return <h1>This is John Hello From React </h1>;
}
*/

ReactDOM.render(<Person />, document.getElementById("root"));
