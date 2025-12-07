const homemode =require('../models/add')
function housebook(req, res){
  console.log(req.body)
  res.cookie('book',req.body,{
    httpOnly:true,
    maxAge:60*60*24*7*1000
  })
  res.redirect('/user/book')
}

module.exports = { housebook };