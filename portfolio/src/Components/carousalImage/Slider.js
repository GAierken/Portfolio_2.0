import React, { useState } from 'react'
import './slider.scss'
import shop from '../shop.png'
import nyc from '../nyc.png'
import therappoint from '../therappoint.png'
// import dict from '../dict.png'
import ImgComp from './ImgComp'
import { Icon } from 'semantic-ui-react'



export default function Slider() {
    
    let sliderArr = [
        <ImgComp src={therappoint} />,
        <ImgComp src={nyc}/>,
        <ImgComp src={shop}/>,
        // <ImgComp src={dict}/>
    ]

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0? setX(-100*(sliderArr.length - 1)) : setX(x + 100)
    }

    const goRight = () => {
        (x === -100*(sliderArr.length - 1))? setX(0) :  setX(x - 100)  
    }
    
    
    return (
        <div className='slider'>
            {
                sliderArr.map((e, index) => {
                    return (
                        <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                            {e}
                        </div>
                    )
                }
                )
            }
            <button id="goLeft" onClick={goLeft}><Icon name='chevron left'/></button>
            <button id="goRight" onClick={goRight}><Icon name='chevron right'/></button>
        </div>
    )
}
