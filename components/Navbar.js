import { Menu, Close } from '@material-ui/icons'
import { useRef, useEffect, useState } from 'react'
import ContactMe from './ContactMe'

const navListLinks = ['home', 'services', 'technologies', 'projects']

const Navbar = () => {
	const listWrapperRef = useRef()
	const listRef = useRef()
	const [navIsOpen, setNavIsOpen] = useState(false)
	const [active, setActive] = useState(0)
	const [show, setShow] = useState(false)

	useEffect(() => {
		const listHeight = listRef.current.getBoundingClientRect().height
		if (navIsOpen) {
			listWrapperRef.current.style.height = `${listHeight}px`
		} else {
			listWrapperRef.current.style.height = `0px`
		}
	}, [navIsOpen])

	const handleLinkClick = (e, index) => {
		console.log(e.target)
		setActive(index)
        setNavIsOpen(false)
	}

    const handleShow = () => setShow(true);

	const activeStyle = {
		backgroundColor: '#C33364',
		color: 'white',
	}

	return (
		<>
			<nav>
				<div>
					<h2> TheLeeEffect </h2>
					{navIsOpen ? (
						<Close onClick={() => setNavIsOpen(!navIsOpen)} />
					) : (
						<Menu onClick={() => setNavIsOpen(!navIsOpen)} />
					)}
				</div>

				<div ref={listWrapperRef}>
					<ul ref={listRef}>
						{navListLinks.map((link, index) => {
							return (
								<li key={index} onClick={(e) => handleLinkClick(e, index)}>
									<a
										href={`#${link}`}
										style={index === active ? activeStyle : {}}>
										{link}
									</a>
								</li>
							)
						})}
						<li onClick={handleShow}>
							<a>Contact</a>
						</li>
					</ul>
				</div>
			</nav>

			<ContactMe show={show} setShow={setShow} />
		</>
	)
}

export default Navbar
