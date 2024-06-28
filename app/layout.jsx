import './globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
	title: 'Nurudeen Lawal',
	description: 'Nurudeen Lawal - Portfolio',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main className='bg-white'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
