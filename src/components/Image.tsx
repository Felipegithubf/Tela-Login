import Image from 'next/image'; // Importe o componente Image do Next.js

import IMAGE8 from '@/app/image/OIG2-removebg-preview.png'; // Importe a imagem

export default () => {
    return(
        <div style={{display: 'flex' , justifyContent: 'center' }} >
            <Image src={IMAGE8} alt="" width={170}  />
        </div>
    )
}