import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Sides from '../components/Sides'
import '../styles/main.scss'

const TemplateWrapper = ({ children }) => (
    <div className="atail container-fluid">
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header />
        <main>
            <div className="main-scroll">
                {children()}
            </div>
            <div className="grid-bg row">
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
                <div className="col-md-2"></div>
            </div>
        </main>
        <Sides />
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
