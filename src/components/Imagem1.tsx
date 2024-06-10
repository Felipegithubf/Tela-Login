import Image from 'next/image'; 

import IMAGE9 from '@/app/image/OIG3.jpeg'; // Importe a imagem

export default () => {
    return(
        <div style={{display: 'flex' , justifyContent: 'center' ,   }} >
            <div style={{margin: '10px' }} />
            <Image src={IMAGE9} alt="/" width={930}   />
        </div>
    )
}