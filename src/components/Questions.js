import React from 'react'
import Option from './Option'

export default function Questions(props) {

    let [selected, setSelected] = React.useState([false, false, false, false])
    let [showAnswer, showAnswerControl] = React.useState(props.showAnswer)

    let options = props.options
    
    console.log('options: ', options)

    function optionClicked(index){
        console.log(`option ${index} clicked`)
        setSelected(oldSelected =>{
            let newSelected = []
            for (let i = 0;i<oldSelected.length;i++){
              if (i === index){
                  newSelected.push(!oldSelected[i])
              }else{
                newSelected.push(false)

              }  
            }
            return(newSelected)    

        })
        console.log(selected)
        
    }



    const optionsElement = options.map((item, index)=>(

            <Option 
                key = {index} 
                id = {index} 
                isSelected = {selected[index]} 
                // classname = "option"
                handleClick = {optionClicked}
                data = {item}
                correctAnswer = {props.correct_answer}
                showAnswer = {props.showAnswer}
                addScore = {props.addScore}
           />   
 
        
        ))

    return(
        <div>
            <div className = "questions">
                <p>{props.question}</p>
            
            </div>
            <div className = "options">
                <ul className = "optionsElement_ul">
                    
                    
                    {optionsElement}
                    
                    
                    
                    </ul>    
            </div>
            <hr></hr>
        </div>
     

    )

}