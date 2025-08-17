function sum(a,b){
    v1 = parseInt(a);
    v2 = parseInt(b);
    console.log('sum is: ', v1+v2);
}

function sub(a,b){
    v1 = parseInt(a);
    v2 = parseInt(b);
    console.log('sub is: ', v1-v2);
}

function mul(a,b){
    v1 = parseInt(a);
    v2 = parseInt(b);
    console.log('Mul is: ', v1*v2);
}

function div(a,b){
    v1 = parseInt(a);
    v2 = parseInt(b);
    console.log('div is: ', v1/v2);
}

exports.sum = sum;
exports.sub = sub;
exports.mul = mul;
exports.div = div;