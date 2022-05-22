{
    //Expressão de função
     const minhaF = function() {    
         console.log("alguma coisa"); 
     }
        minhaF();
}
 
{
    // Declaração de função
       function minhaF() {
           console.log("alguma coisa");
       }
       minhaF();
}

{
    
    const funcao = () => "Uma expressão de função";

    console.log(funcao());

}

{
    const thisGlobal = () => {
        console.log(this);
    }
    thisGlobal(); // retorna o objeto global
}

{
    const obj = {
        thisLocal: function() {
            const thisLocal = (() => console.log(this))()
            console.log(thisLocal);
        }
    }
    obj.thisLocal(); // { thisLocal: [Function: thisLocal] } undefined
}