//Lecture 22 /********************Scope level and mini Hosting***********/
                                                                                                                                                                                                                                                                                                                                                      
function one(){
    const username="anuj"

    function two(){
        const website="youtube"
        console.log(username);
        }
   // console.log(website);

    two()
    
}

//one()

if (true){
    const username = "anurag"
    if(username==="anurag"){
        const website="youtube"
        //console.log(username+website);
    }
    //console.log(website);
    
}
//console.log(username);

//++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++
addone(5)
console.log(addone);

function addone(num){
    return num + 1
}



const addtwo = function(num){
  return num + 2

}
addtwo(5)

