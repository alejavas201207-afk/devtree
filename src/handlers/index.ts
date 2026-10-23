//aquí se dejan las funcionalidades, deben de ser separadas
//manejadores y en contexto de frameworks es reutilizable 
import { Request, Response } from "express"
import { validationResult } from "express-validator"
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export const createAccount = async (req:Request,res:Response)=> {
//manejar errores

let errors = validationResult(req)
if(!errors.isEmpty()){
  return res.status(400).json({errors: errors.array()})
}
const { email, password} = req.body

const userExists = await User.findOne({ email }) 
 if (userExists){

    const error = new Error ('User already exists')
    return res.status(409).json({error: error.message})
    } 

const user = new User (req.body)
const hash = await hashPassword (password)

// console.log (slug(handle, ''))

const handle = (slug (req.body.handle, ''))
const handleExists = await User.findOne({ handle }) 
 if (handleExists){

    const error = new Error ('Handle already exists')
    return res.status(409).json({error: error.message})
    } 

  user.handle = handle

user.password = hash

  await user.save()

  res.status(201).send('User created successfully')
  
}