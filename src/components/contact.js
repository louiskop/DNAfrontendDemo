import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeNav} from '../actions/universalActions'
import '../css/contact.css'
import Ontmoet from '../images/Ontmoet.jpg'
import axios from 'axios'

class Contact extends Component{
    state = {
        name: null,
        email: null,
        number: null,
        mesg: null
    }
    
    componentDidMount = () =>{
        this.props.changeNav()
    }
    componentWillUnmount = () =>{
        this.props.changeNav()
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        // send the data in the state to the php api with axios 
        // confirmation that the order has been sent
        this.setState({
            name: "",
            email: "",
            number: "",
            mesg: ""
        })
    }

    render(){
        let langArray = this.props.afr? ["Kontak ons","Naam en van","E-pos","Kontak nommer","Bestelling"] : ["Contact us","Name and surname","E-mail","Contact Number","Order message"]
        return(
            <div className="contact-component">
                <div className="contact-text">
                <h1>{ langArray[0] }</h1>
                </div> 
                <form onSubmit={this.handleSubmit}>
                    <input placeholder={ langArray[1] } type="text" id="name"  onChange={this.handleChange} value={this.state.name} />
                    <input placeholder={ langArray[2] } type="text" id="email" onChange={this.handleChange} value={this.state.email} />
                    <input placeholder={ langArray[3] } type="text" id="number" onChange={this.handleChange} value={this.state.number} />
                    <textarea placeholder={ langArray[4] } id="mesg" onChange={this.handleChange} value={this.state.mesg} />
                    <button onClick={ this.handleSubmit } >Submit</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        afr: state.afr,
        navClass: state.navClass
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeNav: () => {dispatch(changeNav())}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Contact)