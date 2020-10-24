import React, {Component} from 'react';
import {Card,Button,Badge} from 'react-bootstrap';
import States from './States';
import axiox from 'axios';

class India extends Component{
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        axiox.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data});
        });
    }
    render(){
        
        return(

            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png"></img>
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card style={{ width: '18rem',boxShadow: "9px 9px 9px #9E9E9E",backgroundColor: 'BLUE' , borderRadius: '10px' }}>
                            <Card.Body className="text-center" style={{color: 'white'}}>
                                <Card.Title>TOTAL CASES</Card.Title>
                                 <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                               
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                        <Card style={{ width: '18rem',boxShadow: "9px 9px 9px #9E9E9E",backgroundColor: 'yellow' , borderRadius: '10px'}}>
                            <Card.Body className="text-center" >
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                        <Card style={{ width: '18rem',boxShadow: "9px 9px 9px #9E9E9E",backgroundColor: 'green', borderRadius: '10px' }}>
                            <Card.Body className="text-center" style={{color: 'white'}}>
                                <Card.Title>RECOVERED</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                               
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                        <Card style={{ width: '18rem',boxShadow: "9px 9px 9px #9E9E9E",backgroundColor: '#F32013', borderRadius: '10px' }}>
                            <Card.Body className="text-center" style={{color: 'white'}}>
                                <Card.Title>DEATHS</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                                
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>


                        <div className="col-md-12" style={{padding:"20px"}}>
                            <States/>
                            
                            
                        </div>

                      
                    </div>
                </div>
            </div>
        )
    }
}
export default India;