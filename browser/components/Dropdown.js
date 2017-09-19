import React, {Component} from 'react';
import Cta from './CTA'
import Collapsible from 'react-collapsible';
import Accordion from 'react-responsive-accordion';
import shirtObject, {colorObj, sleeveLengthObj, collarSizeObj,sizeObj} from './shirtObj';
export default class Dropdown extends Component{
    constructor(){
        super();
        this.filterFit = this.filterFit.bind(this);
        this.filterColor = this.filterColor.bind(this);
        this.selectedRadio = this.selectedRadio.bind(this);
        this.initalize = this.initialize.bind(this);
        this.handleSelects = this.handleSelects.bind(this);
        this.filterSizes = this.filterSizes.bind(this);
        this.buildUrl = this.buildUrl.bind(this);
        this.selectedAccoridon = this.selectedAccoridon.bind(this);
        this.state = {
            selectedFilters: [],
            currentShirtObj : shirtObject,
            currentColors: [],
            currentSizes: [],
            isChecked:'unchecked',
            isOpen: 'fitAccordion',
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
    selectedAccoridon(e) {
        if(e.target.name === this.state.isOpen){
            this.setState({
                isOpen: ''
            })
        }
        else {
            this.setState({
                isOpen: e.target.name
            })
        }
    }
    buildUrl(){
        var collarSize = this.state.selectedCollarSize.split('.').join('');
        var sleeveLength = this.state.selectedSleeve.split('.').join('');
        var name = this.state.currentShirtObj[0].name;
        var id = this.state.currentShirtObj[0].id;
        var url = `https://uniqlo.com/us/en/product/${name}-${id}col${this.state.selectedColor}nki${collarSize}${sleeveLength}.html`;
        this.props.updateCta(url);
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
            currentColors: colorObj[value],
            currentCollarSizes: [],
            currentSleeveLengths: [],
            currentSizes:sizeObj[value],
            currentImage: 'https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_401362?$detail$'
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
            currentShirtObj: filtered
        })
        return filtered;
    }
    filterColor(value){
        this.setState({
            selectedColor: value,
            currentImage: 'http://builtwithreact.io/img/share-logo.jpg'
        },function(){
            this.props.updateFeaturedImage(this.state.currentImage);
            this.buildUrl();
        });
    }
    filterSizes(value){
        var base = this.filterCollar(this.state.selectedCollar);
        var filtered = base.filter(function(shirt){
            return shirt.size == value;
        });
        this.setState({
            currentShirtObj : filtered,
            currentCollarSizes: collarSizeObj[value],
            currentSleeveLengths: sleeveLengthObj[this.state.selectedFit][value],
            selectedCollarSize: 'Select Your Collar Size',
            selectedSleeve: 'Select Your Sleeve Length',
            selectedSize:value
        })
        return filtered;
    }
    selectedRadio(e){
        console.log(e.currentTarget);
        var clicked = e.currentTarget;
        var name = clicked.getAttribute('name');
        var value = clicked.getAttribute('value');
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
        var value = e.target.value;
        this.setState({
            [name] : value
        })
        if(name === "selectedSize"){
            this.filterSizes(value);
        }
    }
    render(){
        const {isChecked, selectedFilters, currentShirtObj, selectedFit, selectedSize, selectedColor, currentColors, collars, selectedCollar, isOpen, currentCollarSizes,currentSizes,selectedSleeve, currentSleeveLengths, selectedCollarSize} = this.state;
        const cta = this.props.cta;
        return (
            <div>
               <div className='tab'>
               <form>
                 <input id="tab-one" type="checkbox" name="fitAccordion" className="accordionInput" checked={"fitAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                 <label className={`dropdownTitle ${isChecked}`} htmlFor="tab-one">Select Your Fit</label>
                 <div className="tab-content">
                 <div className="selectContainer">
                 <div className="squareSelect span12">
                   <div className="selectOption span6" name="selectedFit" value="Slim" onClick={this.selectedRadio}>
                     <h4>Regular Fit</h4>
                     <p>More room in arm, shoulder and chest</p>
                   </div>
                   <div className="selectOption span6 col" name="selectedFit" value="Regular" onClick={this.selectedRadio}>
                    <h4>Slim Fit</h4>
                    <p>Sharper Silhouette + stretchy material</p>
                   </div>
                 </div>
                 <div className="clear"></div>
                 </div>
                 </div>
               </form>
               </div>
               <div className='tab'>
               <form>
                  <input id="tab-two" type="checkbox" className="accordionInput" name="collarAccordion" checked={"collarAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                  <label className={`dropdownTitle {${isChecked}}`} htmlFor="tab-two">Select Your Collar</label>
                  <div className="tab-content">
                  <div className="selectContainer">
                    <div className="squareSelect span12">
                    <div className="selectOption span6" name="selectedCollar" value="Regular" onClick={this.selectedRadio}>
                      <h4>Regular Collar</h4>
                    </div>
                    <div className="selectOption span6 col" name="selectedCollar" value="Button Down" onClick={this.selectedRadio}>
                     <h4>Button Down Collar</h4>
                    </div>
                  </div>
                  <div className="clear"></div>
                 </div>
                 </div>
               </form>
               </div>
               <div className='tab'>
               <form>
                   <input id="tab-three" type="checkbox" className="accordionInput" name="sizeAccordion" checked={"sizeAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                   <label className={`dropdownTitle ${isChecked}`} htmlFor="tab-three">Select Your Size</label>
                   <div className="tab-content">
                   <div className="selectContainer">
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
                    </div>
                    </div>
               </form>
               </div>
               <div className='tab'>
               <form>
                 <input id="tab-four" type="checkbox" className="accordionInput" name="colorAccordion" checked={"colorAccordion" === isOpen} onChange={this.selectedAccoridon}/>               
                 <label className={`dropdownTitle ${isChecked}`} htmlFor="tab-four">Select Your Color</label>
                 <div className="tab-content">
                 <div className="selectContainer">
                   {
                     currentColors.map(color => (
                       <label key={color}>{color}<input type="radio" name="selectedColor" value={color} checked={color == selectedColor} onChange={this.selectedRadio}></input></label>
                     ))
                   }
                 </div>  
                 </div>
               </form>
               </div>
           </div>
        )
    }
}
/*
<label>Slim <input type="radio" name="selectedFit" value="Slim" checked={"Slim" === selectedFit} onChange={this.selectedRadio}/></label>
<label>Regular <input type="radio" name="selectedFit" value="Regular" checked={"Regular" === selectedFit} onChange={this.selectedRadio}/></label>
<h4 style={{textDecorationLine:'underline'}}>Results</h4>
{currentShirtObj.map(shirt => (
    <li key={shirt.id}>{shirt.id}</li>
))}
 */