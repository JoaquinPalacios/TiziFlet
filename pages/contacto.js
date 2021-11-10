import { FaFacebookF, FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Head from "next/head";
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import emailjs from 'emailjs-com';
import { useState } from "react";

const Result = () => {
    return <h4 className='text-center'>Gracias por tu consulta.</h4>
}

const Contact = () => {
    const [result, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        emailjs.sendForm('service_jpn9c3w', 'template_ts7f5yn', e.target, 'user_hoTtSl92UpMWONbs4fzAz')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
        setResult(true);
    };
    setTimeout(() => {
        setResult(false);
    }, 5000);

    return (
        <>
            <Head>
                <title>Contacto | TiziFlet</title>
                <meta name='description' content='Contacta TiziFlet. Fletes en mar del Plata y alrededores.' />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />                
            </Head>
            <div>
                <div>
                    <Image src='/images/contact.jpeg' width='5604px' height='2452px' alt='contacto' />
                    <div className='titleTop'>
                        <h1>TiziFlet</h1>
                    </div>
                    <div className='headerBox'>
                        <p className='text'>Contactanos!</p>
                    </div>
                </div>
                <Container>
                    <hr className='vw-75 mx-auto' />
                    <h2 className='fs-1 text-center my-4 my-sm-5 subTitle'>Hace tu <span className='text-muted'>consulta</span></h2>    
                    <hr className='vw-75 mx-auto' />
                    <Row>
                        <Col sm={12} lg={8} className='gy-3'> 
                            <Form className='ms-lg-5 ms-md-2' data-toggle="validator" onSubmit={sendEmail}>
                                <Form.Group>
                                    <Form.Control required type="text" placeholder="Nombre" name='name' className='mb-3' />                                 
                                    <Row><Col lg={6}><Form.Control required type="email" placeholder="Email" name='email' className='mb-3' /></Col>
                                    <Col lg={6}><Form.Control required type="tel" placeholder="Telefono" name='tel' className='mb-3' /></Col></Row>                                                                      
                                    <Form.Control required as="textarea" rows={4}  placeholder="Deja tu Mensaje" name='message' className='mb-3' />
                                </Form.Group>
                                <div className='d-grid gap-2 d-lg-block'>
                                    <Button variant="secondary" type="submit" className='bgCeleste text-white shadow-sm'>Enviar</Button>
                                </div>
                            </Form>
                        </Col>
                        <Col sm={12} lg={4} className='d-flex flex-column align-items-center'>
                            <Card className='px-5 px-lg-4 py-3 bgCeleste rounded-3 shadow mt-4 mt-lg-0'>
                                <a href='https://wa.me/+5492235894137?text=Hola%20TiziFlet' target='_blank' rel="noopener noreferrer" className='text-white' alt='Whatsapp' ><FaWhatsapp size='2em' className='pe-2' />+54 9 2235 894137</a><br />
                                <a href='mailto:tizifletes@gmail.com' target='_blank' rel="noopener noreferrer" className='text-white'alt='email'><FaRegEnvelope size='2em' className='pe-2' />tizifletes@gmail.com</a><br />
                                <a href='https://www.facebook.com/Tiziflet' target='_blank' rel="noopener noreferrer" className='text-white'alt='Facebook'><FaFacebookF size='1.5em' className='pe-2'/> /tiziflet</a><br />
                                <a href='https://www.instagram.com/tiziflet.s/' target='_blank' rel="noopener noreferrer" className='text-white'alt='Instagram'><FaInstagram size='2em' className='pe-2' />tiziflet.s</a>
                            </Card>
                        </Col>
                    </Row>
                    <Row>{result ? <Result /> : null}</Row>
                </Container>
            </div>
        </>
      );
}
 
export default Contact;