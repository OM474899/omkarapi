const connectDb=require("./src/db/conn")
const Userproduct=require("./src/model/productSchema")
require("dotenv").config()
const productjson=require("./product.json")






const start=async () =>{
    try {
        await connectDb(process.env.DATABASE_URL)
        await Userproduct.deleteMany()
        await Userproduct.create(productjson)
        console.log("json file is upload sucessfull");
    } catch (error) {
        console.log(error);
    }
}
start();


