import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return ( 
        <>
        <footer>
            <Container>
                <Row>
                    <Col className='my-auto'>
                      <h3>Mudanzas</h3>
                      <p className='footerTizi'>TiziFlet</p>
                    </Col>
                    <Col className='my-auto'>
                        <p>Telefono: 
                            <a href='tel:+542235894137' className='text-white'> 2235-894137</a>
                        </p>
                        <p>Email: 
                            <a href='mailto:tizifletes@gmail.com' target='_blank' rel="noopener noreferrer" className='text-white'> tizifletes@gmail.com</a>
                        </p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <a  href='https://wa.me/+5492235894137?text=Hola%20TiziFlet' aria-label="Whatsapp" target='_blank' rel="noopener noreferrer" className='text-white mx-1'><FaWhatsapp size='2em' /></a>
                        <a  href='https://www.facebook.com/Tiziflet' aria-label="Facebook" target='_blank' rel="noopener noreferrer" className='text-white mx-3'><FaFacebook size='2em' /></a>
                        <a href='https://www.instagram.com/tiziflet.s/' aria-label="Instagram" target='_blank' rel="noopener noreferrer" className='text-white mx-1'><FaInstagram size='2em' /></a>
                    </Col>
                </Row>               
            </Container>            
        </footer>
        <div className='text-center'>
            Copyright&copy; 2021 proudly created with Next.js
        </div>
        </>
     );
}
 
export default Footer;