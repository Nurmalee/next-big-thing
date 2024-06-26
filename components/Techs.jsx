import styles from '../styles/Technologies.module.css'
import { techList } from '../data'
import Tech from './Tech'

const Techs = () => {
	return (
		<div className={styles.Container} id='technologies'>
			<div className={styles.Content}>
				<h1>skills/technologies</h1>
				<p>
					Here are some of the languages I speak and technologies that I use.{' '}
				</p>

				<div className={styles.TechnologyCardContainer}>
					{techList.map((tech, index) => {
						return <Tech {...tech} key={index} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Techs
