//importar a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

// ultilizar o objeto de banco de dados, para a nossa operação.
db.serialize(()=>{
   
   //com comandos SQl eu vou 
   
    //1 criar uma tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    // 2 inserir dados na tabela 
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    db.run(query, [
         "",
    ])

    //3  consultar os dados da tabela 

    //4  deletar um dado da tabela 
})