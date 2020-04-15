import React from 'react'
import { Item } from 'semantic-ui-react'
import therappoint from './therappoint.png'
import shop from './shop.png'
import nyc from './nyc.png'

export default function Projects() {
    
   let items = [
       { 
        childKey: 0,
        image: therappoint,
        header: 'Therappoint',
        description: 'Description',
        meta: 'Appointment scheduling app developed especially for early intervention service agencies',
        extra: 'Extra',},
       { 
        childKey: 1,
        image: shop,
        header: 'Flatiron Baby Shop',
        description: 'Description',
        meta: 'E-commerce web-app designed for baby-products',
        extra: 'Extra',},
       { 
        childKey: 2,
        image: nyc,
        header: 'NYC Museums',
        description: 'Description',
        meta: 'Yelp-like web-app for museums in NYC where users can find and review museums',
        extra: 'Extra',}
   ]
   console.log(therappoint)
    return (
        <React.Fragment>
            <Item.Group items={items}/>
        </React.Fragment>
    )
}
