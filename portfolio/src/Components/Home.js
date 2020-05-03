import React, {useState} from 'react'
import {  Header, Container, Dropdown } from 'semantic-ui-react'




export default function Home() {
  
 
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [dropdownText, setDropdownText] = useState('Select Language')
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

          <Container className="home">
            <Dropdown
              onChange={(evt) => {
                setSelectedLanguage(evt.target.childNodes[0].innerHTML)
                setDropdownText(evt.target.childNodes[0].innerHTML)
              }
              }
              button
              className='icon'
              floating
              labeled
              icon='world'
              options={languageOptions}
              text={dropdownText}
              value={selectedLanguage}
                      />
            <Header textAlign='center'>{selectedLanguage === ''? welcomeLang : changeWelcomeLang()}</Header>
            <Header  onMouseOver={handleNameMouseOver} textAlign='center' className="home my name">Guligena Aierken</Header>
            <Header  onMouseOver={handleTitleMouseOver} textAlign='center' className="home my job title ">Full Stack Web Developer | Software Engineer</Header>
          </Container> 
          
          
        </React.Fragment>
    )
}
