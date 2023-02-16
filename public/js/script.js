
const result = document.createElement('h3');

document.querySelector('form').addEventListener('submit', (e)=>{
    //get value of input
    e.preventDefault();
    let binary = document.querySelector("#digits").value; //gets value of input
    for(const value of binary){
        if(value != '0' && value != '1'){
            result.innerText = "Not Valid Binary Input";
            document.querySelector('body').appendChild(result);
            break;
        } else {
            let decimal = parseInt(binary, 2);
            result.innerText = decimal;
            document.querySelector('body').appendChild(result);
        }
    }
    
})



