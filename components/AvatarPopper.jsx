'use client'

import * as React from 'react'
import { Download, LinkedIn, WhatsApp, GitHub } from '@mui/icons-material'
import { Divider, IconButton, ListItemIcon } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Popper from '@mui/material/Popper'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import Image from 'next/image'

export default function AvatarPopper() {
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
				id='account-button'
				aria-haspopup='true'
				onClick={handleToggle}
				aria-expanded={open ? 'true' : undefined}
				aria-controls={open ? 'account-menu' : undefined}>
				<Image
					width={40}
					height={40}
					alt='memoji'
					className='rounded-full shadow-lg border-2 border-[#b1762f]'
					src='https://avatars.githubusercontent.com/u/70635657?v=4'
				/>
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
									id='account-menu'
									autoFocusItem={open}
									onKeyDown={handleListKeyDown}
									aria-labelledby='account-button'>
									<MenuItem className='text-sm font-medium font-bricolage'>
										Nurudeen Lawal
									</MenuItem>
									<Divider />
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<GitHub fontSize='small' />
										</ListItemIcon>
										<a
											target='_blank'
											rel='noreferrer'
											className='text-inherit'
											href='https://github.com/Nurmalee'>
											Github
										</a>
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<LinkedIn fontSize='small' />
										</ListItemIcon>
										<a
											target='_blank'
											rel='noreferrer'
											className='text-inherit font-bricolage'
											href='https://www.linkedin.com/in/nurudeen-lawal-lee'>
											LinkedIn
										</a>
									</MenuItem>
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<WhatsApp fontSize='small' />
										</ListItemIcon>
										<a
											target='_blank'
											rel='noreferrer'
											href='tel:2348164800735'
											className='text-inherit'>
											WhatsApp
										</a>
									</MenuItem>
									<Divider />
									<MenuItem
										onClick={handleClose}
										className='text-sm font-bricolage'>
										<ListItemIcon>
											<Download fontSize='small' />
										</ListItemIcon>
										<a
											download
											target='_blank'
											rel='noreferrer'
											className='text-inherit'
											href='https://drive.google.com/file/d/1tZiNMO-BlA-JhjPEaPIIDqzOaNfharkY/view?usp=sharing'>
											My resume
										</a>
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
