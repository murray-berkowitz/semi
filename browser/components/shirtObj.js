const shirtObject = [
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-RG-XS",
        id: 407234,
        fit:"Slim",
        size: 'XS',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-RG-S",
        id: 407250,
        fit:"Slim",
        size: 'S',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-RG-M",
        id: 407251,
        fit:"Slim",
        size: 'M',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-RG-L",
        id: 407252,
        fit:"Slim",
        size: 'L',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-RG-XL",
        id: 407253,
        fit:"Slim",
        size: 'XL',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-BD-XS",
        id: 407260,
        fit:"Slim",
        size: 'XS',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-BD-S",
        id: 407261,
        fit:"Slim",
        size: 'S',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-BD-M",
        id: 407262,
        fit:"Slim",
        size: 'M',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-BD-L",
        id: 407263,
        fit:"Slim",
        size: 'L',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy-care-stretch-slim-fit-long-sleeve-shirt-WEB-US-BD-XL",
        id: 407264,
        fit:"Slim",
        size: 'XL',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-XS",
        id: 407233,
        fit:"Regular",
        size : 'XS',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-S",
        id: 407237,
        fit:"Regular",
        size : 'S',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-M",
        id: 407238,
        fit:"Regular",
        size : 'M',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-L",
        id: 407239,
        fit:"Regular",
        size : 'L',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-XL",
        id: 407240,
        fit:"Regular",
        size : 'XL',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-2XL",
        id: 407241,
        fit:"Regular",
        size : 'XXL',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-RG-3XL",
        id: 407242,
        fit:"Regular",
        size : 'XXXL',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-XS",
        id: 407243,
        fit:"Regular",
        size : 'XS',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-S",
        id: 407244,
        fit:"Regular",
        size : 'S',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-M",
        id: 407245,
        fit:"Regular",
        size : 'M',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-L",
        id: 407246,
        fit:"Regular",
        size : 'L',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-XL",
        id: 407247,
        fit:"Regular",
        size : 'XL',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-2XL",
        id: 407248,
        fit:"Regular",
        size : 'XXL',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy-care-long-sleeve-shirt-WEB-US-BD-3XL",
        id: 407249,
        fit:"Regular",
        size : 'XXXL',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    }
]

export const colorObj = {
    Regular: ['00','63'],
    Slim: ['00', '60']
}
export const sizeObj = {
    Regular: ['XS','S','M','L','XL','XXL','XXXL'],
    Slim: ['XS','S','M','L','XL']
}
export const collarSizeObj = {
    XS: ['14.5', '15'],
    S: ['15.5', '16.0', '16.5'],
    M: ['16.0', '16.5', '17'],
    L: ['17', '17.5','18.0'],
    XL: ['17.5', '18.0', '18.5'],
    XXL: ['19.0', '19.5'],
    XXXL: ['19.5', '20']
}
export const sleeveLengthObj = {
    Regular: {
        XS: ['32.0', '33.0', '34.0','34.5','36.0'],
        S: ['32.0', '33.0', '34.0','34.5','36.0', '36.5'],
        M: ['32.0', '33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        L: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        XL: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        XXL: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5', '38.0'],
        XXXL: ['34.5','36.0', '36.5', '37.0', '37.5', '38.0', '38.5']
    },
    Slim: {
        XS: ['32.5', '33.5', '34.5','35.5','36.0'],
        S: ['32.5', '33.5', '34.5','35.5','36.0','37.0'],
        M: ['32.5', '33.5', '34.5','35.5','36.0','37.0','37.5','38.0'],
        L: ['33.5', '34.5','35.5','36.0','37.0','37.5','38.0'],
        XL: ['34.5','35.5','36.0','37.0','37.5','38.0']
    }
}

export const imageObj = {
    "00": {
        Regular:"https://uniqlo.scene7.com/is/image/UNIQLO/goods_00_196195_2?$detail$",
        "Button Down":"https://uniqlo.scene7.com/is/image/UNIQLO/goods_00_196194_2?$detail$"
    },
    "60": {
        Swatch:"https://uniqlo.scene7.com/is/image/UNIQLO/goods_60_196195_chip?$jpgHQ$",
        Regular:"https://uniqlo.scene7.com/is/image/UNIQLO/goods_60_196195_2?$detail$",
        "Button Down":"https://uniqlo.scene7.com/is/image/UNIQLO/goods_60_196194_2?$detail$"
    },
    "63": {
        Swatch:"https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_401362_chip?$jpgHQ$",
        Regular:"https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_401362?$detail$",
        "Button Down":"https://uniqlo.scene7.com/is/image/UNIQLO/goods_63_400653?$detail$"
    }
}

export default shirtObject;