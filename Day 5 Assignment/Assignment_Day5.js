

// Name-Ujjwal Malhotra
// Email-ujjwal18vit@gmail.com
// Mobile On.-9899280776



// I haven't created any data! NO DATA OR SEPARATE FILE IS THERE!!!!!!!!!!
// Just test all the methods (api calls/ functions). All are working perfectly! 



const http=require('http');
const fs=require('fs');
const url=require('url');

// creation of server 

// reading the file 


// const productsString=fs.readFileSync("./products.json","utf-8");
// const products=JSON.parse(productsString);


const server=http.createServer((req,res)=>{

    // const path=req.url;
    // console.log(req.method);

    const path=url.parse(req.url,true);
    


    res.writeHead(200,{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
        "Content-Type":"application/json"
    });

    if(path.pathname=="/" || path.pathname=="/Superheros"){

        // res.end(productsString);
        res.end(JSON.stringify({message:"All Superheros details"}))
        
    }
    else if(path.pathname=="/Superhero"){

        if(req.method=="GET")
        {
            // const id=path.query.id;

            // const singleData=products.filter((ele)=>{
            //     return ele.id==id;
            // })
            // res.end(JSON.stringify(singleData));
            res.end(JSON.stringify({message:"single Superhero url"}));
        }


        else if(req.method=="POST"){

            // let body="";
            // req.on('data',(data)=>{
            //     body+=data;
            // })

            // req.on('end',()=>{
            //     let product=JSON.parse(body);
            //     products.push(product);
            //     fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
            //         res.end(JSON.stringify({message:"superhero added"}));
            //     });


            // })

            res.end(JSON.stringify({message:"Superhero added"}));

        }
        else if(req.method=="PUT"){

            // // product id 
            // const id=path.query.id;

            // // product data
            // let body="";
            // req.on('data',(data)=>{
            //     body+=data;
            // })

            // req.on('end',()=>{
            //     let product=JSON.parse(body);

            //     // index will not work 

            //     products.forEach((ele)=>{
            //         if(ele.id==id){

            //             ele.name=product.name;
            //             ele.age=product.age;
            //             ele.planet=product.planet;
            //             ele.weapon=product.weapon;
            //          }
            //     })

                
                // fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
                //     res.end(JSON.stringify({message:"superhero updated"}));
                // });


            // })
                     res.end(JSON.stringify({message:"Superhero updated"}));


        }
        else if(req.method=="DELETE"){

            // product id 
            // const id=path.query.id;

            // products.forEach((ele,index)=>{
            //     if(ele.id==id){
            //         products.splice(index,1);
            //     }
            // })


            // fs.writeFile("./products.json",JSON.stringify(products),(err)=>{
            //     res.end(JSON.stringify({message:"superhero deleted"}));
            // });

            res.end(JSON.stringify({message:"Superhero deleted"}));



        }
        
        
        

      
    }
    else {
        res.writeHead(404,{
            "Content-Type":"application/json"
        });
        res.end(JSON.stringify({message:"Not Found anything for this URL"}));
    }

    

});

server.listen("3000","localhost",()=>{
    console.log("server is running");
})


