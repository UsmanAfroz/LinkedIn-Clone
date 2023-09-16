import React from 'react'

function InputOption({Icon, title, color}) {

  return (
    <div className='inputOptions'>
    <Icon style={{color:color}} />
    <h4>{title}</h4>
      
    </div>
  )
}

export default InputOption
