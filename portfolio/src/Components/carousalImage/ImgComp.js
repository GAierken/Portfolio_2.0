import React from 'react'
import { Image } from 'semantic-ui-react'

export default function ImgComp({ src }) {
    
    let imgStyles = {
        width: 100+'%',
        height: 'auto'
    }
    
    const handleClick = (evt) => {
        if(evt.target.src.includes('therappoint')){
            window.open('https://www.youtube.com/watch?v=QZEsGHZpaoo&feature=youtu.be')
        }else if(evt.target.src.includes('nyc')){
            window.open('https://www.youtube.com/watch?v=1PeeuhozAIo&feature=youtu.be')
        }else if(evt.target.src.includes('shop')){
            window.open('https://www.youtube.com/watch?v=7cNyoHjJjiw&feature=youtu.be')
        }
    }
    
    return (
        <React.Fragment>
            <Image className='projects carousel' onClick={handleClick} src={src} alt='slide-img' style={imgStyles}/>
        </React.Fragment>
    )
}
