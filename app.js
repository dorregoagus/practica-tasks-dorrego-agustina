import sequelize from "./src/config/database.js";
import User from "./src/models/user.js";
import Task from "./src/models/task.js";

try {
    await sequelize.authenticate();
    console.log("Se estableció la conección con la base de datos.");

    await sequelize.sync();
    console.log("Tablas creadas correctamente.");
} catch (error) {
    console.error("No se pudo establecer la conección con la base de datos:", error);
};