import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
             <Navbar  bg="dark" variant="dark">
             <Navbar.Brand style={{padding:"10px"}} href="#home">Covid 19</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Link className="nav-link" to="/india">India</Link>
                        <Link className="nav-link" to="/world">World</Link>
            </Nav>
            </Navbar>
           </div>



        )
    }
}
export default Header;
