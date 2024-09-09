import { ArrowRightAlt, Download } from '@mui/icons-material'
import Image from 'next/image'

const Intro = () => {
	return (
		<div className='px-4 md:px-20 mx-auto my-0 flex flex-col text-center items-center justify-center text-[#0f2948] w-full md:w-[90vw] max-w-[1350px] min-h-screen'>
			<h1 className='font-bricolage font-light text-xl md:text-2xl whitespace-nowrap overflow-hidden w-[25ch] animate-typing'>
				Hi, I am{' '}
				<span className='font-bold font-playwrite'>Nurudeen Lawal</span>
			</h1>
			<h1 className='font-abel text-3xl md:text-5xl bg-clip-text bg-gradient-to-b from-[#bd4141] to-[#b1762f] text-transparent'>
				Front-End Developer
			</h1>
			<Image
				alt='memoji'
				width={100}
				height={100}
				className='rounded-full'
				src='https://avatars.githubusercontent.com/u/70635657?v=4'
			/>
			<p className='font-roboto w-full md:w-2/3 mt-6 text-3xl md:text-5xl font-medium'>
				I transform innovative ideas into interactive digital experiences.
			</p>

			<div className='flex gap-3 mt-9'>
				<a
					download
					target='_blank'
					rel='noreferrer'
					href='https://drive.google.com/file/d/1tZiNMO-BlA-JhjPEaPIIDqzOaNfharkY/view?usp=sharing'
					className='font-bricolage shadow-xl px-7 md:px-14 py-2.5 md:py-3 flex items-center justify-center outline-none cursor-pointer font-medium rounded-tl-lg rounded-bl-lg text-[11px] md:text-[14px] text-[#b1762f] bg-gray-100 hover:text-[#0f2948]'>
					My resume <Download className='text-lg ml-2' />
				</a>
				<a
					href='tel:2348164800735'
					className='font-bricolage shadow-xl px-7 md:px-14 py-2.5 md:py-3 flex items-center justify-center outline-none cursor-pointer font-medium rounded-tr-lg rounded-br-lg text-[11px] md:text-[14px] text-white bg-[#b1762f] hover:bg-[#b97f39]'>
					Contact me <ArrowRightAlt className='text-lg ml-2' />
				</a>
			</div>
		</div>
	)
}

export default Intro
