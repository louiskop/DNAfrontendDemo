import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Grond from '../images/Gronde.png'
import '../css/home.css'

class Home extends Component{

    render(){
        let langArray = this.props.afr ? ["BESTEL", "DNA Kompos se gebied","PRYSE"] : ["ORDER","DNA Kompos location","PRICES"] 
        return(
            <div className="home-component">
            <div className="intro">
                
                <h1>DNA KOMPOS</h1>
                <Link to='/contact'><button>{ langArray[0] }</button></Link>
                <p>Rusfontein Plaas Malmesbury</p>
                {/* <div className="location">
                    <h3>{ langArray[1] }</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.64066958547!2d18.756507315565155!3d-33.42461598078144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzI4LjYiUyAxOMKwNDUnMzEuMyJF!5e1!3m2!1sen!2sza!4v1562412524560!5m2!1sen!2sza" width="200" height="150" frameborder="0"  allowfullscreen></iframe>
                    <p>-33.424857, 18.758791</p>
                </div> */}
            </div>
            <div className="more-intro">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque dicta necessitatibus, ipsam fuga iste officia, nesciunt repellendus deserunt maiores enim, a iure illum possimus numquam dignissimos porro est! Ipsam, error!</p>
                <button>{ langArray[2] }</button>
                <img src={Grond} alt="Compost south-africa Swartland Western Cape Kompos Dna kompos Buy"/>
            </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) =>{
    return{
        afr: state.afr
    }
}


export default connect(mapStateToProps) (Home)