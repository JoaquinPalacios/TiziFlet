import { Col, Container, Row, Table } from "react-bootstrap";

import Image from "next/image";

const Consejos = () => {
    return ( 
        <>            
            <Container className='mt-5'>
                <hr className='vw-75 mx-auto' />
                <h2 className='text-center mt-5 subTitle'>Tips <span className='text-muted'> para una mudanza organizada</span></h2>
                <p className='fs-5 fst-italic text-center mb-5 vw-75 mx-auto'>Nos basamos en nuestra experiencia</p>
                <hr className='vw-75 mx-auto mb-5' />
                <Row>
                    <Col md={8}>
                        <Table striped borderless hover variant="flush" size="lg" className='d-grid gap-0'>
                            <thead>
                              <tr>
                                <th>&#10004; Hace una lista</th>                            
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Realizar una lista de  tareas para tus días libres es muy útil. Así podras maximizar tu tiempo     empacando y     preparándote para cuando nos necesites.</td>
                              </tr>
                            </tbody>
                            <thead className='mt-3'>
                              <tr>
                                <th>&#10004; Cuanto mas cajas mejor</th>                            
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Junta la mayor cantidad de cajas posibles, así al momento de empacar ya tienes donde poner las cosas.     Seria     de gran uso contar con las cajas originales de los electrodomésticos. Estas serian ideales para     el transporte     de los mismos.</td>
                              </tr>
                            </tbody>                                
                            <thead className='mt-3'>
                              <tr>
                                <th>&#10004; Etiqueta las cajas</th>                            
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Etiquetando las cajas, bolsos o bolsas que utilices para tu mudanza te ahorrara mucho tiempo al momento     de     instalarte en tu nuevo hogar.</td>
                              </tr>
                            </tbody>
                            <thead className='mt-3'>
                              <tr>
                                <th>&#10004; Dona lo que no necesites</th>                            
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>En una mudanza siempre encontraras ropa u objetos viejos o que ya no usas, si lo donas en alguna ONG     o     casas de caridad de tu zona Seguro Habrá alguien que te lo agradecerá.</td>
                              </tr>
                            </tbody>
                            <thead  className='mt-3'>
                              <tr>
                                <th>&#10004; Embala bien los objetos frágiles</th>                            
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Si podes envuelve con diario o alguna prenda en desuso la vajilla y/o cualquier otra cosa que     consideres     frágil.</td>
                              </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={4} className='d-flex align-items-center'>
                        <Image className='shadow-lg rounded' src='/images/consejos.jpg' width='800px' height='1199px' alt='aboutUsPhoto' />
                    </Col>
                </Row>                 
            </Container>
        </>
     );
}
 
export default Consejos;