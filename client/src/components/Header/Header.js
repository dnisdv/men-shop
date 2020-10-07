import React,{useContext, useState, useEffect} from 'react'
import './Header.css'
import Logo from '../Logo/Logo'

import Menu from './Menu/Menu'
import MenuCart from './MenuCart/MenuCart'

import { Link } from "react-router-dom";
import { ThemeContext } from '../../Context/theme-context'

const Header = ({headerRef}) => {
    const theme = useContext(ThemeContext)

    const [ModalState, setModalState] = useState(false)

    const ModalStateHandler = (e) =>{
        setModalState(!ModalState)
    }
    const closeModalHandler = () =>{
        setModalState(false)

    }
    useEffect(() => {
        if(ModalState){
           document.body.style.overflow = 'hidden'
        }
        return( () => {
            document.body.style.overflow = 'auto'
        })
    }, [ModalState])

    return(
        <div ref={headerRef} className='Header'>
            <Menu ModalStateHandler={ModalStateHandler} closeModalHandler={closeModalHandler} ModalState={ModalState}  />
                <Link style={{color:theme.foreground}} className='Header_Logo_Link' to='/'><Logo fill={theme.background === "#ffffff" &&  ModalState ? theme.background : theme.foreground} /></Link>
            <MenuCart />   
        </div>  
    )
}

export default Header
