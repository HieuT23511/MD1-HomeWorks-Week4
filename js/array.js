let arr = [];
function creatNewArray() {

    let arrLength = prompt('Input Length of Array: ')
    for (let i = 0; i < arrLength; i++) {
        let arrElements = prompt(`${arrLength - i} Elements left!`)
        arr.push(arrElements);
    }
}