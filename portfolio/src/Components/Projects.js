import React from 'react'
import { Item, ImageGroup, Image } from 'semantic-ui-react'
import therappoint from './therappoint.png'
import shop from './shop.png'
import nyc from './nyc.png'

export default function Projects() {
    
   let items = [
       { 
        childKey: 0,
        image: therappoint,
        header: 'Therappoint',
        description: 'Tools used:',
        meta: 'Appointment scheduling app developed especially for early intervention service agencies',
        extra: <ImageGroup size='mini'>
                    <Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-512.png'/>
                    <Image src='https://cdn.iconscout.com/icon/free/png-64/javascript-19-555546.png'/>
                    <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'/>
                    <Image src='https://img.icons8.com/ios/500/redux.png'/>
                    <Image src='https://www.svgrepo.com/show/58911/html.svg'/>
                    <Image src='https://www.vippng.com/png/detail/231-2318919_css-logo-png-css-black-icon-svg.png'/>
               </ImageGroup>},
       { 
        childKey: 1,
        image: shop,
        header: 'Flatiron Baby Shop',
        description: 'Tools used:',
        meta: 'E-commerce web-app designed for baby-products',
        extra: <ImageGroup size='mini'>
                    <Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-512.png'/>
                    <Image src='https://cdn.iconscout.com/icon/free/png-64/javascript-19-555546.png'/>
                    <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png'/>
                    <Image src='https://www.svgrepo.com/show/58911/html.svg'/>
                    <Image src='https://www.vippng.com/png/detail/231-2318919_css-logo-png-css-black-icon-svg.png'/>
               </ImageGroup>,},
       { 
        childKey: 2,
        image: nyc,
        header: 'NYC Museums',
        description: 'Tools used:',
        meta: 'Yelp-like web-app for museums in NYC where users can find and review museums',
        extra: <ImageGroup size='mini'>
                    <Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-512.png'/>
                    <Image src='https://cdn.iconscout.com/icon/free/png-64/javascript-19-555546.png'/>
                    <Image src='https://www.svgrepo.com/show/58911/html.svg'/>
                    <Image src='https://www.vippng.com/png/detail/231-2318919_css-logo-png-css-black-icon-svg.png'/>
               </ImageGroup>}
   ]
   const handleClick = () => {
      console.log('worked')
   }
    return (
        <React.Fragment>
            <Item.Group onClick={handleClick} unstackable relaxed link divided items={items} />
        </React.Fragment>
    )
}
