import React from "react";


export default function Home(props){
    console.log("Rendering Home page..")
    return(
        <div className = "header">
            <div className = "blob-right"></div>
            <h1> Quizzical</h1>
            <button className = "start-quiz" onClick = {props.homebutton}> Start Quiz</button> 
       
        </div>

    )

}