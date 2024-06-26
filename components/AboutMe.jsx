import styles from '../styles/AboutMeAndServices.module.css'
// import Image from 'next/image'
import { Whatshot, Code, BubbleChart } from '@mui/icons-material'

const myServices = [
	{
		title: 'WEB DESIGN',
		Icon: Whatshot,
		statement:
			"Responsiveness prioritized. All my designs feature my trademark  'ultra-responsive confidence'. Pages and interfaces are made to transition seamlessly across all screen sizes for an hitch-free user experience",
	},
	{
		title: 'GRAPHIC DESIGN',
		Icon: BubbleChart,
		statement:
			"When I'm not designing with the web, I can be found designing on Adobe Illustrator. It's safe to say that I think and breathe design",
	},
	{
		title: 'CLEAN CODE',
		Icon: Code,
		statement:
			'I write code that is characteristically easy to read, easy to adjust, easy to update, easy to upgrade. My code base is constantly updated with technological/industry trends and new ideas',
	},
]

const AboutMe = () => {
	return (
		<div className={styles.container} id='services'>
			<h1> Hi, I’m Nurudeen. Nice to have you here. </h1>

			<p>
				{' '}
				<strong> A little intro: </strong> Since beginning my journey as a web
				developer just about a year ago, I&apos;ve built personal projects,
				cloned popular websites and webapps, done remote works for startups, and
				collaborated with talented individuals to create business and/or
				consumer products. I&apos;m quietly confident, subconsciously
				meticulous, and constantly working on improving my abilities with steady
				pace.{' '}
			</p>

			<div className={styles.services}>
				{myServices.map((service, index) => {
					const { title, Icon, statement } = service
					return (
						<div className={styles.service} key={index}>
							<div>
								<Icon style={{ fontSize: '35px', color: '#C33364' }} />
							</div>
							<h4> {title} </h4>
							<p> {statement} </p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default AboutMe
