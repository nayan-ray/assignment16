import express from 'express';
import userRouter from './src/routes/userRoute.js';
const app = express();

app.use(express.json());


app.use("/api/v1/", userRouter)
app.use((req, res)=>{
    res.status(404).json({
        success:false,
        message:"Route not found"
    })
})
export default app;