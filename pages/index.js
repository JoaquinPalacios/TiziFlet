import { FaLuggageCart, FaQuoteLeft, FaQuoteRight, FaRegBuilding } from "react-icons/fa";
import { VscPackage, VscPerson, VscTools } from "react-icons/vsc";

import Col from 'react-bootstrap/Col';
import Consejos from './consejos';
import Container from 'react-bootstrap/Container';
import { GiEscalator } from "react-icons/gi";
import Head from 'next/head'
import Image from 'next/image'
import Row from 'react-bootstrap/Row';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>TiziFlet | Fletes en Mar del Plata y alrededores</title>
        <meta name='description' content='Fletes en mar del Plata y alrededores. Confianza y Seguridad en Fletes y Mudanzas.' />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <meta property="og:title" content='Fletes TiziFlet' />
        <meta property="og:description" content='Fletes en mar del Plata y alrededores. Confianza y Seguridad en Fletes y Mudanzas.' />
        <meta property="og:image" content="https://i.ibb.co/YkNHbKh/tiziOG.png" />
        <meta property="og:image:secure_url" content="https://i.ibb.co/YkNHbKh/tiziOG.png" /> 
        <meta property="og:image:type" content="image/png" /> 
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tiziflet.com.ar/" />    
      </Head>
      <div>
        <div>
            <Image alt='banner' src='/images/bgHome.jpg' width={3490} height={1530} />
          <div>
            <div className='titleTop'>
              <h1>TiziFlet</h1>              
            </div>
            <div className='headerBox'>
              <p className='text'>Vos decis donde, nosotros hacemos el resto!</p>
            </div>          
          </div>
        </div>
        <Container className='my-5 pb-lg-5'>
          <div className='subTitle'>
            <hr className='vw-75 mx-auto shadow-lg text-muted mb-5' />
            <h2>Contactanos al <a href='tel:+542235894137' alt='telefono'>2235-894137</a></h2>
          </div>
          <p className='vw-75 fs-5 d-flex justify-content-center text-center'>Con base en Mar del Plata, nuestra empresa trabaja en toda la provincia de Buenos Aires.</p>
          <hr className='vw-75 mx-auto shadow-lg text-muted' />
          <Row className='mt-5 gx-md-1'>
            <Col sm={12} lg={5} className='align-self-md-center p-1 p-md-2 p-lg-3 shadow m-lg-2 m-2 m-md-1 rounded'>
              <h2 className='mt-md-1 ms-2 fw-bolder'>Nosotros</h2>
              <p className='lead mt-3 mx-2'>Tiziflet es una empresa familiar que desde 2016 ofrece un servicio confiable y seguro, siendo nuestra prioridad la satisfacción del cliente. Obteniendo así, que el servicio sea una experiencia confortable en todo sentido.</p>
            </Col>
            <Col sm={12} lg={6} className={`rounded ms-md-auto ${styles.camion}`}>
              <Image alt='Nosotros' src='/images/tizifletAbout.jpg' width={1500} height={1001}  />
            </Col>
          </Row>                 
        </Container>
        <Container className='mt-5'>
          <hr className='vw-75 mx-auto' />
          <h2 className='fs-1 text-center my-5 subTitle'>Servicios <span className='text-muted'>de TiziFlet</span></h2>    
          <hr className='vw-75 mx-auto mb-5' />
          <Row className='gx-5 gy-3 mx-auto mx-sm-0 d-flex justify-content-md-evenly'>
            <Col md={4} lg={3} className={`rounded-3 bg-gradient shadow-lg ${styles.servicios}`}>
              <Image alt='fletes mudanzas' src='/images/escalera.png' width='600px' height='400px' className='rounded-1' />
              <div className='p-1 rounded-3'>
                <h3 className='text-center text-uppercase py-2'>MUDANZAS</h3>
                <p>Servicio de mudanzas. Ademas, te ayudamos con el armado y desarmado de muebles.<br className='lh-lg'/><br />
                Contamos con un equipo que te asistirá en todos los detalles, cuidando tus pertenencias en cada momento, brindándote una solución a medida a tus necesidades.</p>
              </div>              
            </Col>
            <Col md={4} lg={3} className={`rounded-3 bg-gradient shadow-lg ${styles.servicios}`}>
              <Image alt='reparto mercaderias' src='/images/reparto.png' width='600px' height='400px' className='rounded-1' />
              <div className='p-1 rounded-3'>
                <h3 className='text-center text-uppercase py-2'>Fletes y Mini-Fletes</h3>
                <p>El servicio de fletes y mini-fletes es otro de los pilares de TiziFlet, garantizando un servicio rápido y confiable.<br className='lh-lg'/><br />
                Siendo una empresa flexible desde sus inicios, nos adaptamos a las necesidades particulares de cada uno de nuestros clientes. Brindando excelencia en la logística del servicio.</p>
              </div>
            </Col>
            <Col md={4} lg={3} className={`rounded-3 bg-gradient shadow-lg ${styles.servicios}`}>
              <Image alt='cargas pesadas' src='/images/cargas.png' width='600px' height='400px' className='rounded-1' />
              <div className='p-1 rounded-3'>
                <h3 className='text-center text-uppercase py-2'>CARGAS PESADAS</h3>
                <p>También nos especializamos en el traslado de materiales pesados.<br className='lh-lg'/><br />
                En caso de que necesites el transporte de materiales pesados como leña, madera, materiales para la construcción o cualquier otro en el que precises de nuestra ayuda, TiziFlet se encarga del mismo otorgando eficiencia en el transporte de materiales pesados.</p>
              </div>
            </Col>
          </Row>          
        </Container>
        <Container className='my-5 pb-md-3'>
          <Row className='mx-auto mt-5'>
            <hr className='vw-75 mt-5 mx-auto shadow-lg' />
            <span className='d-flex flex-row justify-content-between justify-content-lg-around mx-auto px-5 mt-1 vw-75'>
              <Image alt='logo' src='/images/logo.png' width='100px' height='100px' />
              <Image alt='Mercado Pago' src='/images/mercadoPago.png' width='300px' height='85px' />
            </span>   
            <p className='fs-5 fst-italic mt-5 mb-0 pb-0 text-center mx-auto vw-75'><FaQuoteLeft className='pb-2' />Estamos muy contentos de incorporar la plataforma de Mercadopago con todos sus medios de pago asociados.<FaQuoteRight className='pb-2' /></p>
          </Row> 
          <hr className='vw-75 mx-auto shadow-lg' /> 
        </Container>
        <Container className={`mt-5 mx-0 mx-sm-auto bg-gradient shadow-lg ${styles.extras}`}>
          <Row className='text-center pb-1 pb-lg-2'>
            <h3 className='m-3 px-3'>Tambien ofrecemos un rango de servicios extras para cubrir todas tus necesidades</h3>
            <Col xs={6} sm={4} lg={2}>
                <VscPerson size='4em' /><p className='fs-6'>Ayudante</p>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <FaLuggageCart size='4em' /><p className='fs-6'>Carro</p>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <VscTools size='4em' /><p className='fs-6'>Herramientas</p>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <VscPackage size='4em' /><p className='fs-6'>Empaquetado</p>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <GiEscalator size='4em' /><p className='fs-6'>Escalera</p>
            </Col>
            <Col xs={6} sm={4} lg={2}>
                <FaRegBuilding size='4em' /><p className='fs-6'>Altura</p>
            </Col>
          </Row>
        </Container>
        <Consejos />                          
      </div>
    </>
  )
}