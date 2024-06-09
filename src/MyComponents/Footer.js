import React from 'react'
import './footer.css'

const Footer = () => {
  let footerStyle = {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  }

  return (
    <footer className='bg-dark text-light py-1' style={footerStyle}>
      <p className='text-center'> Copyright &copy; MyTodosList.com </p>
    </footer>
  )
}

export default Footer
