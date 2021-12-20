import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Button from './Button'


const App = (props) => {
    return (
        <div>
           <Header /> 
           <Note title= 'Ralu' content= 'Just a soft guy' />
           <Note title= 'Jossy' content= 'The main mvp' />
           <Note title= 'Kevin De Bruyne' content= 'Unstoppable force of nature' />
           <Button />
           <Footer /> 

        </div>
    )
}

export default App
