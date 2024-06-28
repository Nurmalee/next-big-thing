import Image from 'next/image'
import AvatarPopper from './AvatarPopper'
import ThemePopper from './ThemePopper'

const Navbar = () => {
	return (
		<nav className='w-full fixed z-10 py-3.5 px-4 md:px-20 flex justify-between items-center border-1 backdrop-blur-lg bg-opacity-50'>
			<div className='flex gap-1 items-center'>
				<Image
					width={40}
					height={40}
					alt='the_lee'
					className='rounded-md'
					src='/images/works/lee.png'
				/>
				<h3 className='font-playwrite p-0 m-0 font-bold text-xs'>
					TheLeeEffect
				</h3>
			</div>

			<div className='flex gap-0.5 items-center justify-center'>
				<ThemePopper />
				<AvatarPopper />
			</div>
		</nav>
	)
}

export default Navbar
