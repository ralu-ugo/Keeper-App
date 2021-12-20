import React from 'react'




const Note = (props) => {
    return (
        <div className = 'note'>
            <h1>{props.title}<hr/> </h1> 
            <p>{props.content.substring(0, 50)} </p>
        </div>
    )
}



export default Note
