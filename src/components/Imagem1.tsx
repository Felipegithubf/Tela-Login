import Image from 'next/image'; // Importe o componente Image do Next.js

import IMAGE8 from '@/app/image/'; // Importe a imagem

export default () => {
    return(
        <div style={{display: 'flex' , justifyContent: 'center' }} >
            <Image src={IMAGE8} alt="" width={170}  />
        </div>
    )
}