import React, {useState} from 'react'
import {  Header, Dropdown, Segment, Divider } from 'semantic-ui-react'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
// import {Frame} from 'framer'


export default function Home() {
  



  const [selectedLanguage, setSelectedLanguage] = useState('')
  // const [dropdownText, setDropdownText] = useState('Select Language')
  // const [sidebarVisi, setSidebarVisi] = useState(false)
  const welcomeLang = '“Make it work, make it right, make it fast.” – Kent Beck'
  
  const languageOptions = [
    {key: 'Uyghur', text: 'Uyghur', value: 'Uyghur'},
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'German', text: 'German', value: 'German' }

  ]
  
  // const handleNameMouseOver = (evt) => {
  //   switch (evt.target.innerHTML) {
  //     case 'Guligena Aierken':
  //       evt.target.innerHTML = '古丽格娜艾尔肯'
  //       break;
  //     case '古丽格娜艾尔肯':
  //       evt.target.innerHTML = 'Gülginä Ärkin'
  //       break;
  //     case 'Gülginä Ärkin':
  //       evt.target.innerHTML = 'گۈلگىنە ئەركىن'
  //       break;
  //     default:
  //       evt.target.innerHTML = 'Guligena Aierken'
  //       break;
  //   }
  // }  

  // const handleTitleMouseOver = (evt) => {
  //   switch (evt.target.innerHTML) {
  //     case 'Full Stack Web Developer | Software Engineer':
  //       evt.target.innerHTML = '软件工程师'
  //       break;
  //     case '软件工程师':
  //       evt.target.innerHTML = 'Softwareentwickler'
  //       break;
  //     case 'Softwareentwickler':
  //       evt.target.innerHTML = 'يۇمشاق دېتال ئېنژېنېرى'
  //       break;
  //     default:
  //       evt.target.innerHTML = 'Full Stack Web Developer | Software Engineer'
  //       break;
  //   }
  // }

  const changeWelcomeLang = () => {
      switch (selectedLanguage) {
        case 'Uyghur':
           return '“.قىلىڭ، توغرا قىلىڭ ، تېز قىلىڭ“'
        case 'Chinese':
           return '"使其运行并运行得对且运行得快。" 肯特贝克'
        case 'German': 
           return '“Lass es funktionieren, mach es richtig, mach es schnell.” – Kent Beck '
        case 'English':
           return '“Make it work, make it right, make it fast.” – Kent Beck'
        default:
           return '“Make it work, make it right, make it fast.” – Kent Beck'
       
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
               
                setSelectedLanguage(evt.target.innerHTML)
                // setDropdownText(evt.target.innerHTML)
              }
              }
              button
              className='icon'
              
              icon='world'
              options={languageOptions}
              value={selectedLanguage}
                      />
           <Segment.Group textAlign='center'>
            <Segment basic style={{'background-color': '#00468b'}}>
              
              <Header textAlign='center' className="home my name">{selectedLanguage === ''? welcomeLang : changeWelcomeLang()}</Header>
              
            </Segment>

          <Divider id="about" horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip', "margin": '40px'}}>About Me</Header></Divider>

            <Segment className='about me section for animation' basic style={{'background-color': '#00468b', 'margin': '40px'}}>
                <About/>
            </Segment>

            <Divider id='projects' horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip', "margin": '40px'}}>My Technical Projects</Header></Divider>
            <Segment textAlign='center' basic style={{'background-color': '#00468b', 'margin': '40px'}}>
                <Projects/>
            </Segment>

            <Divider id='contacts' horizontal><Header as='h3' style={{'font-family': "'Montserrat', sans-serif", color: 'papayawhip', "margin": '40px'}}>Stay In Touch</Header></Divider>
            <Segment  basic textAlign='center' style={{'background-color': '#00468b'}} >
                <Contacts/>
            </Segment>
          </Segment.Group>
           
           
          
        </React.Fragment>
    )
}
