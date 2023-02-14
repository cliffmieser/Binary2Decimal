document.querySelector('form').addEventListener('submit', (e)=>{
    //get value of input
    e.stopPropagation();
    const result = document.createElement('p');
    let binary = document.querySelector("#digits").value; //gets value of input
    let decimal = parseInt(binary, 2);
    result.innerText = decimal;
    document.querySelector('body').appendChild(result);
})

