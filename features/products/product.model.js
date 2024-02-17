export default class ProductModel {
    constructor(id, name, desc, imaageUrl, category, price, sizes) {
        this.id = id,
            this.name = name,
            this.desc = desc,
            this.imaageUrl = imaageUrl,
            this.price = price,
            this.category = category,
            this.sizes = sizes
    }

    static getAll(){
        return products;
    }

}
let products = [

    new ProductModel(

        1,
        "product 1",
        "desc 1",
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
        19.99,
        "category 1",
        ['m', 'xl']
    ),
    new ProductModel(

        2,
        "product 2",
        "desc 2",
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
        29.99,
        "category 2",
        ['m', 'l']
    ),
    new ProductModel(

        3,
        "product 3",
        "desc 3",
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
        39.99,
        "category 3",
        ['m', 'xl', 'l']
    ),
]
