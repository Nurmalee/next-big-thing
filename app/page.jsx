import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Intro from '../components/Intro'
import Techs from '../components/Techs'

export default function Home() {
	return (
		<div className='bg-[#0f2948]'>
			<Intro />
			<Projects />
			<AboutMe />
			<Techs />
		</div>
	)
}
