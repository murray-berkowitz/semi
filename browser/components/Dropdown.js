import React, {Component} from 'react';
import shirtObject from './shirtObj';
export default class Dropdown extends Component{
    constructor(){
        super();
        this.filterSlim = this.filterSlim.bind(this);
        this.filterSize = this.filterSize.bind(this);
        this.filterColor = this.filterColor.bind(this);
        this.selectedRadio = this.selectedRadio.bind(this);
        this.state = {
            selectedFilters: [],
            currentShirtObj : shirtObject,
            isChecked : false
        }
    }
    filterSlim(){
        var filtered = this.state.currentShirtObj.filter(function(shirt){
            return shirt.fit == "Slim";
        })
        this.setState({
            currentShirtObj : filtered
        })
    }
    filterSize(){
        var filtered = this.state.currentShirtObj.filter(function(shirt){
            return shirt.sizes.includes('m');
        })
        this.setState({
            currentShirtObj : filtered
        })
    }
    filterColor(){
        var filtered = this.state.currentShirtObj.filter(function(shirt){
            return shirt.colors.includes('blue');
        })
        this.setState({
            currentShirtObj : filtered
        })
    }
    selectedRadio(e){
        console.log(e.target.checked);
        e.target.checked = !e.target.checked;
    }
    render(){
        const {updateFeaturedImage} = this.props;
        const {selectedFilters, currentShirtObj} = this.state;
        return (
            <div>
               <h4>Select Your Fit</h4>
               <input type="radio" value="Slim"  onChange={this.selectedRadio}/>
               <input type="radio" value="Regular" onChange={this.selectedRadio}/>
           </div>
        )
    }
}
/*currentShirtObj.map(shirt => (
    <li>{shirt.id}</li>
  ))
  
  <button onClick={updateFeaturedImage}>Update Image!</button>
           <button onClick={this.filterSlim}>Filter Slim!</button>
           <button onClick={this.filterSize}>Filter Size!</button>
           <button onClick={this.filterColor}>Filter Color!</button>
  
  */