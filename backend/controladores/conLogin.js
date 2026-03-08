//importamos el modelo de sql para poder usar las funciones de ahi adentro
const usersql = require('../modelos/sqlLogin');
//creamos el objeto que contentra las funciones con la logica
const loginControlador = {
    //esta es la funcion que se menciona en rutasLogin.js
    verPerfil: async (req, res) => {
        try{
        //se saca el id de la url para poder meterla en la consulta sql
        const {id} = req.params;
        //con este le hablamos al archivo sql y a la funcion que hay ahi adentro
        //le pasamos el id de la url para que lo meta como argumento en la consulta sql
        const usuario = await usersql.obtenerId(id);
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: "No existe el id :v"
            });}
            //si existe respondemos con los datos que nos arrojo sql
        res.json({
            ok: true,
            data: usuario
            });
        }catch(error){
                res.status(500).json({ok: false, msg: "Error en el servidor"});
            }
    }
};
//con esto exportamos el objeto y sus funciones para que cualquier archivo pueda usarlo
//se llamara "logincontrolador"
module.exports = loginControlador;