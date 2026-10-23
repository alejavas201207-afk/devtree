import {Router} from 'express' 
import { body } from 'express-validator'
import { createAccount } from './handlers'

const router = Router()

// Routing 

router.get('/', (req, res) =>{
    res.send('hello world on express')
})

//Autenticacion y registro 
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('email').isEmail().normalizeEmail(),
    body('password')
    .isLength({ min: 8 }),
    createAccount)// el notEmpty es para que no llegue vacio 



export default router