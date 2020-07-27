import app from "./../src/server";
import * as dotenv from "dotenv";

dotenv.config()


console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'test'){
    app.listen(process.env.PORT || 3333, () => {
        console.log(`Backend is running in ${process.env.PORT}`)
    })
}



