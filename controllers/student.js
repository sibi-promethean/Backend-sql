const db=require("../db/db")
const sql=db.sql

async function savingdetail(req,res){
    try {
    const {PersonID,age,LastName,FirstName,Address,City } = req.body;
    const pool=await db.poolpromise
    let result=await pool.request()
    .input("PersonID",sql.Int,PersonID)
    .input("age",sql.Int,age)
    .input("LastName",sql.VarChar,LastName)
    .input("FirstName",sql.VarChar,FirstName)
    .input("Address",sql.VarChar,Address)
    .input("City",sql.VarChar,City)
    .query(`INSERT INTO student.dbo.student (PersonID,age,LastName,FirstName,Address,City)
    VALUES(@PersonID,@age,@LastName,@FirstName,@Address,@City)`)

    res.status(200).json({message:"Student Details successfully saved",result})
    // await sql.query`INSERT INTO users (PersonID,age,FirstName,LastName,Address,City)`
    // res.status(200),send('user was created successfully')

    } catch (err) {

        console.error('Error creating details:',err);
        res.status(500).send('Error creating details')
    }
}

async function getstudentdetails(req, res) {
    try {
        const pool = await db.poolpromise;
        const result = await pool.request().query('SELECT * FROM student.dbo.student');
        res.status(200).json(result.recordsets);
        console.log(result.recordsets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
};

async function updatestudent(req,res){
    try {

        const {PersonID, age, LastName, FirstName, Address, City} = req.body;
        const pool = await db.poolpromise;
        const result = await pool.request()
        .input("PersonID",sql.Int,PersonID)
        .input("age",sql.Int,age)
        .input("LastName",sql.VarChar,LastName)
        .input("FirstName",sql.VarChar,FirstName)
        .input("Address",sql.VarChar,Address)
        .input("City",sql.VarChar,City)
        .query(`UPDATE student.dbo.student 
                SET age = @age, LastName = @LastName, FirstName = @FirstName, Address = @Address, City = @City 
                WHERE PersonID = @PersonID`);

         res.status(200).json({message:"Student Details updated successfully ",result});
    } catch (err) {

    console.error('Error creating details:',err);
    res.status(500).send('Error creating details')
    }
          
};

async function deletestudent(req,res) {
    try {
        const {PersonID} = req.body
        const pool = await db.poolpromise;
        const result = await pool.request()
            .input("PersonID", sql.Int,PersonID)
            .query (`
            DELETE FROM student.dbo.student
            WHERE PersonID = @PersonID`
         );

            if (result.rowsAffected[0] === 0) {
                return res.status(404).json({ message: "Student not found" });
            }
    
            res.status(200).json({ message: "Student deleted successfully" });
        } catch (err) {
            console.error('Error deleting student:', err);
            res.status(500).send('Error deleting student');
    }

}


    
module.exports={
    savingdetail,
    getstudentdetails,
    updatestudent,
    deletestudent

}