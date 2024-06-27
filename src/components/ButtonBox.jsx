import React from 'react'
import { Button } from './Button'

export const ButtonBox = () => {
    return (
        <div className='button-box'>
            <div className='row'>
                <Button label='AC' />
                <Button label='()' />
                <Button label='%' />
                <Button label='&divide;' />
            </div>
            <div className='row'>
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button label='&times;' className='gray-button' />
            </div>
            <div className='row'>
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button label='-' className='gray-button' />
            </div>
            <div className='row'>
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button label='+' className='gray-button' />
            </div>
            <div className='row'>
                <Button label='0' />
                <Button label='.' />
                <Button label='&larr;' />
                <Button label='=' className='yellow-button' />
            </div>
        </div>
    )
}
