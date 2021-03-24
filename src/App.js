import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  // const members = ["Onick", "Onoy", "Amrin", "Asha", "Mona", "Vuna"];
  // const age = [
  //   '30',
  //   'Fartam na',
  //   'Ammaaaa',
  //   'Ekta ustha dibo',
  //   'tor ki hoise!',
  //   'Age Nai',
  // ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter></Counter>
        <User></User>
        {/* <div className="container">
          <div className="row">
            {members.map(name => <Person
             title={name}
             age={age}
             members={members}
            ></Person>)}
          </div>
        </div> */}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className="m-3 btn btn-sm btn-success">Increase</button>
      <button onClick={() => setCount(count - 1)} className="m-3 btn btn-sm btn-warning">Decrease</button>
    </div>
  )
}

function User() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>User: {user.length}</h3>
      {console.log(user)}
      <div className="container">
          <div className="row">
            {user.map(user => <Person
             user={user}
            ></Person>)}
          </div>
        </div>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    margin: "5px",
    padding: "0px",
  };
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card text-dark text-left" style={personStyle}>
        <img
          src="/some/valid/uri"
          className="card-img-top text-center"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.user.name}</h5>
          <p className="card-text">
            {/* Dialogue: {props.age[props.members.indexOf(props.title)]} */}
            Email: {props.user.email}
          </p>
          <a href={props.user.website} className="btn btn-primary">
            Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
