import { ArrowRightAlt, CloudDownload } from '@mui/icons-material'

const Intro = () => {
	return (
		<div className='bg-[whitesmoke]' id='home'>
			<div className='mx-auto my-0 flex flex-col text-center items-center justify-center text-[#0f2948] w-[90vw] max-w-[1350px] h-[90vh] min-h-[700px]'>
				<h1 className="font-['Roboto Slab'] text-xl md:text-2xl whitespace-nowrap overflow-hidden w-[25ch] animate-typing">
					Hi, I am NURUDEEN LAWAL
				</h1>
				<h1 className="font-['Abel'] text-4xl md:text-6xl bg-clip-text bg-gradient-to-b from-[#bd4141] to-[#b1762f] text-transparent">
					Front-End Developer
				</h1>
				<p className="font-['Roboto Slab'] w-full md:w-3/4 mt-9 text-3xl md:text-5xl font-medium">
					Transforming innovative ideas into interactive digital experiences.
				</p>

				<div className='flex gap-3 mt-9'>
					<a
						download
						target='_blank'
						rel='noreferrer'
						className="font-['Abel'] shadow-lg px-7 md:px-14 py-2.5 md:py-3 flex items-center justify-center outline-none cursor-pointer font-semibold rounded-tl-lg rounded-bl-lg text-[13px] md:text-[16px] text-[#b1762f] bg-gray-100 hover:text-[#0f2948]"
						href='https://drive.google.com/file/d/1Fo7k33QPL-uZa2i9XFWBrWhd69Q1HXVS/view?usp=sharing'
						>
						Download my CV <CloudDownload className='text-lg ml-2' />
					</a>
					<a
						href='tel:2348164800735'
						className="font-['Abel'] shadow-lg px-7 md:px-14 py-2.5 md:py-3 flex items-center justify-center outline-none cursor-pointer font-semibold rounded-tr-lg rounded-br-lg text-[13px] md:text-[16px] text-white bg-[#b1762f] hover:bg-[#b97f39]">
						Contact Me <ArrowRightAlt className='text-lg ml-2' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Intro
