const homemode =require('../models/homemodel')
function housebook(req, res){
  console.log(req.body)
  
    const {  homename,
        duration,
        state,
        country,
        city,
        description,
        price,
        email} = req.body
     
    res.render('book', {
        homename,
        duration,
        state,
        country,
        city,
        description,
        price,
        email
    });
}

module.exports = { housebook };