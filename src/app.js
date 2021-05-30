const express=require("express");
const app= express();
const path=require("path");
const hb=require("hbs");

const port= process.env.PORT || 8000;


const static_path=path.join(__dirname,"../public")
const static_temp=path.join(__dirname,"../templates/views");
const static_part=path.join(__dirname,"../templates/partial");
console.log(static_path)
app.set("view engine","hbs");

app.use(express.static(static_path));

app.set("views",static_temp);
hb.registerPartials(static_part);
// routing

app.get("/",(req,res)=>{
res.render("index");    
})

app.get("/about",(req,res)=>{
    res.render("about");    
    })

    app.get("/weather",(req,res)=>{
        res.render("weather");    
        })

        app.get("*",(req,res)=>{
            res.render("404");    
            })

    
app.listen(port,()=>{
    console.log(`Listening to the port number ${port}`);
})