import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className ='pt-6'>
            <h1 className ='text-center font-bold my-4 text-2xl'>Opiniões e sugestões</h1>
            <p className ='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' />
            </div>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>E-mail:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' />
            </div>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Telefone:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' />
            </div>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Sua opinião ou sugestão:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' />
            </div>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Que nota você daria para este estabelecimento:</label>
            </div>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Indicaria para algum amigo?</label>
            </div>
            <div className = 'text-center mt-12 my-12'>
                <Link href=''>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
                        Enviar opinião ou sugestão
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Pesquisa