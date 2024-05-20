const sql =require("mssql/msnodesqlv8")


const conn={
    database:"student",
    server:"sibi\\SQLEXPRESS",
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
      },

};  
const poolpromise=new sql.ConnectionPool(conn,(err)=>{
    if(err) throw err;
    console.log("database Connected")

    })


module.exports={
    sql,
    poolpromise
}