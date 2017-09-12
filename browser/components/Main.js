import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FeaturedImage from './FeaturedImage';
import Dropdown from './Dropdown';
import Cta from './CTA';
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl: "",
            cta: ""
        }
        this.updateFeaturedImage = this.updateFeaturedImage.bind(this);
        this.updateCta = this.updateCta.bind(this);
    }
    updateFeaturedImage(e){
        this.setState({
            imageUrl : "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
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
              <div className='span12'>
                <div className='span8'>
                  <FeaturedImage imageUrl={imageUrl}/>
                </div>
                <div className='span4 col'>
                  <Dropdown updateCta={this.updateCta} updateFeaturedImage={this.updateFeaturedImage}/>
                </div>  
              </div>
            </div>
        )
    }
}