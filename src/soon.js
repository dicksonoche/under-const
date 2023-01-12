import { Center } from '@mantine/core'
import React from 'react'
import Helmet from "react-helmet"
import soon from "./soon.png"
import jets from './jets.png'

const Soon = () => {
    return <>
        <Helmet>
            <title>Under Construction - JetVoy.io</title>
        </Helmet>
        <div className="soon_page">
            <Center style={{ minHeight: "60vh" }}>
            <div className="image_contain">
                <img src={soon} alt="" />
            </div>
            </Center>
            <p className="text"><img src={jets} alt="" style={{width: '45px', padding: '5px'}} />JetVoy.io is under construction</p>
        </div>
    </>
}

export default Soon