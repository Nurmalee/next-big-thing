import styles from '../styles/Footer.module.css'
import { IconButton } from '@mui/material'
import { Instagram, GitHub, Twitter } from '@mui/icons-material'

const Footer = () => {
	return (
		<div className={styles.Container}>
			<h1>The Lee Effect</h1>
			<p>Living, learning & leveling up one day at a time.</p>

			<footer>
				<a href='https://github.com/Nurmalee' target='_blank' rel='noreferrer'>
					<IconButton>
						<GitHub className={styles.Icon} />
					</IconButton>
				</a>

				<a
					href='https://instagram.com/thecodedlee'
					target='_blank'
					rel='noreferrer'>
					<IconButton>
						<Instagram className={styles.Icon} />
					</IconButton>
				</a>

				<a
					href='https://instagram.com/thecodedlee'
					target='_blank'
					rel='noreferrer'>
					<IconButton>
						<Twitter className={styles.Icon} />
					</IconButton>
				</a>
			</footer>

			<p>
				<small> Handcrafted by me with REACT & NEXT </small>
			</p>
		</div>
	)
}

export default Footer
