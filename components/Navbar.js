import { Menu, Close } from '@material-ui/icons';
import { useRef, useEffect, useState } from 'react'

const navListLinks = ['home','services','technologies','projects','contact',]

const Navbar = () => {
    
    const listWrapperRef = useRef()
    const listRef = useRef()
    const [ navIsOpen, setNavIsOpen ] = useState(false)
    const [ active, setActive ] = useState(0)

    useEffect(() => {
        const listHeight = listRef.current.getBoundingClientRect().height
        if(navIsOpen){
            listWrapperRef.current.style.height = `${listHeight}px`
        } else {
            listWrapperRef.current.style.height = `0px`
        }
    }, [navIsOpen])

    const activeStyle = {
        backgroundColor: '#C33364',
        color: 'white'
    } 

    return (
        <nav>
            <div>
                <h2> TheLeeEffect </h2>
                { navIsOpen ? <Close onClick={() => setNavIsOpen(!navIsOpen)} /> : <Menu onClick={() => setNavIsOpen(!navIsOpen)} /> }
            </div>

            <div ref={listWrapperRef}>
                <ul ref={listRef}>
                    {navListLinks.map((link, index) => {
                        return (
                            <li key={index} onClick={() => setActive(index)}> <a href={`#${link}`} style={index === active ? activeStyle : {}}> {link} </a> </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
