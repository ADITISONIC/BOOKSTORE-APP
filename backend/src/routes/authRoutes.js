import express from "express"

const router = express.Router()

router.get("/login",async (req,res)=>{
    res.send("login")
})

export default router