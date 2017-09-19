import React, {Component} from 'react';

export default class Cta extends Component{
    render(){
        const {url} = this.props;
        return (
            <a href={url}>View Your Selection!</a>
        )
    }
}