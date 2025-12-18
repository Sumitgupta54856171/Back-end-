const search = async(req,res)=>{

const {country,state,city}= req.body;

if(!country || !state || !city){
    return res.status(400).json({message:"All fields are required"})
}

if(country !=null&& state == null && city ==null){

}else if (country != null && state !=null && city == null){

}else{

}


}