import React from 'react'
import {Helmet} from 'react-helmet'

import 'assets/stylesheets/application.scss'

import {Header} from 'components/Header'

export const Layout = ({children, pageName}) => {

    let className = '';

    if (pageName) {
        className = `${className} page-${pageName}`
    }

    return (
        <>
            <Helmet bodyAttributes={{class: className}}>
                <title>Gatsby Site</title>
            </Helmet>
            <div className="wrapper">
                <Header/>
                <main>{children}</main>
                {/*<Footer/>*/}
            </div>
        </>
    );

};

