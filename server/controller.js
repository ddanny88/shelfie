

const getInventory = (req, res) => {
    const db = req.app.get("db");

    db.get_inventory()
    .then( products => {
        res.status(200).json(products)
    }).catch( err => {
        res.status(500)
        console.log(err)
    })
}



const getProduct = (req, res) => {
    const db = req.app.get("db");

    db.get_product(+req.params.id)
    .then( product => {
        res.status(200).json(product)
    }).catch( err => {
        res.status(500)
    })
}

const createProduct = (req, res) => {
    const db = req.app.get("db");

    db.create_product([req.body.name, req.body.price, req.body.img])
    .then( ()=> res.sendStatus(200))
    .catch( err => console.log( err ))
}

const removeItem = ()=> {
    const db = req.app.get("db");

    db.delete_item()
    .then( res => {
        res.sendStatus(200)
    }).catch(err => console.log(err)).sendStatus(500)

}



module.exports={
    getInventory, 
    getProduct,
    createProduct, 
    removeItem
}