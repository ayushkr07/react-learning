import React from 'react'

function Footer() {
  let bgStyle={
    position: "relative",
    top: "25vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-3' style={bgStyle}>
      <p className="text-center">
        Copyright &copy; MyTodolist.com
      </p>
    </footer>
  )
}

export default Footer