import fs from "fs"

function readMyFile(){
    const readFile = fs.createReadStream("./streamFile.txt" , "utf-8");

    readFile.on("error", function error(){
        console.log("An error occured", error)
    });
    readFile.on("data", (buffer)=>{
        console.log("Reading data from my file", buffer)
    });
}  
readMyFile()



function reader(){
    const aaa = fs.createReadStream("./Steam.txt", "utf-8")
    aaa.on("error", function error(){
        console.log("error in reading", error)
    })
    aaa.on("data", (buffer):void=>{
        console.log("resding date", buffer)
    })
}
reader();

