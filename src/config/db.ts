import mongoose from 'mongoose'
import colors from 'colors'
//console.log(process.env.MongoDB_URI)


export const connectDB = async ()  => {
    try {
        //const url = 'mongodb+srv://alejavas201207_db_user:u9ypcrctAsO5gVTk@cluster0.dxoaoxy.mongodb.net/?appName=Cluster0'
        // la línea 7 deberia ser borrada, es para prueba de conexión.
        //bloquear codigo hasta que se realice la conexion a la base de datos
        const connection = await mongoose.connect(process.env.MongoDB_URI)
        //console.log(connection)
        //console.log(process.env)

        console.log(colors.green.bold('MongoDB connected'))
        //return "ok"
    }
    catch (error) {
        console.log(colors.bgRed.white(error.message))
        process.exit(1) //detener la ejecucion del programa
    }
}

