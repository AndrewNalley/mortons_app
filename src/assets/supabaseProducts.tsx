import supabase from '../db/supabaseclient'
import { Product } from '../types'

const productArray: Product[] = []

async function supabaseProducts() {
    try {
        let { data: products, error } = await supabase
            .from('products')
            .select('*')

        if (error) {
            console.error('Error selecting products in the DB: ', error)
            return productArray
        }

        if (products) {
            for (let i = 0; i < products.length; ++i) {
                productArray.push(products[i])
            }
        }
        return productArray

    } catch (error) {
        throw new Error('Error selecting all products: ' + error)
    }
}



export default supabaseProducts