import { Router } from "express";
import { check } from "express-validator";
import { googleSignIn, login } from "../controllers/login-auth.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty()
], validarCampos, login);

router.post('/google',[
    check("id_token", "id_token necesario").not().isEmpty()
], validarCampos, googleSignIn);

export{router}