const router = require()
const bcrypt

router.post("/login",async(req,res)=>{
    const {mobile,password} = req.body;
    try{
        const user = await User.findOne({mobile})
        if(user){
            if(user && await bcrypt.compare(password,user.password)){
                const token = genrateToken(mobile,user.role);
                res.json(new APIResponse(true,"user not found"));

            }else{
                res.json(new APIResponse(false,"user not found"));

            }
        }
    }
})
module.exports = router;