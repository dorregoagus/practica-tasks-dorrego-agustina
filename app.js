import sequelize from "./src/config/database.js";

try {
    await sequelize.authenticate();
    console.log("Se estableció la conección con la base de datos.");
} catch (error) {
    console.error("No se pudo establecer la conección con la base de datos:", error);
};