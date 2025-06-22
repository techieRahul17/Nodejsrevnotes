//async and await in JavaScript (and similar features in other languages) are keywords that simplify working with asynchronous operations, making asynchronous code look and behave more like synchronous code.
//this waits till promise is resolved

function delayfn(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function run(name) {
    await delayfn(2000);
    console.log(name);
}

run('Rahul');

async function division(n1,n2){
    try{
        if(n2===0) throw new Error('division not found');
        return n1/n2;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

async function run2(){
    console.log(division(10,5));
    console.log(division(10,0));
}
run2();