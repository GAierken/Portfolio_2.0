import React, {useState} from 'react'
import { Image, Dimmer, Header, List} from 'semantic-ui-react'

export default function ImgComp({ src }) {
    
    const textStyle = {
        'font-family': "'Montserrat', sans-serif"
    }

    const [active, setActive] = useState(false)
    const [projectTitle, setProjectTitle] = useState('no info')
    const [projectDes, setProjectDes] = useState('no info')
    const [projectDesList, setList] = useState([])


    const content = (
        <div style={textStyle}>
            <Header style={textStyle} as='h2' inverted>{projectTitle}</Header>
            <Header style={textStyle} as='h4' inverted>{projectDes}</Header>
            <List as='ol' inverted>
              {projectDesList.map((e) => {
                  return <List.Item as='li' value='*'>{e}</List.Item>
              }
              )}
            </List>
        </div>
      )

      
      
    
    const handleClick = () => {
        if(src.includes('therappoint')){
            window.open('https://www.youtube.com/watch?v=QZEsGHZpaoo&feature=youtu.be')
        }else if(src.includes('nyc')){
            window.open('https://www.youtube.com/watch?v=1PeeuhozAIo&feature=youtu.be')
        }else if(src.includes('shop')){
            window.open('https://www.youtube.com/watch?v=7cNyoHjJjiw&feature=youtu.be')
        }
    }
    
    const handleShow = () => {
        setActive(true)
        if(src.includes('therappoint')){
            setProjectTitle('Therappoint Demo')
            setProjectDes('Appointment scheduling app developed especially for therapy services')
            setList([
                'Implemented frontend with React (Redux, Thunk, Datepicker, Google Map, Geocode)',
                'Utilized JSON Web Tokens and localStorage to store encrypted user information client-side',
                'Styled with Semantic UI and custom CSS to refine client-side interaction and user experience',
                'Built a Ruby on Rails API backend powered by PostgreSQL using self referential relationship'
            ])
        }else if(src.includes('nyc')){
            setProjectTitle('Museums in NYC Demo')
            setProjectDes('Review app for museums in NYC')
            setList([
                'Architected frontend with Javascript using EventListener',
                'Created improvements user interface with custom CSS and HTML',
                'Generated backend RESTful APIs service with ROR and SQL for database management',
                'Utilized color palette to improve UX design'
            ])
        }else if(src.includes('shop')){
            setProjectTitle('Flatiron Baby Shopping Demo')
            setProjectDes('E-commerce web-app designed for baby-products')
            setList([
                'Developed a React frontend and maintain user state utilizing JWT and localStorage between logins',
                'Created customized layout and styling using CSS and HTML',
                'Designed ROR framework to persist data in backend using SQL'
            ])
        }
    }

    const handleHide = () => {
        setActive(false)
    }
    
    
    return (
        <React.Fragment>
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={handleShow}
                onMouseLeave={handleHide}
                src={src}
                onClick = {handleClick}
            />
        </React.Fragment>
    )
}
