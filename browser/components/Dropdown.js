import React, {Component} from 'react';
import shirtObject, {colorObj, Shirts} from './shirtObj';
export default class Dropdown extends Component{
    constructor(){
        super();
        this.filterFit = this.filterFit.bind(this);
        this.filterColor = this.filterColor.bind(this);
        this.selectedRadio = this.selectedRadio.bind(this);
        this.initalize = this.initialize.bind(this)
        this.state = {
            selectedFilters: [],
            currentShirtObj : shirtObject,
            currentColors: [],
            collars :["Button Down", "Regular"],
            selectedCollar: '',
            selectedFit: '',
            selectedColor: '',
            selectedSize: '',
            currentImage: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
        }
        this.baseState = this.state;
    }
    initialize(){
        this.setState(this.baseState)
    }

    filterFit(value){
        var filtered = shirtObject.filter(function(shirt){
            return shirt.fit == value;
        })
        this.setState({
            currentShirtObj : filtered,
            selectedCollar: '',
            selectedColor: '',
            currentColors: [],
            currentImage: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
        }, function(){
            this.props.updateFeaturedImage(this.state.currentImage);
        })
        return filtered;
    }
    filterCollar(value){
        var base = this.filterFit(this.state.selectedFit);
        var filtered = base.filter(function(shirt){
            return shirt.collar == value;
        })
        this.setState({
            selectedCollar: value,
            currentShirtObj: filtered,
            currentColors: colorObj[this.state.selectedFit]
        })
        return filtered;
    }
    filterColor(value){
        var base = this.filterCollar(this.state.selectedCollar);
        var filtered = base.filter(function(shirt){
            return shirt.colors.includes(value)
        });
        this.setState({
            currentShirtObj : filtered,
            selectedColor: value,
            currentImage: 'http://builtwithreact.io/img/share-logo.jpg'
        },function(){
            this.props.updateFeaturedImage(this.state.currentImage);
        });
        
        return filtered;
    }
    filterSizes(){

    }
    selectedRadio(e){
        var clicked = e.target;
        var name = clicked.name;
        var value = clicked.value;
        this.setState({
            [name]: value
        })
        if(name === 'selectedFit'){
            this.filterFit(value);
        }
        if(name == 'selectedColor'){
            this.filterColor(value);
        }
        if(name == 'selectedCollar'){
            this.filterCollar(value);
        }
    }

    render(){
        const {selectedFilters, currentShirtObj, selectedFit, selectedSize, selectedColor, currentColors, collars, selectedCollar} = this.state;
        return (
            <div>
               <form>
                 <h4>Select Your Fit</h4>
                 <label>Slim <input type="radio" name="selectedFit" value="Slim" checked={"Slim" === selectedFit} onChange={this.selectedRadio}/></label>
                 <label>Regular <input type="radio" name="selectedFit" value="Regular" checked={"Regular" === selectedFit} onChange={this.selectedRadio}/></label>
               </form>
               <form>
               <h4>Select Your Collar</h4>
               {
                   collars.map(collar => (
                       <label key={collar}>{collar}<input type="radio" name="selectedCollar" value={collar} checked={collar == selectedCollar} onChange={this.selectedRadio}></input></label>
                   ))
               }
               </form>
               <form>
               <h4>Select Your Color</h4>
               {
                   currentColors.map(color => (
                       <label key={color}>{color}<input type="radio" name="selectedColor" value={color} checked={color == selectedColor} onChange={this.selectedRadio}></input></label>
                   ))
               }
               </form>
               <h4 style={{textDecorationLine:'underline'}}>Results</h4>
               {currentShirtObj.map(shirt => (
                 <li key={shirt.id}>{shirt.id}</li>
               ))}
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

<form>
                 <h4>Select Your Color</h4>
                 {
                     currentColors.map(color => (
                         <label>{color}<input type="radio" name="selectedColor" value={color} checked={color == selectedColor} onChange={this.selectedRadio}></input></label>
                     ))
                 }
               </form>
  
  */