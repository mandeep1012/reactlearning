import React from "react";
import ReactDOM from "react-dom";

//PROPS(PROPERTIES) => ARGUMENTS TO COMPONENTS
//function sayName(name){
//console.log(name);
//}
//sayName('john');

function People() {
  const friends = [
    { name: "John", job: "developer", age: "23", company: "apple" },
    { name: "Bob", job: "designer", age: "25", company: "facebook" },
    { name: "Susy", job: "artist", age: "27", company: "micro" }
  ];

  return (
    <section>
      <Person person={friends[0]}>
        <p>Some Info</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = props => {
  console.log(props);
  const { name, job, age, company } = props.person;
  const { children } = props;
  return (
    <div>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>

      <hr />
    </div>
  );
};

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

ReactDOM.render(<People />, document.getElementById("root"));
