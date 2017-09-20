import React, {Component} from 'react';
import Cta from './CTA'
import Collapsible from 'react-collapsible';
import Accordion from 'react-responsive-accordion';
import shirtObject, {colorObj, sleeveLengthObj, collarSizeObj,sizeObj, imageObj} from './shirtObj';
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
            isChecked:'',
            currentBlueSwatch:'',
            isOpen: 'fitAccordion',
            currentSleeveLengths: [],
            currentCollarSizes: [],
            collars :["Button Down", "Regular"],
            selectedCollar: '',
            selectedFit: '',
            selectedColor: '',
            selectedCollarSize: 'Neck Size',
            selectedSize: 'Body Size',
            selectedSleeve: 'Sleeve Length',
            selectedSizeCrumb:'',
            selectedSleeveCrumb:'',
            cta:'',
            selectedCollarSizeCrumb:'',
            currentImage: ''
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
        this.setState({
            cta: url
        })
    }
    filterFit(value){
        var filtered = shirtObject.filter(function(shirt){
            return shirt.fit == value;
        })
        this.setState({
            currentShirtObj : filtered,
            selectedCollar: '',
            selectedColor: '',
            selectedFit: value,
            isChecked: value,
            selectedSleeve: 'Sleeve Length',
            selectedSize: 'Body Size',
            selectedCollarSize: 'Neck Size',
            isOpen: 'collarAccordion',
            currentColors: colorObj[value],
            currentBlueSwatch:imageObj[colorObj[value][1]].Swatch,
            currentCollarSizes: [],
            currentSleeveLengths: [],
            selectedSizeCrumb:'',
            selectedSleeveCrumb:'',
            selectedCollarSizeCrumb:'',
            currentSizes:sizeObj[value]
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
            isOpen: 'colorAccordion',
            isChecked: value + ' ' + this.state.isChecked,
            currentImage:imageObj["60"][value]
        }, function(){
            this.props.updateFeaturedImage(this.state.currentImage);
        })
        return filtered;
    }
    filterColor(value){
        
        this.setState({
            selectedColor: value,
            currentImage: 'http://builtwithreact.io/img/share-logo.jpg',
            isChecked: value + ' ' + this.state.isChecked,
            isOpen: 'sizeAccordion',
            currentImage:imageObj[value][this.state.selectedCollar]
        },function(){
            this.props.updateFeaturedImage(this.state.currentImage);
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
            selectedCollarSize: 'Neck Size',
            selectedSleeve: 'Sleeve Length',
            selectedSizeCrumb: value,
            selectedSize:value,
            isChecked: value + this.state.isChecked
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
        var crumb = e.target.name +'Crumb';
        this.setState({
            [name] : value,
            isChecked: value + this.state.isChecked,
            [crumb]: value
        })
        if(name === "selectedSize"){
            this.filterSizes(value);
        }
        if(name === 'selectedSleeve'){
            this.buildUrl();
        }
    }
    render(){
        const {cta,currentBlueSwatch,selectedSizeCrumb, selectedCollarSizeCrumb, selectedSleeveCrumb, isChecked, selectedFilters, currentShirtObj, selectedFit, selectedSize, selectedColor, currentColors, collars, selectedCollar, isOpen, currentCollarSizes,currentSizes,selectedSleeve, currentSleeveLengths, selectedCollarSize} = this.state;
        return (
            <div>
               <div className='semiTab'>
               <form className="semiForm">
                 <input id="tab-one" type="checkbox" name="fitAccordion" className="accordionInput" checked={"fitAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                 <label className={"dropdownTitle" + (isChecked.includes(selectedFit) && selectedFit.length > 0 ? " checked" : " unchecked")} htmlFor="tab-one">Select Your Fit <span className="selectedStatus">{selectedFit}</span></label>
                 <div className="semi-tab-content">
                 <div className="selectContainer">
                 <div className="squareSelect span12">
                   <div className={"selectOption span6"+ (selectedFit === 'Regular' ? " selected" : selectedFit != '' ? " deselected" : '')} name="selectedFit" value="Regular" onClick={this.selectedRadio}>
                     <h4 className='selectedTitle'>Regular Fit</h4>
                     <p>More room in arm, shoulder and chest</p>
                   </div>
                   <div className={"selectOption span6 col"+ (selectedFit === 'Slim' ? " selected" : selectedFit != '' ? " deselected" : '')} name="selectedFit" value="Slim" onClick={this.selectedRadio}>
                    <h4 className='selectedTitle'>Slim Fit</h4>
                    <p>Sharper Silhouette + stretchy material</p>
                   </div>
                 </div>
                 <div className="clear"></div>
                 </div>
                 </div>
               </form>
               </div>
               <div className={'semiTab' + (isChecked.includes(selectedFit) && selectedFit.length > 0 ? "" : " semiHide")}>
               <form className="semiForm">
                  <input id="tab-two" type="checkbox" className="accordionInput" name="collarAccordion" checked={"collarAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                  <label className={"dropdownTitle" + (isChecked.includes(selectedCollar) && selectedCollar.length > 0 ? " checked" : " unchecked")} htmlFor="tab-two">Select Your Collar <span className="selectedStatus">{selectedCollar}</span></label>
                  <div className="semi-tab-content">
                  <div className="selectContainer">
                    <div className="squareSelect span12">
                    <div className={"selectOption span6"+ (selectedCollar === 'Regular' ? " selected" : selectedCollar != '' ? " deselected" : '')} name="selectedCollar" value="Regular" onClick={this.selectedRadio}>
                      <img src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_60_196195?$detail$&cropN=0,0,1,0.5&wid=840&hei=420"/>
                      <h4>Regular Collar</h4>
                      <p className='optionDescript'>Broadcloth</p>
                    </div>
                    <div className={"selectOption span6 col"+ (selectedCollar === 'Button Down' ? " selected" : selectedCollar != '' ? " deselected" : '')} name="selectedCollar" value="Button Down" onClick={this.selectedRadio}>
                      <img src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_60_196194?$detail$&cropN=0,0,1,0.5&wid=840&hei=420"/>
                      <h4>Button Down Collar</h4>
                      <p className='optionDescript'>Pinpoint Oxford</p>
                    </div>
                  </div>
                  <div className="clear"></div>
                 </div>
                 </div>
               </form>
               </div>
               <div className={'semiTab' + (isChecked.includes(selectedCollar) && selectedCollar.length > 0? "" : " semiHide")}>
               <form className="semiForm">
                 <input id="tab-four" type="checkbox" className="accordionInput" name="colorAccordion" checked={"colorAccordion" === isOpen} onChange={this.selectedAccoridon}/>               
                 <label className={"dropdownTitle" + (isChecked.includes(selectedColor) && selectedColor.length > 0 ? " checked" : " unchecked")} htmlFor="tab-four">Select Your Color <span className="selectedStatus">{selectedColor === '' ? '' : selectedColor === '00' ? 'White' : "Blue"}</span></label>
                 <div className="semi-tab-content">
                 <div className="selectContainer">
                    <div className="squareSelect span12">
                    <div className={"selectOption span6"+ (selectedColor === '00' ? " selected" : selectedCollar != '' ? " deselected" : '')} name="selectedColor" value="00" onClick={this.selectedRadio}>
                    <img src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_00_196194_chip?$jpgHQ$"/>
                    <h4>White</h4>
                    </div>
                    <div className={"selectOption span6 col"+ (selectedColor === currentColors[1] ? " selected" : selectedCollar != '' ? " deselected" : '')} name="selectedColor" value={currentColors[1]} onClick={this.selectedRadio}>
                    <img src={currentBlueSwatch}/>
                    <h4>Blue</h4>
                    </div>
                </div>
                <div className="clear"></div>
                 </div>  
                 </div>
               </form>
               </div>
               <div className={'semiTab' + (isChecked.includes(selectedColor) && selectedColor.length > 0 ? "" : " semiHide")}>
               <form className="semiForm">
                   <input id="tab-three" type="checkbox" className="accordionInput" name="sizeAccordion" checked={"sizeAccordion" === isOpen} onChange={this.selectedAccoridon}/>
                   <label className={"dropdownTitle" + (isChecked.includes(selectedSleeve) && selectedSleeve.length > 0 ? " checked" : " unchecked")} htmlFor="tab-three">Select Your Size <span className="selectedStatus">{selectedSizeCrumb} {selectedCollarSizeCrumb} {selectedSleeveCrumb}</span></label>
                   <div className="semi-tab-content">
                   <div className="selectContainer">
                   <select value={selectedSize} onChange={this.handleSelects} name="selectedSize" className="semiSelect">
                       <option value={selectedSize}>{selectedSize}</option>
                       {
                         currentSizes.map(size => (
                             <option value={size} key={size}>{size}</option>
                         ))
                       }
                   </select>
                   <select className="col semiSelect" value={selectedCollarSize} name="selectedCollarSize" onChange={this.handleSelects}>
                        <option value={selectedCollarSize}>{selectedCollarSize}</option>
                        {
                            currentCollarSizes.map(collar => (
                                <option value={collar} key={collar}>{collar}</option>
                            ))
                        }
                   </select>
                   <select className="col semiSelect" value={selectedSleeve} name="selectedSleeve" onChange={this.handleSelects}>
                        <option value={selectedSleeve}>{selectedSleeve}</option>
                        {
                            currentSleeveLengths.map(sleeve => (
                                <option value={sleeve} key={sleeve}>{sleeve}</option>
                            ))
                        }
                    </select>
                    <div className="clear"></div>
                    </div>
                    </div>
               </form>
               </div>
               <Cta className={(isChecked.includes(selectedSleeve) && selectedSleeve.length > 0? "" : " semiHide")} url={cta}/>
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