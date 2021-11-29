import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import './Loading.scss'
import '../index.scss'

function Loading({ color, className }) {
  const selectedColor = color === 'white' ? '#e0fbfc' : '#253237'

  return (
    <Loader
      className={`loading-class ${className ? className : ''}`}
      type="Oval"
      color={selectedColor}
      height={100}
      width={100}
    />
  )
}

export default Loading
