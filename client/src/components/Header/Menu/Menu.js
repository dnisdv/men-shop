import React, {useState, useContext} from 'react'
import './Menu.css'

import { Link } from "react-router-dom";
import { ThemeContext } from '../../../Context/theme-context'

const Menu = () => {

    const [ModalState, setModalState] = useState(false)

    const ModalStateHandler = (e) =>{
        setModalState(!ModalState)
    }
    const theme = useContext(ThemeContext)

    return(
        <div style={{ color:theme.foreground }} className="Menu">
            <div onClick={ModalStateHandler} className='Menu_Icon'>
                <div className="Menu_Icon_Item"></div>
                <div className="Menu_Icon_Item"></div>
                <div className="Menu_Icon_Item"></div>
            </div>

                <div className={`Menu_Wrapper ${ModalState ? 'MenuActive' :''}`}>
                    <ul className="Menu_List">
                        <li className="Menu_List_Item Menu_List_Item-Mobile"><Link to='/'>Home</Link></li>
                        <li className="Menu_List_Item Menu_List_Item-Desktop"><Link to='/Products'>Products</Link></li>
                        <li className="Menu_List_Item Menu_List_Item-Mobile"><Link to='/Auth'>Sign In/Sign up</Link></li>
                        <li className="Menu_List_Item Menu_List_Item-Mobile">Search</li>
                        <li className="Menu_List_Item Menu_List_Item-Desktop"><Link to='/Auth'>Account</Link></li>
                    </ul>
                </div>  
        </div>
    )
}

export default Menu