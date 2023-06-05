import React from 'react'
import useScreen from '../useScreen'

export default function Helper() {
    const screenSize=useScreen();
  return (
    <div>
        <h1>screen size</h1>
        <h2>we are in {screenSize} screen</h2>
    </div>
  )
}
