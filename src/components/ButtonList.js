import React from 'react'
import Button from './Button'
import {BUTTON_LIST} from './../utils/Constants'

const ButtonList = () => {
  return (
    <div className='flex overflow-x-hidden'>
       { BUTTON_LIST.map((name,index) => <Button key={index} name = {name}/>) }
    </div>
  )
}

export default ButtonList