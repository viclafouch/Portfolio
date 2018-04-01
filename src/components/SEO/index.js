import _ from 'lodash';
import React, { Component } from 'react'
import Meta from '../../pages-config'
import Helmet from 'react-helmet';

const titleMe = "Victor de la Fouchardiere - Développeur Front-end"

const getMetaTags = ({
    title, description, contentType,
}) => {
    return [
        { itemprop: 'name', content: title },
        { itemprop: 'description', content: description },
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@VicAndTips' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:alt', content: title },
        { name: 'og:title', content: title },
        { name: 'og:type', content: contentType || 'website' },
        { name: 'og:url', content: window.location.href },
        { name: 'og:description', content: description },
        { name: 'og:site_name', content: 'Victor de la Fouchardière - Portfolio' },
        { name: 'fb:app_id', content: '124333614845929' },
    ]
}

class SEO extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: _.find(Meta, { url: this.props.url })
        }

        this.title = `${this.state.content.metas.title} ${titleMe}`
    }

    componentDidMount = () => {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.title = "Get back to me 😢"
            } else {
                document.title = this.title;
            }
        });
    }


    render() {
        return (
            <Helmet
                title={this.title}
                meta={getMetaTags({
                    ...this.state.content.meta,
                    title: this.title
                })}
            >
            </Helmet>
        )
    }
}

export default SEO;