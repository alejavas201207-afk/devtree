//const express =require('express'); este ya no lo reconoce
import express from 'express'
import 'dotenv/config'
import router from './router'
import {connectDB} from './config/db'
//console.log(express);

const app = express();

connectDB()
//LEER DATOS DE FORMULARIO
app.use(express.json())// capaz de leer datos json

app.use ('/',router)

export default app
