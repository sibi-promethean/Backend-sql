const express=require("express")

const bodyparser = require("body-parser");
const routes=require("./routes/index")

const app1 = express();
const port = 5001;

app1.use(bodyparser.json());

require("./routes/index")(app1)

app1.listen(port,()=> {
    console.log(`server is listening on port ${port}`);
});
