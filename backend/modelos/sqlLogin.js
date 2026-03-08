//importamos "bd" para hacer la conexion
const db = require('../bd/base');

//Creamos
const usersql = {

    //creamos la funcion :v
    buscarCorreo: async (correo) => {
        //intentamos ejecutar todo lo dentro de try
        try {
            //creamos la consulta sql
            //hacemos correo = ? para seguridad y luego se le pondra el dato
            const sql = 'select * from usuarios where correo_institucional = ?';
            
            //ejecutamos la consulta mysql con los parametros dados sql y correo
            const [datos] = await db.execute(sql, [correo]);

            //regresamos "filas" para ver que resultado nos dio
            return datos[0];
        } catch (error) {
            //si algo sale mal obtenemos el error
            console.error("Error en login", error);
            throw error;
        }
    },
    obtenerId: async (id) => {
        try {
            console.log("🔍 Buscando en la BD el ID:", id);
            //consulta para obtener datos de sql condicionando por id
            const sql = `select id,nombre_completo, correo_institucional, rol, 
            fecha_nacimiento from usuarios where id = ? `;
            //ejecutar la consulta inyectando id
            const [datos] = await db.execute(sql, [id]);
            //regresa los datos de la primera fila
            const user = datos[0];
            return user;
        } catch (error) {
            console.error("Error al obtenerID", error);
            throw error;
        }
    }
};
//exportamos el objeto creado para que los demas lo puedan usar
//se llamara usersql
module.exports = usersql;
