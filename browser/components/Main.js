import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FeaturedImage from './FeaturedImage';
import Dropdown from './Dropdown';
import Cta from './CTA';
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl: "https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_401362?$detail$",
            cta: ""
        }
        this.updateFeaturedImage = this.updateFeaturedImage.bind(this);
        this.updateCta = this.updateCta.bind(this);
    }
    updateFeaturedImage(e){
        this.setState({
            imageUrl : e
        })
    }
    updateCta(url){
        this.setState({
            cta: url
        })
    }
    render(){
        const {imageUrl,cta} = this.state;
        return (
            <div className='wrapper'>
              <div className='span12 shirtOrder'>
                <div className='span6 featuredImgSxn'>
                  <FeaturedImage imageUrl={imageUrl}/>
                </div>
                <div className='span6 dropdownSection col'>
                  <Dropdown updateCta={this.updateCta} updateFeaturedImage={this.updateFeaturedImage}/>
                </div>  
              </div>
              <div className="span12">
                 <div className="wrapper">
                   <Cta url={cta}/>
                 </div>
              </div>
              <div className='clear'></div>
            </div>
        )
    }
}