

//home logic
const home = async (req,res) => {
    try{
        res.status(200).send("welcomeee to the mearn series using router");
    }
    catch(error){
        console.log(error)
    }
}


//register logic

const register = async (req,res) => {
    try{
        console.log(req.body);
        res.status(200).json("welcome to registration page okayyyyyyyyyy new updateee ");
    }
    catch(error){
        res.status(400).json({msg: req.body});
    }
}

module.exports = {home,register};