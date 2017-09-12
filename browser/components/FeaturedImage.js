import React, {Component} from 'react';
/*export default class FeaturedImage extends Component{
    constructor(){
        super();
        this.state = {
            image: 
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState(e){
        this.setState({
            shirt: {
              size: e.target.value
            }
        }) 
    }
    render(){
        const {shirt} = this.state;
        const {size, fit} = shirt;
        return (
            <div>
              <input type="text" value={size} onChange={this.changeState}/>
              <p>{size}</p>
            </div>
        )
    }
}*/

export default class FeaturedImage extends Component{
    render(){
        const {imageUrl} = this.props;
        return (
            <img src={imageUrl} />
        )
    }
}