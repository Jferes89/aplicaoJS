const expres = require('express');

const app = expres();

app.get('/', (req,res)=>{
        return res.json('Api runnig..');
})

app.listen(3001,()=>{
     console.log("runnig....");
})