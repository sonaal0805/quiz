import React from "react"
import Questions from "./Questions" 
// import Home from "./Home"

export default function Form(){

    let [answerMode, answerModeControl] = React.useState(false)
    let [score, setScore] = React.useState(0)


    console.log("Rendering form")
    



    let [formData, setFormData] = React.useState({
        response_code: 0,
        results:[],
        // incorrect_answers : [],
        // correct_answer : []
    })


    React.useEffect(()=>{
        console.log('Fetching data...')
        fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setFormData(data))
            },[]
    )
    
  
    const data = formData.results
    
    // function addScore(event){
    //     setScore(score => score + 1)
    //     console.log('final score: ', score)

    // }
    
    if (!answerMode){
        for (let i = 0; i<data.length; i++){

            let options_list = data[i].incorrect_answers

            const random_index = Math.floor(Math.random() * 5)
            console.log('random_index: ', random_index)
            
            options_list.splice(random_index,0,data[i].correct_answer)
    
            data[i].options = options_list
        }

    }
    console.log("data: ", data)


    const  questElement = data.map((item,index) => 
            // console.log("hi")
            // item.incorrect_answers.push(item.correct_answer)
            (

                <Questions
                    key = {index}
                    question_num = {index}
                    question = {item.question}
                    incorrect_answers = {item.incorrect_answers}
                    correct_answer = {item.correct_answer}

                    options = {item.options}
                    showAnswer = {answerMode}
                    // addScore = {addScore}
                    
   
                />
                    
                )
            
            )
    function submit(){
        console.log('submit btn clicked!! ')
        answerModeControl(true)


    }


    return (
        <div className = "Form">
            {questElement}
            <div className = "submit_btn">
                <button className = "submit_btn" onClick = {submit}> Submit </button>
         

            </div>
            {/* <label> Score: <span>{score}</span> </label> */}
          
           
        </div>
    )
}