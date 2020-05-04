import React, {useState} from 'react'
import {  Header, Dropdown, Image, Segment, Divider } from 'semantic-ui-react'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'



export default function Home() {
  
 
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [dropdownText, setDropdownText] = useState('Select Language')
  const [sidebarVisi, setSidebarVisi] = useState(false)
  const welcomeLang = "Welcome to my website!"
  
  const languageOptions = [
    {key: 'Uyghur', text: 'Uyghur', value: 'Uyghur'},
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'German', text: 'German', value: 'German' }

  ]
  
  const handleNameMouseOver = (evt) => {
    switch (evt.target.innerHTML) {
      case 'Guligena Aierken':
        evt.target.innerHTML = '古丽格娜艾尔肯'
        break;
      case '古丽格娜艾尔肯':
        evt.target.innerHTML = 'Gülginä Ärkin'
        break;
      case 'Gülginä Ärkin':
        evt.target.innerHTML = 'گۈلگىنە ئەركىن'
        break;
      default:
        evt.target.innerHTML = 'Guligena Aierken'
        break;
    }
  }  

  const handleTitleMouseOver = (evt) => {
    switch (evt.target.innerHTML) {
      case 'Full Stack Web Developer | Software Engineer':
        evt.target.innerHTML = '软件工程师'
        break;
      case '软件工程师':
        evt.target.innerHTML = 'Softwareentwickler'
        break;
      case 'Softwareentwickler':
        evt.target.innerHTML = 'يۇمشاق دېتال ئېنژېنېرى'
        break;
      default:
        evt.target.innerHTML = 'Full Stack Web Developer | Software Engineer'
        break;
    }
  }

  const changeWelcomeLang = () => {
      switch (selectedLanguage) {
        case 'Uyghur':
           return 'تور بېتىمگە خۇش كەپسىز'
        case 'Chinese':
           return '欢迎来到我的主页'
        case 'German': 
           return 'HERZLICH WILLKOMMEN AUF MEINER WEBSITE'
        case 'English':
           return 'Welcome to my website'
        default:
         break
      }
  }
  
  
  return (
    
      
        <React.Fragment>
            <Dropdown
              style={{
                position: 'absolute',
                top: '10px',
                right: '16px',
                'background-color': '#89cff0',
                'font-family': "'Montserrat', sans-serif",
                color: 'white'
                }}
              onChange={(evt) => {
                setSelectedLanguage(evt.target.childNodes[0].innerHTML)
                setDropdownText(evt.target.childNodes[0].innerHTML)
              }
              }
              button
              className='icon'
              labeled
              icon='world'
              options={languageOptions}
              text={dropdownText}
              value={selectedLanguage}
                      />
            <Image style={{width: '1280px', height:'500px', 'object-fit': 'cover', position: 'relative', 'margin-top': '40px'}}src='https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg'/>
         
            <Segment basic style={{'background-color': '#00468b'}}>
                <Header  onMouseOver={handleNameMouseOver} textAlign='center' className="home my name">{selectedLanguage === ''? welcomeLang : changeWelcomeLang()}</Header>
                <Header  onMouseOver={handleTitleMouseOver} textAlign='center' className="home my job title ">Full Stack Web Developer | Software Engineer</Header>
            </Segment>

            <Divider  horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip'}}>About Me</Header></Divider>

            <Segment basic style={{'background-color': '#00468b'}}>
                <About/>
            </Segment>

            <Divider  horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip'}}>My Projects</Header></Divider>
            <Segment basic style={{'background-color': '#00468b'}}>
                <Projects/>
            </Segment>

            <Divider  horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip'}}style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip'}}>Stay Connected</Header></Divider>
            <Segment  basic textAlign='center' style={{'background-color': '#00468b'}} >
                <Contacts/>
            </Segment>
           
           
          
        </React.Fragment>
    )
}
