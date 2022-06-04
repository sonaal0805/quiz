
import './App.css';
import React from "react";
import Home from './components/Home';
import Form from './components/Form';


// https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple

export default function App() {

  console.log("Rendering app...")

 let [showform, setFrom] = React.useState(false)


  function homebutton(event){
    console.log('home button clicked')
    setFrom(showform => !showform)

  }

  const formElement = showform? <Form /> : <Home homebutton = {homebutton}/>

  // const formElement = <Home homebutton = {homebutton}/>

  return (
    <div className="App">

      {formElement}

      
    </div>
  );
}


