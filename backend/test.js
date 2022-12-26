// const date = Date.prototype;
// console.log(date)

// console.log(notHoistedFunc);
// notHoistedFunc();
// var notHoistedFunc = function () {
//     console.log("I will not be hoisted!");
// }

// console.log(ab);
// var ab = "Hello"

const obj1 = {
    result: 1
};

const obj2 = {
    result: 2
};


function reduceAdd() {
    let result = this.result;
    for (let i = 0, len = arguments.length; i < len; i++) {
        result += arguments[i];
    }
    this.result = result;
    console.log(result);
}


reduceAdd.apply(obj1, [1, 2, 3, 4, 5]);  //the "this" object inside the "reduceAdd" function will be "obj1"
reduceAdd.call(obj2, 1, 2, 3, 4, 5); //the "this" object inside the "reduceAdd" function will be "obj2"