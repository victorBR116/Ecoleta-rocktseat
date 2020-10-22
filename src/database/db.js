//importar a depedencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db 
// ultilizar o objeto de banco de dados, para a nossa operação.
    // db.serialize(()=>{
   
        //com comandos SQl eu vou 
        
        //     //1 criar uma tabela 
        //     db.run(`
        //         CREATE TABLE IF NOT EXISTS places (
        //             id INTEGER PRIMARY KEY AUTOINCREMENT,
        //             image TEXT,
        //             name TEXT,
        //             address TEXT,
        //             address2 TEXT,
        //             state TEXT,
        //             city TEXT,
        //             items TEXT
        //         );
        //     `)
        //     // 2 inserir dados na tabela 
        //     const query = `
        //         INSERT INTO places (
        //             image,
        //             name,
        //             address,
        //             address2,
        //             state,
        //             city,
        //             items
        //         ) VALUES (?,?,?,?,?,?,?);
        //     `


        //     const values = [
        //         "https://i.pinimg.com/564x/e9/2c/0d/e92c0d63093335f12da1ec97dc6269e0.jpg",
        //         "Paperside",
        //         "Guilherme Gemballa, jardim América",
        //         "Número 260",
        //         "Santa Catarina",
        //         "Rio do Sul",
        //         "Resíduos Eletrônicos, Lâmpadas"   
        //    ]
        
        //     function afterInsertData(err){
        //         if(err) {
        //             return console.log(err)
        //         }

        //         console.log("cadastrado com sucesso")
        //         console.log(this)
        //     }
        
        //     db.run(query, values, afterInsertData)

        //     //3  consultar os dados da tabela 
        //      db.all(`SELECT name FROM places`, function(err, rows ) {
        //         if(err) {
        //             return console.log (err)
        //         }
        //         console.log("Aqui estão seus registros:")
        //        console.log(this)
        //     })

        //     //4  deletar um dado da tabela 
            // db.run(`DELETE FROM places`, function(err) {
            //     if(err) {
            //        return console.log (err)
            //     }
                
            //     console.log("Registro deletado com sucesso")
            // })
        // // })