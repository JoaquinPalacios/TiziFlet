import Footer from '../footer/Footer'
import Head from 'next/head'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
    return ( 
        <div>
            <Head>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
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