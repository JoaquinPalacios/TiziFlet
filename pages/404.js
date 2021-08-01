import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className='not-found my-5'>
            <h1 className='my-5'>404</h1>
            <h2 className='my-5'>Oooooops...</h2>
            <h2 className='my-5'>No se puede encontrar la pagina.</h2>
            <h5 className='mt-5'>Regresa al <Link href='/'><a>Inicio</a></Link></h5>
        </div>
     );
}
 
export default NotFound;