import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Button from './Button'
import notes from '../../src/note'

console.log (notes)
const App = (props) => {
    return (
        <div>
           <Header /> 
            {notes.map((item) => {
                return (
                <Note title={item.title} content={item.content} />
                )            
            })}
           <Button />
           <Footer /> 

        </div>
    )
}

export default App
