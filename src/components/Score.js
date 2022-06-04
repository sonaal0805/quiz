import React from "react"

export default function Score(props){
    console.log('score: ',props.score)
  

    return(

        <div className = "score">
            <h4> Your score is {props.score} out of 5</h4>
        </div>
    )

}