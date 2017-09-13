const shirtObject = [
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 400345,
        fit:"Slim",
        size: 'xs',
        colors:['00','60'], //00 , 60
        collar: "Regular"
    },
    {
        name: "Easy Care Slim Fit Long Sleeve Shirts",
        id: 400567,
        fit:"Slim",
        size : 's',
        colors:['00','60'], //00 , 60
        collar:"Button Down"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 400123,
        fit:"Regular",
        size : 'm',
        colors:['00','63'], //00 , 63
        collar: "Regular"
    },
    {
        name: "Easy Care Regular Fit Long Sleeve Shirts",
        id: 400789,
        fit:"Regular",
        size: 'l',
        colors:['00','63'], //00 , 63
        collar: "Button Down"
    },
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

    },
    Slim: {

    }
}
export default shirtObject;