import { ArrowOutward, GitHub } from '@mui/icons-material'
import { stackBgs, projects } from '../data'
import Image from 'next/image'

const Project = ({ title, desc, img, link, stacks, gradient, isPrivate }) => {
	return (
		<div className='even-project w-full bg-gray-100 shadow-sm rounded-lg p-5 md:p-10 dark:bg-gray-800 flex flex-col md:flex-row justify-between items-center gap-10'>
			<div
				style={{ backgroundImage: gradient }}
				className='p-4 md:p-6 w-full h-full rounded-lg shadow-xl'>
				<Image src={img} width='2400' height='1530' alt='project' />
			</div>

			<div className='font-bricolage text-left flex flex-col gap-3'>
				{isPrivate && (
					<p className='px-3 py-0.5 font-medium text-[12px] text-white rounded-3xl capitalize bg-gray-500 w-fit'>
						private repository
					</p>
				)}
				<h3 className='text-gray-800 text-2xl font-bold'>{title}</h3>
				<p className='text-gray-600'>{desc}</p>
				<div className='flex gap-1 flex-wrap'>
					{stacks?.map((stack) => {
						return (
							<p
								key={stack}
								style={{ backgroundColor: stackBgs[stack] }}
								className='px-2 py-0.5 m-0 font-medium text-[12px] text-white rounded-3xl capitalize'>
								{stack}
							</p>
						)
					})}
				</div>
				<div className='mt-3 flex gap-2 items-center'>
					<a
						href={link}
						target='_blank'
						rel='noreferrer'
						className='px-3 py-2.5 flex gap-2 items-center font-semibold text-sm text-white rounded-tl-md rounded-bl-md bg-gray-700 hover:bg-gray-800'>
						Live Project <ArrowOutward fontSize='tiny' />
					</a>

					{!isPrivate && (
						<a
							href={link}
							target='_blank'
							rel='noreferrer'
							className='px-3 py-2.5 flex gap-2 items-center font-semibold text-sm text-gray-800 rounded-tr-md rounded-br-md bg-slate-200 hover:bg-slate-300'>
							See on Github <GitHub fontSize='tiny' />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

const Projects = () => {
	return (
		<div className='px-4 md:px-20'>
			<h1 className='s-header'>My projects</h1>

			<p className='s-desc'>
				Here are some production projects that showcase my super skills
			</p>

			<div className='flex flex-col gap-5 md:gap-8 items-center justify-center'>
				{projects.map((project, index) => {
					return <Project {...project} key={index} />
				})}
			</div>
		</div>
	)
}

export default Projects
