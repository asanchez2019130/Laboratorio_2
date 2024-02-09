const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    raza: {
        type: String,
        required: [true, 'La raza es obligatoria']
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatoria']
    },
    sexo: {
        type: String,
        required: [true, 'El sexo es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', MascotaSchema);