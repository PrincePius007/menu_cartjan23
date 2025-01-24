const express=require('express')

require('dotenv').config()
const cors=require('cors')
const router=require('./router')


require('./connection')

const app=express()

app.use(cors())
app.use(express.json())

app.use(router)

const port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log('server is running')
})
