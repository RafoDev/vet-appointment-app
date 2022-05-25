import React from 'react'

const Footer = ({ footerCredits }) => {
    const { author, year } = footerCredits;
    return (
        <footer className='container text-center text-white bg-dark bg-gradient min-vw-100 p-3 ms-0 me-0 '>
            Hecho por <span className='fw-bold text-light'>{author}</span> 👽 | {year} 
        </footer>
    )
}

export default Footer