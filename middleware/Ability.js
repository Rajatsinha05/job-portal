
const Ability=(req,res,next,roles=[])=>{
    let role=req.user.role;
    if(roles.includes(role)){
        next();
    }
    else{
        
    }


}