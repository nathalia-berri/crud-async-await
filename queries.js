import connect from "./db.js";

export async function selectProduto() {
    const sql = "SELECT * FROM produto"; // clausula SQL
    const conn = await connect();
    const produtos = await conn.query(sql, []);
    console.log(produtos[0]);
}

export async function insertUnidadeMedida() {
    const sql = "INSERT INTO unidade_medida(id_unid_med, tipo_unid_medida, abreviacao_unid_med) VALUES (?,?,?);"
    const conn = await connect();
    const values = [2, "Litro", "L"];
    console.log("Insercao efetuada");
    return await conn.query(sql, values);
}

export async function insertProduto() {
    const sql = "INSERT INTO produto(id_produto, nome_produto, descricao_produto, preco_produto, id_unid_med) VALUES (?,?,?,?,?);"
    const conn = await connect();
    const values = [1, "Feijao", "Feijao Preto Urbano 1kg", 10.99, 1];
    console.log("Insercao efetuada");
    return await conn.query(sql, values);
}