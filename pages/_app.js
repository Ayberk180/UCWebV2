import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full h-full'>
      <Navbar />
        <Component  {...pageProps} />
      </div>
  )
}

export default MyApp
