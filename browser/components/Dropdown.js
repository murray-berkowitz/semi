import React, {Component} from 'react';
import shirtObject, {colorObj, sleeveLengthObj, collarSizeObj,sizeObj} from './shirtObj';
export default class Dropdown extends Component{
    constructor(){
        super();
        this.filterFit = this.filterFit.bind(this);
        this.filterColor = this.filterColor.bind(this);
        this.selectedRadio = this.selectedRadio.bind(this);
        this.initalize = this.initialize.bind(this);
        this.handleSelects = this.handleSelects.bind(this);
        this.state = {
            selectedFilters: [],
            currentShirtObj : shirtObject,
            currentColors: [],
            currentSizes: [],
            currentSleeveLengths: [],
            currentCollarSizes: [],
            collars :["Button Down", "Regular"],
            selectedCollar: '',
            selectedFit: '',
            selectedColor: '',
            selectedCollarSize: 'Select Your Collar Size',
            selectedSize: 'Select Your Shirt Size',
            selectedSleeve: 'Select Your Sleeve Length',
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
            selectedSleeve: 'Select Your Sleeve Length',
            selectedSize: 'Select Your Shirt Size',
            selectedCollarSize: 'Select Your Collar Size',
            currentColors: [],
            currentCollarSizes: [],
            currentSleeveLengths: [],
            currentSizes:sizeObj[value],
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
    handleSelects(e){
        var name = e.target.name;
        console.log(name, e.target.value);
        this.setState({
            [name] : e.target.value
        })
        if(name === "selectedSize"){
            this.setState({
                currentCollarSizes: collarSizeObj[e.target.value],
                currentSleeveLengths: sleeveLengthObj[this.state.selectedFit][e.target.value],
                selectedCollarSize: 'Select Your Collar Size',
                selectedSleeve: 'Select Your Sleeve Length'
            })
        }
    }
    render(){
        const {selectedFilters, currentShirtObj, selectedFit, selectedSize, selectedColor, currentColors, collars, selectedCollar, currentCollarSizes,currentSizes,selectedSleeve, currentSleeveLengths, selectedCollarSize} = this.state;
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
                   <h4>Select Your Sizes</h4>
                   <select value={selectedSize} onChange={this.handleSelects} name="selectedSize">
                       <option value={selectedSize}>{selectedSize}</option>
                       {
                         currentSizes.map(size => (
                             <option value={size} key={size}>{size}</option>
                         ))
                       }
                   </select>
                   <select value={selectedCollarSize} name="selectedCollarSize" onChange={this.handleSelects}>
                        <option value={selectedCollarSize}>{selectedCollarSize}</option>
                        {
                            currentCollarSizes.map(collar => (
                                <option value={collar} key={collar}>{collar}</option>
                            ))
                        }
                   </select>
                   <select value={selectedSleeve} name="selectedSleeve" onChange={this.handleSelects}>
                        <option value={selectedSleeve}>{selectedSleeve}</option>
                        {
                            currentSleeveLengths.map(sleeve => (
                                <option value={sleeve} key={sleeve}>{sleeve}</option>
                            ))
                        }
                    </select>
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
