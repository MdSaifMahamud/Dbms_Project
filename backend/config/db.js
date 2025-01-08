import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://saifmahamud02:l2ArEXEXftPSraf9@cluster0.ox6ov.mongodb.net/food-del').then(()=>console.log("DB COnnected"));
}
