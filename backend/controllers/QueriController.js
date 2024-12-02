const Queri =require('../models/Queri')
exports.AskHelp=async(req,res)=>{
    try{
        const{
            email,aboutTheProblemHeFaced,method
        }
        =req.body
    const queri= Queri.findOne({aboutTheProblemHeFaced})
    if(!queri) return res.status(401).json({
        message:"aboutTheProblem he has faced not found in our production"
    })
    const queri2 = new Queri({
        email,aboutTheProblemHeFaced
    })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:"server error"
        })
    }
}
exports.checkIfUserInProblemOrNot=async(req,res)=>{
    try{
        const {
email
        }= req.body
        const queri=await  Queri.findOne(email)
        if(!queri) return res.status(401).json({message:"email is not found"})
        
            const queri3= new Queri({
                email
            })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message:"server error"
        })
    }
}