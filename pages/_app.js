import React from 'react'
import Layout from '../components/Layout'
import '../css/styles.css'

const MyApp = ({Component, pagePros}) => {
    return (
        <Layout>
            <Component {...pagePros} />
        </Layout>   
    )
}

export default MyApp