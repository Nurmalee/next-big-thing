import { IconButton } from '@mui/material'
import Image from 'next/image'
import {
	Phone,
	GitHub,
	LinkedIn,
	WhatsApp,
	EmailOutlined,
} from '@mui/icons-material'

const Footer = () => {
	return (
		<div className='bg-slate-800 text-white rounded-tl-3xl rounded-tr-3xl flex flex-col gap-6 justify-center items-center font-bricolage'>
			<div className='px-4 md:px-20 py-12 w-full flex flex-col gap-3 items-center justify-center text-center'>
				<Image
					width={150}
					height={150}
					alt='the_lee'
					className='rounded-md'
					src='/images/works/lee.png'
				/>
				<p className='font-bricolage w-full md:w-2/3 mt-6 text-3xl md:text-5xl font-bold'>
					I&apos;m open to work
				</p>

				<div className='flex flex-col'>
					<a href='mailto:lawalnurudeenfocus@gmail.com'>
						<EmailOutlined /> lawalnurudeenfocus@gmail.com
					</a>
					<a href='tel:2348164800735'>
						<Phone /> +2348164800735
					</a>
				</div>
			</div>

			<footer className='bg-gray-900 border-t-4 border-gray-400 w-full text-center py-4'>
				<div>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/Nurmalee'>
						<IconButton>
							<GitHub fontSize='large' className='text-white' />
						</IconButton>
					</a>

					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/nurudeen-lawal-505580119'>
						<IconButton>
							<LinkedIn fontSize='large' className='text-white' />
						</IconButton>
					</a>

					<a href='tel:2348164800735'>
						<IconButton>
							<WhatsApp fontSize='large' className='text-white' />
						</IconButton>
					</a>
				</div>
				<p>
					<small>
						© Copyright {new Date().getFullYear()}. Developed by me. All rights
						reserved.
					</small>
				</p>
			</footer>
		</div>
	)
}

export default Footer
