import Image from 'next/image'
import { tools } from '../data'
const Tech = ({ title, img }) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='rounded-xl p-2 bg-slate-100'>
				<Image src={img} height={100} width={100} alt={title} />
			</div>
			<p className='text-gray-600 font-bricolage'>{title}</p>
		</div>
	)
}

const Stack = () => {
	return (
		<div className='px-4 md:px-20 py-10 md:py-20'>
			<h1 className='s-header'>Stack</h1>

			<p className='s-desc'>Some skills, tools or technologies I use</p>

			<div className='flex items-center gap-3 flex-wrap'>
				{tools.map((tool, index) => {
					return <Tech {...tool} key={index} />
				})}
			</div>
		</div>
	)
}

export default Stack
