import MenuIcon from '@material-ui/icons/Menu';
import { useRef, useEffect, useState } from 'react'

const Navbar = () => {
    
    const listWrapperRef = useRef()
    const listRef = useRef()
    const [ navIsOpen, setNavIsOpen ] = useState(false)

    useEffect(() => {
        const listHeight = listRef.current.getBoundingClientRect().height
        if(navIsOpen){
            listWrapperRef.current.style.height = `${listHeight}px`
        } else {
            listWrapperRef.current.style.height = `0px`
        }
    }, [navIsOpen])

    return (
        <nav>
            <div>
                <h2> TheLeeEffect </h2>
                <MenuIcon onClick={() => setNavIsOpen(!navIsOpen)} />
            </div>

            <div ref={listWrapperRef}>
                <ul ref={listRef}>
                    <li> Home </li>
                    <li> About </li>
                    <li> Services </li>
                    <li> Projects </li>
                    <li> Contact Me </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
