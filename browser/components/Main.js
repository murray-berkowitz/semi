import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FeaturedImage from './FeaturedImage';
import Dropdown from './Dropdown';
import Cta from './CTA';
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl: "https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_401362?$detail$"
        }
        this.updateFeaturedImage = this.updateFeaturedImage.bind(this);
    }
    updateFeaturedImage(e){
        this.setState({
            imageUrl : e
        })
    }
    render(){
        const {imageUrl} = this.state;
        return (
            <div className='wrapper'>
              <div className='span6'>
                <h4 className="productInfo">MEN EASY CARE COMFORT LONG SLEEVE SHIRT <span style={{float:'right',fontSize:'24px'}}>$29.90</span></h4>
              </div>
              <div className='span12 shirtOrder'>
                <div className='span6 featuredImgSxn'>
                  <FeaturedImage imageUrl={imageUrl}/>
                </div>
                <div className='span6 dropdownSection col'>
                  <Dropdown updateCta={this.updateCta} updateFeaturedImage={this.updateFeaturedImage}/>
                </div>  
              </div>
              <div className='clear'></div>
            </div>
        )
    }
}