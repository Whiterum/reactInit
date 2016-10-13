let a = 1;
let b = 2;

const c = () => {
    console.log(a + b)
}

exports.add = c;
exports.d = {
    a: a,
    b: b
}
