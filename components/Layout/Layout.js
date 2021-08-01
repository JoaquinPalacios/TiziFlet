import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
    return ( 
        <div className='content'>
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;