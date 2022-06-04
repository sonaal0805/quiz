import React from 'react'

export default function Option(props){

    // console.log("props.isSelected: ",props.isSelected)

    const [select, setSelect] = React.useState(props.isSelected)

    const isCorrectAnswer = props.data === props.correctAnswer ? true : false 

  
    let classname = props.isSelected ? "option_selected": "option" 

    if (props.showAnswer & isCorrectAnswer){
        classname = "right_answer"

    } else if(props.showAnswer & !isCorrectAnswer & props.isSelected){
        classname = "wrong_answer"
    } else if (props.showAnswer){
        classname = "optionsShowAnswer"
    }



    return(
        <div>

            <li className= {classname} onClick = {() => props.handleClick(props.id, props.data)} >{props.data}</li>    
    
          
        </div>
       
    )
}