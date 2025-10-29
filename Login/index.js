import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import express from "express"
import { router } from "./src/Routes/routes.js"

const app = express()
const port = process.env.PORT

async function startServer(){
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Conectado com sucesso com o MongoDB!")
    mongoose.connection.on("error", (err)=>{
        console.error(`Erro de conexão com o MongoDB: ${err.message}`)
    })
    app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Servidor iniciado na porta ${port}`);
          });
}catch(error){
    console.error(
        "Falha ao conectar ao MongoDB. O servidor não foi iniciado."
      );
      console.error(error.message);
    process.exit(1);
}
}
startServer()