import fs from "fs"

const file = fs.createWriteStream("./streamFile.txt")

for (let i = 0; i < 1000; i++) {
    file.write("Welcome to Set08 class\n")
    
}

// setInterval(()=>{
//     for(let a = 0; a <1000; a++){
//         let a =  
//     }
// })
 
const bbb = fs.createWriteStream("./Steam.txt")
for( let i=500; i>=0; i--){
    bbb.write("\nThis is me ")
} 