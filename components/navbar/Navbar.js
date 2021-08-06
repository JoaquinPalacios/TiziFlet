import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Nav, Navbar as NavbarBootstrap } from "react-bootstrap";

import { BiPhoneCall } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    return ( 
        <NavbarBootstrap className='my-0' collapseOnSelect expand="lg" expanded={expanded}>
            <div className='col-2 col-lg-1 logo ms-sm-3 me-0 pe-0'>
                <Image alt='logo' src='/images/logo.png' width='75px' height='75px' />
            </div>
            <div className='col-6 d-block d-lg-none d-flex justify-content-center m-auto'>
                <span className='phone'>
                    <BiPhoneCall size='2em' />
                    <a href='tel:+542235894137' alt='telefono' className='white'>2235-894137</a>
                </span>
            </div> 
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" className="me-3" onClick={() => setExpanded(!expanded)} />
            <NavbarBootstrap.Collapse className='col-4 col-lg-11 toggleBg' id="responsive-navbar-nav">
                <Nav className='col-4 d-flex d-none d-xl-block fs-5 fst-italic justify-content-start align-self-end ms-0 ps-0'>
                    <FaQuoteLeft size='1.2em' className='pb-3' />Mudanzas en Mar del Plata y alrededores<FaQuoteRight size='1.2em' className='pb-3' />
                </Nav> 
                <div className='col-4 col-xl-3 d-none d-lg-block m-auto'>
                    <span className='phone ms-xl-2'>                        
                        <a href='tel:+542235894137' className='text-decoration-none white'><BiPhoneCall size='1.5em' className='pe-1' />2235-894137</a>
                    </span>
                </div>           
                <Nav.Item className='col-8 col-lg-6 col-xl-4 d-flex justify-content-end align-self-center me-2'  onClick={() => setExpanded(false)}>
                    <Link href="/"><a className='mx-3 my-2 pt-3 pt-md-0 my-lg-0'>Inicio</a></Link>
                    <Link href="/about"><a className='mx-3 my-2 my-lg-0'>Quienes Somos</a></Link>
                    <Link href="/contacto"><a className='ms-3 me-xl-2 my-2 my-lg-0'>Contacto</a></Link>
                </Nav.Item>
            </NavbarBootstrap.Collapse>              
        </NavbarBootstrap>
     );
}
 
export default Navbar;