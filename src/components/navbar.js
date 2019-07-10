import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeLanguage } from '../actions/universalActions'
import '../css/navbar.css'

class NavBar extends Component{
    handleLangChange = () =>{
        this.props.changeLanguage()
    }
    
    render(){
        let langArray = this.props.afr ? ["Kontak ons","Inligting"] : ["Contact us", "Information"]
        return(
            <nav className={ this.props.navClass }>
                <ul>
                    <li><NavLink to="/" >DNA</NavLink></li>
                    <li><NavLink to="/contact" >{ langArray[0] }</NavLink></li>
                    <li><NavLink to="/info" >{ langArray[1] }</NavLink></li>
                </ul>
                <button onClick = { this.handleLangChange } ></button>
            </nav>
        )
    }
    
}

const mapStateToProps = (state,ownprops) =>{
    return{
        navClass: state.navClass,
        afr: state.afr
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        changeLanguage: () => { dispatch(changeLanguage()) }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
