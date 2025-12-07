const homeModel = require('../models/add');
function home_add(req,res){
    console.log(req.body);
    const {homename,duration,country,city,state,description,price,email} = req.body;
    console.log(req.file)
    const image = {
        name: req.file.filename,
        filePath: req.file.path
    };
    const productid = (price)=>{
        return Math.floor(Math.random() * price)
    }
    const home = new homeModel({
        homename,
        duration,
        state,
        productid,
        country,
        city,
        description,
        price,
        image,
        email
    });
    home.save()
    .then(() => {
        res.redirect('/host/');
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send('Error saving home');
    });
}
module.exports = {
    home_add
};

