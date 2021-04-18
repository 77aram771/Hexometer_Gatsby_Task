import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-typewriting-effect/dist/index.css'
import {Layout} from 'components/Layout'
import {Container} from 'react-bootstrap'
import {Footer} from "../components/Footer"
import {FirstSection} from "../container/FirstSection"
import {SecondSection} from "../container/SecondSection"
import {ThirdSection} from "../container/ThirdSection"
import {FourthSection} from "../container/FourthSection"
import {FifthSection} from "../container/FifthSection"
import {SixthSection} from "../container/SixthSection"
import {SeventhSection} from "../container/SeventhSection"
import {EighthSection} from "../container/EighthSection"
import {NinthSection} from "../container/NinthSection"
import {TenthSection} from "../container/TenthSection"

const IndexPage = () => {

    return (
        <Layout pageName="home">
            <Helmet>
                <title>Hexometer - 27/7 AI website monitoring</title>
                <link rel="icon" type="image/png" href="../assets/icon/hexometet-icon.svg" sizes="16x16" />
            </Helmet>
            <Container>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
                <SixthSection/>
                <SeventhSection/>
                <EighthSection/>
                <NinthSection/>
                <TenthSection/>
            </Container>
            <Footer/>
        </Layout>
    );
};

export default IndexPage
