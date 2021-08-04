import { Col, Container, Row } from "react-bootstrap";

import Head from "next/head";
import Image from "next/image";
import historia from '../public/images/historia.jpeg'
import mision from '../public/images/mision.jpg'

const About = () => {
    return ( 
        <div>
            <Head>
                <title>TiziFlet | Quienes Somos</title>
                <link rel="icon" href="/logo.png" />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div>
                <div>
                    <Image alt='aboutUsPhoto' src='/images/aboutUs.jpg' width='5418px' height='2371px' />                    
                    <div className='titleTop'>
                        <h1>TiziFlet</h1>
                    </div>
                    <div className='headerBox'>
                        <p className='text'>Una empresa familiar</p>
                    </div>
                </div>
                    <Container fluid>
                        <hr className='w-75 mx-auto' />
                        <h2 className='fs-1 text-center my-5 subTitle'>
                            Quienes <span className='text-muted'>Somos</span>
                        </h2>    
                        <hr className='w-75 mx-auto' />              
                        <Row className='mt-lg-5 pt-lg-5 mb-5 mx-3 mx-lg-0' >
                            <Col lg={6} className='align-self-md-center p-md-2 p-lg-3 shadow m-lg-3 m-2 m-md-1 rounded'>
                                <h2 className='mt-md-1 ms-2 fw-bolder text-center'>Nuestra Historia</h2>
                                <p className='lead mt-3 mx-2 fst-italic'>
                                    TiziFlet comenzó en 2016 como un proyecto familiar de fletes y mudanzas, donde ya desde sus inicios no solo     priorizamos la calidad humana en el servicio sino que también la eficiencia por medio de nuestros tres     pilares de trabajo: confiabilidad en el servicio, rapidez en el desenvolvimiento del mismo, y seguridad al     momento de trasladar vuestras pertenencias y/o mercaderías.<br /> 
                                    Desde entonces hemos continuado creciendo con la ayuda de nuestros clientes que constantemente nos eligen y     recomiendan, logrando así expander el radio de acción de la empresa y mejorando paulatinamente nuestra     flota. Ademas, TiziFlet cuenta con un grupo humano de trabajo que garantiza un trato ameno en cada uno de     sus servicios.
                                </p>
                            </Col>
                            <Col lg={5} className='rounded mx-auto mt-3 mt-lg-0 photoRight'>
                                <Image alt='historia' src={historia} width='5904px' height='3939px'  />
                            </Col>
                        </Row>
                        <Row className='mt-5 d-flex flex-column-reverse flex-lg-row'>
                            <Col lg={5} className='rounded mx-auto photoLeft'>
                                <Image alt='mision' src={mision} width='6008px' height='4008px'  />
                            </Col>
                            <Col lg={6} className='align-self-md-center p-md-2 p-lg-3 shadow m-lg-3 m-2 m-md-1 rounded'>
                                <h2 className='mt-md-1 ms-2 fw-bolder text-center'>Nuestra Mision</h2>
                                <p className='lead mt-3 mx-2 fst-italic'>                                    
                                    Tiziflet es una empresa familiar que desde sus inicios ofrece un servicio confiable y seguro, siendo nuestra prioridad la satisfacción del cliente. Obteniendo así, que el servicio sea una experiencia confortable en todo sentido.
                                </p>
                            </Col>
                        </Row>
                        <Row className='mt-3 mt-sm-5'>
                            <div className='subTitle'>
                                <hr className='w-75 mx-auto shadow-lg text-muted mb-5' />
                                <h2>Contactanos al <a href='tel:+542235894137' alt='telefono'>2235-894-137</a></h2>
                            </div>
                            <p className='w-75 fs-5 mx-auto'>Con base en Mar del Plata, nuestra empresa trabaja en toda la provincia de Buenos Aires.</p>
                            <hr className='w-75 mx-auto shadow-lg text-muted' />
                        </Row>                        
                    </Container>          
            </div>
        </div>
     );
} 
export default About;