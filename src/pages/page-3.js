import React from 'react'
import {Helmet} from 'react-helmet'

import {Layout} from 'components/Layout'
import {Container} from 'components/Container'

const Test = () => {
    return (
        <Layout pageName="three">
            <Helmet>
                <title>Page Three</title>
            </Helmet>
            <Container>
                <h1>Page Three</h1>
                <p>Welcome to page 3</p>
            </Container>
        </Layout>
    );
};

export default Test;
