import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [ form, setForm ] = useState({
            Nome: "",
            Email: "",
            Telefone: "",
            Opiniao: "",
            Nota: 5,
            Indicaria: ""
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const indicacoes = ["Sim", "Não"]
    const [ sucess, setSucess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})
    const save = async() => {
        try{
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        } catch(err) {
            
        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className ='pt-6'>
        <PageTitle title='Pesquisa' />
            <h1 className ='text-center font-bold my-4 text-2xl'>Opiniões e sugestões</h1>
            <p className ='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!sucess && <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' placeholder='Nome' onChange={onChange} name= 'Nome' value={form.Nome}/>

                <label className='font-bold'>E-mail:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' placeholder='E-mail' onChange={onChange} name= 'Email' value={form.Email} />

                <label className='font-bold'>Telefone:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' placeholder='Telefone' onChange={onChange} name= 'Telefone' value={form.Telefone} />

                <label className='font-bold'>Sua opinião ou sugestão:</label>
                <input className='block p-4 shadow bg-blue-100 my-2 rounded' type='text' placeholder='Opinião' onChange={onChange} name= 'Opiniao' value={form.Opiniao} />

                <label className='font-bold'>Que nota você daria para este estabelecimento?</label>
                <div className='flex py-6'>
                    {notas.map(nota => {
                    return (<label className='block w-1/6 text-center'>
                                {nota}<br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                            </label>)
                    })}
                </div>
                <label className='font-bold'>Indicaria para algum amigo?</label>
                <div className='flex py-6'>
                    {indicacoes.map(indicaria => {
                    return (<label className='block w-1/6 text-center'>
                                {indicaria}<br />
                                <input type='radio' name='Indicaria' value={indicaria} onChange={onChange} />
                            </label>)
                    })}
                </div>

                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
            </div>}
            { sucess && <div className='w-1/5 mx-auto'>
            <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>
                Obrigado por contribuir com sua sugestão/crítica
            </p>
            {
                retorno.showCoupon && <div classname='text-center border p-4 mb-4'>
                    Seu cupom: <br />
                    <span className='font-bold text-2xl'> {retorno.Cupom} </span>
                </div>
            }
            {
                retorno.showCoupon && <div classname='text-center border p-4 mb-4'>
                    <span className='font-bold block mb-2'> {retorno.Promo} </span>
                    <br />
                    <span className='italic'>Tire um print ou foto dessa tela e apresente ao garçom.</span>
                </div>
            }
            </div>}
        </div>
    )
}

export default Pesquisa