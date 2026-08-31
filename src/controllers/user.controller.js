import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (
            typeof name !== "string" ||
            name.trim() === "" ||
            name.length > 100 
        ) {
            return res.status(400).json({
                message: "El nombre debe ser una cadena de texto no vacía y no superar los 100 caracteres."
            });
        }
        if (
            typeof email !== "string" ||
            email.trim() === "" ||
            email.length > 100 ||
        ) {
            return res.status(400).json({
                message: "El email debe ser una cadena de texto no vacía de máximo 100 caracteres."
            });
        }
        if (
            typeof password !== "string" ||
            password.trim() === "" ||
            password.length > 100
        ) {
            return res.status(400).json({
                message: "La contraseña debe ser una cadena de texto no vacía y no superar los 100 caracteres."
            });
        }
        const existingUser = await User.findOne({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({
                message: "El email ya está registrado."
            });
        }
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "Usuario creado correctamente.", user});
    } catch (error) {
        res.status(500).json({message: "Error al crear usuario", error: error.message});
    }
};