import React, {useState, useContext} from 'react'
import './Menu.css'

import { Link } from "react-router-dom";
import { ThemeContext } from '../../../Context/theme-context'

import {connect} from 'react-redux'
import {set_activeCategory} from '../../../actions/productsActions'

const Menu = ({ authenticated}) => {

    const [ModalState, setModalState] = useState(false)

    const ModalStateHandler = (e) =>{
        setModalState(!ModalState)
    }
    const closeModalHandler = () =>{
        setModalState(false)

    }

    const theme = useContext(ThemeContext)
    return(
        <div style={{ color:theme.foreground }} className="Menu">

            <div className={`Menu_Wrapper ${ModalState ? 'MenuActive' :''}`}>

            <div onClick={ModalStateHandler} className='Menu_Icon'>
                <div style={{ backgroundColor : theme.foreground }} className="Menu_Icon_Item"></div>
                <div style={{ backgroundColor : theme.foreground }} className="Menu_Icon_Item"></div>
                <div style={{ backgroundColor : theme.foreground }} className="Menu_Icon_Item"></div>
            </div>

                <div className='Menu_List_Wrapper'>
                    <ul style={{ color : theme.foreground }} className="Menu_List">
                        <li onClick={closeModalHandler} className="Menu_List_Item Menu_List_Item-onlymobile"><Link to='/'>Home</Link></li>
                        <li onClick={closeModalHandler} className="Menu_List_Item "><Link to='/products'>Products</Link></li>
                        
                        {authenticated ? 
                        <li onClick={closeModalHandler} className="Menu_List_Item "><Link to='/account'>Account</Link></li>
                        : <li onClick={closeModalHandler} className="Menu_List_Item "><Link to='/Auth'>Sign In/Sign up</Link></li>
                        }

                    </ul>
                </div>  
                </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    authenticated : state.user.authenticated,
  });




export default connect(mapStateToProps, {set_activeCategory})(Menu)