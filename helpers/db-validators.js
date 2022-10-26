import { Categoria } from "../models/categoria.js";
import { Producto } from "../models/producto.js";
import { Role } from "../models/role.js";
import { Usuario } from "../models/usuario.js";

const validarRol = async (rol = '')=>{
    const existeRol = await Role.findOne({ rol });

    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la Base de Datos.`)
    }
};

//verificamos el correo (con await ya que es una consulta a la base de datos)
const validarCorreo = async(correo)=>{
    const mailExiste  = await Usuario.findOne({correo: correo});
    if(mailExiste){
        throw new Error(`Ese mail ${correo} ya esta registrado, intenta con otro`)  
    };
}


//verificamos el id de usuarios
const validarUsuarioPorId = async(id)=>{
    const existeId  = await Usuario.findById(id);
    if(!existeId){
        throw new Error(`No hay ningun usuario registrado con el id: ${id}`)  
    };
}

//verificamos el id de categorias
const validarCategoriaPorId = async(id)=>{
    const existeId  = await Categoria.findById(id);
    if(!existeId){
        throw new Error(`No hay ninguna categoria con el id: ${id}`)  
    };
}

//verificamos el id de productos
const validarProductoPorId = async(id)=>{
    const existeId  = await Producto.findById(id);
    if(!existeId){
        throw new Error(`No hay ningun producto con el id: ${id}`)  
    };
}
    


export{
    validarRol, 
    validarCorreo, 
    validarUsuarioPorId, 
    validarCategoriaPorId,
    validarProductoPorId
};