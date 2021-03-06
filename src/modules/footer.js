import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {Navbar,Nav, Glyphicon} from 'react-bootstrap'
import './footer.css';


const Footer = () => 
(
  <footer className="footer">     
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
        
              <Glyphicon className="copyright" glyph="glyphicon glyphicon-copyright-mark" /> 2017 Loncherita - Group Red
            
          </Nav>
          <Nav pullRight>
          <SocialIcon url="http://facebook.com" />
          <SocialIcon url="http://twitter.com" />
          <SocialIcon url="http://youtube.com" />
          <SocialIcon url="https://www.linkedin.com" />
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </footer>
)
export default Footer;