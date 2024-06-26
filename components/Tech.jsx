import styles from '../styles/Technology.module.css'

const Tech = ({ title, Icon }) => {
	return (
		<div className={styles.TechnologyCard}>
			<div className={styles.TechnologyTitle}>
				<div className={styles.TechnologyIcon}>
					{Icon && <Icon className={styles.Icon} />}
					<h4>{title}</h4>
				</div>
				<p></p>
			</div>
		</div>
	)
}

export default Tech
