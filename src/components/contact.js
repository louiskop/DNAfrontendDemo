import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeNav} from '../actions/universalActions'
import '../css/contact.css'
import Plant from '../images/Plant.jpg'

class Contact extends Component{
    componentDidMount = () =>{
        this.props.changeNav()
    }
    componentWillUnmount = () =>{
        this.props.changeNav()
    }
    render(){
        return(
            <div className="contact-component">
                <h1>Kontak ons</h1>
                <hr/>
                <div className="formandpic">
                    
                    <img src={ Plant } alt="Dna kompos contact phone number email bestel kompos order compost"/>
                </div>
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