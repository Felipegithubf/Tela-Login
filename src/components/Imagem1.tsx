import Image from 'next/image'; // Importe o componente Image do Next.js

import IMAGE9 from '@/app/image/OIG3.jpeg'; // Importe a imagem

export default () => {
    return(
        <div style={{display: 'flex' , justifyContent: 'center' ,  }} >
            <div style={{marginRight: '0px'}} />
            <Image src={IMAGE9} alt="/" width={930}   />
        </div>
    )
}