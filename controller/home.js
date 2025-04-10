const homeModel = require('../models/homemodel');
function home_add(req,res){
    console.log(req.body);
    const {homename,duration,country,city,state,description,price} = req.body;
    const image = {
        name: req.file.filename,
        filePath: req.file.path
    };
   
    const home = new homeModel({
        homename,
        duration,
        state,
        country,
        city,
        description,
        price,
        image
    });
    home.save()
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error saving home');
    });
}
module.exports = {
    home_add
};

