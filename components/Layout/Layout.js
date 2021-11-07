import Footer from '../footer/Footer'
import Head from 'next/head'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
    return ( 
        <div>
            <Head>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
              <meta property="og:title" content='Fletes TiziFlet' />
              <meta property="og:description" content='Fletes y mudanzas en Mar del Plata y alrededores' />
              <meta property="og:type" content="website" />
              <meta property="og:image" content='/images/mision.png' />
              <meta property="og:url" content="www.tiziflet.com.ar" />
            </Head>        
            <div>
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;