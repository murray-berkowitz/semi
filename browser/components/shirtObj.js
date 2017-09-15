const shirtObject = [
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407234,
        fit:"Slim",
        size: 'xs',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407250,
        fit:"Slim",
        size: 's',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407251,
        fit:"Slim",
        size: 'm',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407252,
        fit:"Slim",
        size: 'l',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407253,
        fit:"Slim",
        size: 'xl',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407260,
        fit:"Slim",
        size: 'xs',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407261,
        fit:"Slim",
        size: 's',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407262,
        fit:"Slim",
        size: 'm',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407263,
        fit:"Slim",
        size: 'l',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 407264,
        fit:"Slim",
        size: 'xl',
        colors:['00','60'], //00 , 60
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407233,
        fit:"Regular",
        size : 'xs',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407237,
        fit:"Regular",
        size : 's',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407238,
        fit:"Regular",
        size : 'm',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407239,
        fit:"Regular",
        size : 'l',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407240,
        fit:"Regular",
        size : 'xl',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407241,
        fit:"Regular",
        size : 'xxl',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407242,
        fit:"Regular",
        size : 'xxxl',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407243,
        fit:"Regular",
        size : 'xs',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407244,
        fit:"Regular",
        size : 's',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407245,
        fit:"Regular",
        size : 'm',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407246,
        fit:"Regular",
        size : 'l',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407247,
        fit:"Regular",
        size : 'xl',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407248,
        fit:"Regular",
        size : 'xxl',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 407249,
        fit:"Regular",
        size : 'xxxl',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    }
]

export const colorObj = {
    Regular: ['00','63'],
    Slim: ['00', '60']
}
export const sizeObj = {
    Regular: ['xs','s','m','l','xl','xxl','3xl'],
    Slim: ['xs','s','m','l','xl']
}
export const collarSizeObj = {
    xs: ['14.5', '15'],
    s: ['15.5', '16.0', '16.5'],
    m: ['16.0', '16.5', '17'],
    l: ['17', '17.2','17.5','18.0'],
    xl: ['17.5', '18.0', '18.5'],
    xxl: ['19.0', '19.5'],
    xxxl: ['19.5', '20']
}
export const sleeveLengthObj = {
    Regular: {
        xs: ['32.0', '33.0', '34.0','34.5','36.0'],
        s: ['32.0', '33.0', '34.0','34.5','36.0', '36.5'],
        m: ['32.0', '33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        l: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        xl: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5'],
        xxl: ['33.0', '34.0','34.5','36.0', '36.5', '37.0', '37.5', '38.0'],
        xxxl: ['34.5','36.0', '36.5', '37.0', '37.5', '38.0', '38.5']
    },
    Slim: {
        xs: ['32.5', '33.5', '34.5','35.5','36.0'],
        s: ['32.5', '33.5', '34.5','35.5','36.0','37.0'],
        m: ['32.5', '33.5', '34.5','35.5','36.0','37.0','37.5','38.0'],
        l: ['33.5', '34.5','35.5','36.0','37.0','37.5','38.0'],
        xl: ['34.5','35.5','36.0','37.0','37.5','38.0']
    }
}
export default shirtObject;