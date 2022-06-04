import React from "react"
import Questions from "./Questions" 
// import Home from "./Home"
import Score from "./Score"

export default function Form(props){

    console.log("Rendering form")

    let [answerMode, answerModeControl] = React.useState(false)

    let [optionsSelected, setoptionsSelected] = React.useState({})

    let [score, setScore]= React.useState(0)

  
    const data = props.data

    // let optionsSelected = {}
    // let correctAnswers = []

    // let score = 0

    function answersGiven(questNum,optionNum,data){
        console.log('checking answers!!', data)
     
        const key = questNum
        setoptionsSelected(oldSelected => ({...oldSelected, [key] : data }))
        // optionsSelected[key] = data
        
        


    }
    

    console.log('optionsSelected: ', optionsSelected)
    
    // if (!answerMode){
    //     console.log('generating options...', answerMode)
    //     for (let i = 0; i<data.length; i++){

    //         let options_list = data[i].incorrect_answers

    //         const random_index = Math.floor(Math.random() * 5)
    //         console.log('random_index: ', random_index)
            
    //         options_list.splice(random_index,0,data[i].correct_answer)
    //         correctAnswers.push(data[i].correct_answer)

    
    //         data[i].options = options_list
    //     }

    // }
    // console.log("data: ", data)


    console.log('data received from App component: ', data)

    const  questElement = data.map((item,index) => 
            // console.log("hi")
            // item.incorrect_answers.push(item.correct_answer)
            (

                <Questions
                    key = {index}
                    id = {index}
                    question_num = {index}
                    question = {item.question}
                    incorrect_answers = {item.incorrect_answers}
                    correct_answer = {item.correct_answer}

                    options = {item.options}
                    showAnswer = {answerMode}
                    answersGiven = {answersGiven}
                    // addScore = {addScore}
                    
   
                />
                    
                )
            
            )

    function submit(str){

        console.log('submit btn clicked!! ', str)
        if (str === "Submit"){
            answerModeControl(true)
            console.log(' props.correctAnswers.length: ', props.correctAnswers.length, (Object.keys(optionsSelected).length))
    
            if ((Object.keys(optionsSelected).length) === props.correctAnswers.length){
                console.log('logic ran!')
    
                for (let j = 0; j < Object.keys(optionsSelected).length;j++){
                    console.log(optionsSelected[j], props.correctAnswers[j])
    
                    if(optionsSelected[j] === props.correctAnswers[j]){
                        setScore(oldScore => oldScore + 1)
                    }
               
    
                }
                console.log('final score:', score)
    
            } 
        }else{
            answerModeControl(false)
            setScore(0)
            props.reloadApp()
            // console.log()
        }
        

     
    

    }

    const buttonText = !answerMode ? "Submit" : "New Quiz"
    // const buttonText = "Submit"

    return (
        <div className = "Form">
            {questElement}
            <div className = "submit_btn">
                <button className = "submit_btn" onClick = {() => submit(buttonText)}> {buttonText} </button>
         

            </div>
            <Score 
            score = {score}
            correctAnswers = {props.correctAnswers}
            optionsSelected = {optionsSelected}
            />
          
           
        </div>
    )
}