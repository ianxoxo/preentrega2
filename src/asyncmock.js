const products = [
    {title: "Yeezy 500 Carbon Grey", price: 300, id: "1", img: "./src/assets/products/yeezy500cg.jpg", idCat: "1"},
    {title: "Yeezy 500 Soft Vision", price: 330, id: "2", img: "./src/assets/products/yeezy500sv.jpg", idCat: "1"},
    {title: "Yeezy 500 Moon Yellow", price: 280, id: "3", img: "./src/assets/products/yeezy500my.jpg", idCat: "1"},
    {title: "Yeezy 500 Bone White", price: 400, id: "4", img: "./src/assets/products/yeezy500bw.jpg", idCat: "1"},
    {title: "Yeezy 700 V3 Kyanite", price: 500, id: "5", img: "./src/assets/products/yeezy700v3k.jpg", idCat:"2"},
    {title: "Yeezy 700 V3 Clay Brown", price: 500, id: "6", img: "./src/assets/products/yeezy700v3cb.jpg", idCat:"2"},
    {title: "Yeezy 700 V3 Azael", price: 500, id: "7", img: "./src/assets/products/yeezy700v3a.jpg", idCat:"2"}
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 100)
    })
}

const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = products.find((el) => id === el.id)
            resolve(producto)
        }, 100)
    })
}

const getCategories = (idCat) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productos = products.filter((el) => el.idCat === idCat);
            resolve(productos)
        }, 100)
    })
}

export {getProducts, getProduct, getCategories}