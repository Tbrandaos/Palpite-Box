import React from 'react'
import PageTitle from '../components/PageTitle'
import Link from 'next/link'

const Sobre = () => {
    return (
        <div>
        <PageTitle title='Sobre'/>
            <h1>Sobre</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Sobre