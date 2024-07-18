import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { format } from 'path';

const app = express()
app.use(cors())
const PORT=2000

app.get('/f1', (req, res)=>{ 
    res.status(200).json({message:"Ravi"})


})

app.listen(PORT,()=>{
    console.log("app is listening in the port",PORT);
})

app.post('/write-file', (req, res)=>{
    let today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss')
console.log(today);
const filepath = `TimeStamp/${today}`
    fs.writeFileSync(filepath,today, 'utf8');

    let data = fs.readFileSync(filepath, 'utf8')

    try {
        res.status(200).send( data)
    }catch (error){
         console.log(error);
    }
        
    

})
app.get('/files', (req, res) => {
    fs.readdir(filesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading directory' });
        }
        res.status(200).json({ files });
    });
});