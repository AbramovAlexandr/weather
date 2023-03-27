import React from 'react'
import './Header.css'

export const Header = () => {
    // const [kindCel, setKindTem] = React.useState('cel')
    // const [kindFah, setKindTe] = React.useState('fah')
    // const [kindKel, setKindTemp] = React.useState('kel')
  return (
    <div className='header'>
        <h1>Good Weather</h1>

        <div className='isTemp'>
            <button>C</button>
            <button>F</button>
            <button>K</button>
        </div>

        <h3>Log out</h3>
    </div>
  )
}