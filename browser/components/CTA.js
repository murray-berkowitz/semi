import React, {Component} from 'react';

export default class Cta extends Component{
    render(){
        const {url} = this.props;
        return (
            <div className={"semi-cta" + this.props.className}><a className="semia" href={url}>Confirm Your Order!</a></div>
        )
    }
}