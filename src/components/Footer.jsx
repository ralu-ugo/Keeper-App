import React from 'react'



let date = new Date
let year = date.getFullYear()

const Footer = () => {
    return (
        <footer>
            <p>This product is covered by copyright &copy;{year}</p>
        </footer>

    )
}

export default Footer
