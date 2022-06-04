import React from 'react'

export default function Questions(props) {


    console.log(`Rendering question:  ${props.question_num}`)
    console.log("incorrect_answers: ",props.incorrect_answers)

    console.log("correct_answer: ",props.correct_answer)

    const [selected, setSelected] = React.useState()

    let options = props.incorrect_answers
    
    options.push(props.correct_answer)
    console.log('options: ', options)

    function optionClicked(){
        console.log('option clicked')
    }


    const optionsElement = options.map((item,index) =>
        (
            <li key = {index} className= "option" onClick = {optionClicked} >{item}</li>
        )

    )

    return(
        <div>
            <div className = "questions">
                <p>{props.question}</p>
            
            </div>
            <div className = "options">
                <ul className = "optionsElement">{optionsElement}</ul>    
            </div>
            <hr></hr>
        </div>
     

    )

}