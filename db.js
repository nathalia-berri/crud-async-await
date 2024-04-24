import mysql2 from "mysql2/promise"; // promise = conexão assíncrona

async function connect(){ 
    // para ficar assincrona tem que colocar a clausula await
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:@localhost:3306/exerciciodb"); // <- await
        // 3306 -> porta default do mysql
        console.log("Conectado ao SGBD MySQL");
        global.connection = connection;
        return connection;
}
// connect();
export default connect;