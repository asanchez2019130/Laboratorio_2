const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');
const { existenteEmail, existeUsuarioById, esRolValido, existeMascotaById } = require('../helpers/db-validators');

const { mascotaDelete, mascotaPost, mascotaGet, getMascotaByid, mascotaPut } = require('../controllers/mascota.controller');
const { route } = require('./user.routes');

const router = Router();

router.get("/", mascotaGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ],getMascotaByid)

router.put(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotaPut)

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotaDelete)

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("raza", "La raza debe de ser obligatoria"),
        check("edad", "La edad debe de ser obligatoria"),
        check("sexo", "El genero debe de ser obligatorio"),
        validarCampos,
    ], mascotaPost);

module.exports = router;