import React from 'react'

export default function Option(props){

    console.log("props.isSelected: ",props.isSelected)

    const [select, setSelect] = React.useState(props.isSelected)

    const isCorrectAnswer = props.data === props.correctAnswer ? true : false 

    // console.log('isCorrectAnswer: ',isCorrectAnswer, props.data, props.correctAnswer)
    
    // setSelect(oldSelect => !oldSelect)
    // console.log('props: ',props)


    // const optionsElement = props.data.map((item,index) =>
    //     (
    //         <li key = {index} className= "option" onClick = {props.handleClick} >{item}</li>
    //     )

    // )
    // if (props.showAnswer){
    //     props.isSelected = false
    // }
    let classname = props.isSelected ? "option_selected": "option" 

    if (props.showAnswer & isCorrectAnswer){
        classname = "right_answer"
        // props.addScore()
    } else if(props.showAnswer & !isCorrectAnswer & props.isSelected){
        classname = "wrong_answer"
    } else if (props.showAnswer){
        classname = "optionsShowAnswer"
    }

    // classname = props.showAnswer ? "options_answer" : "option"

    // classname = props.showAnswer

    return(
        <div>

            <li className= {classname} onClick = {() => props.handleClick(props.id)} >{props.data}</li>    
    
          
        </div>
       
    )
}