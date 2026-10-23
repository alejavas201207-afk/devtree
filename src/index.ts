import colors from 'colors'
import server from './server'

//const port = 4000
const port  =  process.env.PORT || 4000


server.listen(port, () =>{
    console.log(colors.green.italic(`Welcome,Server runnig on port ${port}`));
});

let productName = "tablet"
let isAuth = false
let price = 30 

type Product = { // es como si fuera una clase por el control.
    id:number,
    price: number,
    name:string
}

//interface  ProductIface { // es como si fuera una clase por el control, las agrupa.
  //  id:number,
    //price: number,
    //name:string
//}

//interface FullProduct extends Product {
   // image: string
//}

//objeto creado
let product :Product={
    id: 1,
    price: 30,
    name: "Tablet",
   // image: "https://www.google.com"
}

let product2 :Product ={
    id: 2,
    price: 30,
    name: "Tablet 11 pulgadas",
    //image: "https://www.google.com"
}

//type ProductID={
  //  id: Product['id']
//}

//type ProductID= Pick<Product,'id'>
type ProductID= Omit<Product,'price'|'name'>

let product3 :ProductID ={
    id: 1
}

const numbers = [10,20,30]
