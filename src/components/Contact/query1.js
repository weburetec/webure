import React from 'react'
import { Component, useEffect } from "react"
import '../../assets/css/contactForm.css'
import axios from 'axios'



class Query11 extends Component{
    constructor(props){
        super(props)
        this.state= {
            Fullname:"",
            Email:"",
            PhoneNumber:"",
            WebsiteName:"",
            Comment:"",
            submit:false
        }
    }
    handleName=(e)=>{
        this.setState({Fullname:e.target.value})
    }

    handleEmail=(e)=>{
        this.setState({Email:e.target.value})
    }

    handlePhone=(e)=>{
        this.setState({PhoneNumber:e.target.value})
    }

    handleWebsiteName=(e)=>{
        this.setState({WebsiteName:e.target.value})
    }

    handleComment=(e)=>{
        this.setState({Comment:e.target.value})
    }


    handleForm=(e)=>{
        e.preventDefault();
        let data ={
            Fullname:this.state.Fullname,
            Email:this.state.Email,
            PhoneNumber:this.state.PhoneNumber,
            WebsiteName:this.state.WebsiteName,
            Comment:this.state.Comment
        }
        axios.post('http://localhost:8000/contact', data)
        .then(() => this.state= {
            Fullname:"",
            Email:"",
            PhoneNumber:"",
            WebsiteName:"",
            Comment:"",
            submit:false
        })
        .catch(err => console.error(err));  

    }  

    render(){
        const { Fullname, Email, Phone, WebsiteName,Comment } = this.state;
    return (    
            <form>  
                <div class="row">
                  <div class="col-12 mb-2 pb-1">                     
                      <input type="text" placeholder='Full Name' value={Fullname} onChange={this.handleName}/>                  
                  </div>
                  <div class="col-12 mb-2 pb-1">                      
                      <input type="email" placeholder='Email' value={Email} onChange={this.handleEmail} />                 
                  </div>
                  <div class="col-12 mb-2 pb-1">                    
                      <input type="tel" placeholder="Phone" value={Phone} onChange={this.handlePhone}/>                      
                  </div>
                  <div class="col-12 mb-2 pb-1">                     
                      <input type="text" placeholder="Website Name" value={WebsiteName} onChange={this.handleWebsiteName} />                      
                  </div>
                  <div class="col-12 mb-2 pb-1">                      
                      <input type="text" placeholder="Drop a Line" value={Comment} onChange={this.handleComment}/>
                  </div>

                </div>  
                <div class="d-flex justify-content-center">
                  <button type="button" onClick={this.handleForm} class="btn btn-warning">Send</button>
                </div>  
              </form>
    )
}
}
export default Query11