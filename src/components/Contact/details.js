import React from 'react'
import { Component } from "react"
import Query11 from './query1'
import Query22 from './query2'
import Query33 from './query3'
import Query44 from './query4'
import '../../assets/css/mystles.css'
import '../../assets/css/style.css'

class Detailsform extends Component {
    constructor(props){
        super(props)
    this.state= {
        displayForm:"general"
    }
    this.generalform= this.generalform.bind(this);
    this.callbackform = this.callbackform.bind(this);
    this.quoteform = this.quoteform.bind(this);
    this.careersform = this.careersform.bind(this);
    }
    
    renderButton1=()=>{
        const {displayForm}=this.state
        switch(true) {
            case displayForm==="general":   return <Query11/>;
            case displayForm==="callback":   return <Query22/>;
            case displayForm==="quote": return <Query33/>;
            case displayForm==="careers":  return <Query44/>;    
            default:      return <Query11/>
          }
        }

    generalform(){
        this.setState({displayForm:"general"})
        }
    
    callbackform(){
        this.setState({displayForm:"callback"})
        }

    quoteform(){
        this.setState({displayForm:"quote"})
        }

    careersform(){
        this.setState({displayForm:"careers"})
        }

     
    render(){
     
    return (
        <div class="row justify-content-center mt-4 align-items-center">
            <p class="col-3 links btn " onClick={this.generalform}>General Inquires</p>
            <p class="col-3 links btn" onClick={this.callbackform}>Callback Form</p>
			<p class="col-3 links btn " onClick={this.quoteform}>Quote Form</p>
            <p class="col-3 links btn " onClick={this.careersform}>Careers Form</p>                      
            <div class="card shadow-2-strong card-registration m-2 bd">
                <div class="card-body p-5 p-md-5">
                    {this.renderButton1()}               
                </div>
            
            </div>
        </div>

)
}
}

export default Detailsform