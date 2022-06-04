
import './App.css';
import React from "react";
import Home from './components/Home';
import Form from './components/Form';


// https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple

export default function App() {

  console.log("Rendering app...")

  let [showform, setFrom] = React.useState(false)

  let [genOptions, setGenOptions] = React.useState(true)
  let [correctAnswers, setCorrectAnswers] = React.useState([])

  let [formData, setFormData] = React.useState({
    response_code: 0,
    results:[],
  })


  function homebutton(event){
    console.log('home button clicked')
    setFrom(showform => !showform)

  }

  function reloadApp (){
    console.log('reloading...')

    window.location.reload(false);

  }



    React.useEffect(()=>{
        console.log('Fetching data...')
        fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setFormData(data))
       
            },[]
    )
  
  // let correctAnswers = []
  
  const data = formData.results

    console.log('genOptions, data.length: ',genOptions, data.length)

    if (genOptions & data.length > 0){
      console.log('genOptions: ',genOptions)
      console.log('generating options...')
      for (let i = 0; i<data.length; i++){

          let options_list = data[i].incorrect_answers

          const random_index = Math.floor(Math.random() * 5)
          // const random_index =1
          // console.log('random_index: ', random_index)
          
          options_list.splice(random_index,0,data[i].correct_answer)

          console.log('options_list: ',options_list)

          // correctAnswers.push(data[i].correct_answer)
          setCorrectAnswers(oldArray => ([...oldArray, data[i].correct_answer]))


          data[i].options = options_list
      }
      setGenOptions(false)


  }
  console.log("data: ", data)
  // console.log('correctAnswers: ',correctAnswers)





  const formElement = showform? 
    <Form 
    data = {data}
    correctAnswers = {correctAnswers}
    reloadApp = {reloadApp}

    /> 
    : <Home homebutton = {homebutton}/>

  // const formElement = <Home homebutton = {homebutton}/>

  return (
    <div className="App">

      {formElement}

      
    </div>
  );
}


