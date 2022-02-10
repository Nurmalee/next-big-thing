import styles from '../styles/Projects.module.css'
import Project from './Project'
import { useEffect } from 'react'
import { projectList } from '../data'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Projects = () => {
	const { ref, inView } = useInView
	const animation = useAnimation

	// useEffect(() => {
	//     if(inView){
	//         animation.start({
	//             y: 0,
	//             transition: {
	//                 type: 'fade', duration: 1, bounce: 0.3
	//             }
	//         });
	//     } else {
	//         animation.start({y: '100vh'})
	//     }
	// }, [inView, animation])

	return (
		<div ref={ref} className={styles.Container} id='projects'>
			<h1> Some of my Works </h1>

			<p>
				Here are a few web build projects I&apos;ve worked on recently. Want to
				see more? Email me.
			</p>

			<motion.div
				className={styles.ProjectsContainer}
				initial={{ y: '100vh' }}
				animate={{ y: 0 }}
				transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
                >
				{projectList.map((project, index) => {
					return <Project {...project} key={index} />
				})}
			</motion.div>
		</div>
	)
}

export default Projects
