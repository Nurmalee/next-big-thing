import styles from '../styles/Projects.module.css'
import Project from './Project'
import { projectList } from '../data'

const Projects = () => {

	return (
		<div className={styles.Container} id='projects'>
			<h1> Some of my Works </h1>

			<p>
				Here are a few web build projects I&apos;ve worked on recently. Want to
				see more? Email me.
			</p>

			<div className={styles.ProjectsContainer}>
				{projectList.map((project, index) => {
					return <Project {...project} key={index} />
				})}
			</div>
		</div>
	)
}

export default Projects
