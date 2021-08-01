import { Col, Container, Row } from "react-bootstrap";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

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
                            <a href='tel:+542235894137' className='text-decoration-none text-white fs-5 fw-bold'> 2235-894-137</a>
                        </p>
                        <p>Email: 
                            <a href='mailto:tizifletes@gmail.com' className='text-decoration-none text-white fs-5 fw-bold'> tizifletes@gmail.com</a>
                        </p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <a href='https://wa.me/+5492235894137?text=Hola%20TiziFlet' className='text-decoration-none text-white fs-5 fw-bold mx-1'><FaWhatsapp size='2em' /></a>
                        <a href='https://www.facebook.com/Tiziflet' className='text-decoration-none text-white fs-5 fw-bold mx-3'><FaFacebook size='2em' /></a>
                        <a href='https://www.instagram.com/tiziflet.s/' className='text-decoration-none text-white fs-5 fw-bold mx-1'><FaInstagram size='2em' /></a>
                    </Col>
                </Row>               
            </Container>
            
        </footer>
        <div className='text-center text-muted'>
            Copyright&copy; 2021 proudly created with Next.js
        </div>
        </>
     );
}
 
export default Footer;