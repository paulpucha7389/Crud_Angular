import { Request, Response, } from "express"
import Producto from "../models/producto"

export const getProducts = async (req: Request, res: Response ) =>{
    const listProducts = await Producto.findAll()
    res.json(listProducts);
}

export const getProduct = async(req: Request, res: Response) => {
    //destructuring
    const { id } = req.params;
    const product = await Producto.findByPk(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `No exite el producto con el id: ${id}`
        })
    }
    // res.json({
    //     msg: 'getProduct',
    //     id
    // })
}

export const deleteProduct = async(req: Request, res: Response) => {
    //destructuring
    const { id } = req.params;
    const product = await Producto.findByPk(id)

    if (!product) {
        res.status(404).json({
            msg: `No exite el producto con el id: ${id}`
        })
    }else {
        await product.destroy();
        res.json ({
            msg:'El producto fue eliminado con exito'
        })
    }
    // res.json({
    //     msg: 'delete Product',
    //     id
    // })
}

export const postProduct = async(req: Request, res: Response) => {
    //destructuring
    const { body } = req;

    try {

        await Producto.create(body);

        res.json({
        msg: 'Producto creado existosamente'
    })
        
    } catch (error) {
        console.log(error);
        res.json({ 
            msg: 'Ha ocurrido un error comuniquese con soporte técnico'
        })
    }
    
    
    // res.json({
    //     msg: 'post Product',
    //     body
    // })
}

export const updateProduct = async(req: Request, res: Response) => {
    //destructuring
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await Producto.findByPk(id)

    if (product) {

        await product.update(body);

        res.status(404).json({ 
            msg: `El producto se actualizo correctamente` 
        })
        
    } else {
        
        res.status(404).json({ 
            msg: `El producto con el id: ${id} no existe` 
        })
    }
        
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'ha ocurrido un error al actualizar el producto'
        })
    }
    //console.log(body);
    // res.json({
    //     msg: 'updtae Product',
    //     id,
    //     body
    // })
}
