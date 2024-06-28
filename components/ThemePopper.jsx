'use client'

import * as React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { IconButton, ListItemIcon } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import {
	LightModeOutlined,
	DarkModeOutlined,
	DeskOutlined,
} from '@mui/icons-material'

export default function ThemePopper() {
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<div>
			<IconButton
				size='small'
				ref={anchorRef}
				id='theme-button'
				aria-haspopup='true'
				onClick={handleToggle}
				aria-expanded={open ? 'true' : undefined}
				aria-controls={open ? 'theme-menu' : undefined}>
				<LightModeOutlined />
			</IconButton>

			<Popper
				open={open}
				transition
				disablePortal
				role={undefined}
				anchorEl={anchorRef.current}>
				{({ TransitionProps, placement }) => (
					<Grow {...TransitionProps}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									id='theme-menu'
									autoFocusItem={open}
									onKeyDown={handleListKeyDown}
									aria-labelledby='theme-button'>
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<LightModeOutlined fontSize='small' />
										</ListItemIcon>
										Light
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<DarkModeOutlined fontSize='small' />
										</ListItemIcon>
										Dark
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<DeskOutlined fontSize='small' />
										</ListItemIcon>
										System
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	)
}
