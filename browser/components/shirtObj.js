const shirtObject = [
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 400345,
        fit:"Slim",
        sizes: ['s','l'],
        colors:['red','blue'],
        collar: "regular"
    },
    {
        name: "Shirt 2",
        id: 400567,
        fit:"Slim",
        sizes: ['xs','s','m','l'],
        colors:['white','blue']
    },
    {
        name: "Shirt 3",
        id: 400789,
        fit:"Regular",
        sizes: ['s','m','l','xl'],
        colors:['red','green']
    }
]

export const colorObj = {
    Regular: ['red','green'],
    Slim: ['white', 'blue']
}

const Shirts = {
    Regular :{
        sizes : ['xs','s','m','l','xl','xxl','3xl'],
        colors:{
            'white': '00',
            'blue' : '63'
        },
        regularCollar : {
            name: "",
            id: ""
        },
        buttonDownCollar : {
            name:"",
            id: ""
        }
    },
    Slim : {
        sizes : ['xs','s','m','l','xl'],
        colors:{
            'white': '00',
            'blue' : '60'
        },
        regularCollar : {
            name: "",
            id: ""
        },
        buttonDownCollar : {
            name:"",
            id: ""
        }
    }
}

export default shirtObject;