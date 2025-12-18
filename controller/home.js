const homeModel = require('../models/add');
function home_add(req,res){
    console.log(req.body);
    const {title,description,price,location,type,stats,amenities,rating,availability,user_id} = req.body;
    console.log(req.file)
    const image = {
        name: req.file.filename,
        filePath: req.file.path
    };
    const productid = (price)=>{
        return Math.floor(Math.random() * price)
    }
    const home = new homeModel({
        title,
        stats,
        location,
        user_id,
        description,
        price,
        image,
        rating,
        availability,
        amenities,
        type,
        
    });
    home.save()
    .then(() => {
       res.json({message:"Home added successfully"})
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send('Error saving home');
    });
}
module.exports = {
    home_add
};

