import React from 'react'
import { Image } from 'semantic-ui-react'

export default function ImgComp({ src }) {
    
    let imgStyles = {
        width: 100+'%',
        height: 'auto'
    }
    
    return (
        <React.Fragment>
            <Image src={src} alt='slide-img' style={imgStyles}/>
        </React.Fragment>
    )
}
