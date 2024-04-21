const array = [1, 6, 6, 6, 6, 6, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let element;
let maxCount = 1;

for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = i; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
        }
    }
    if (maxCount < count) {
        maxCount = count;
        element = array[i];
    }
}

console.log(`The Element ${element} is Available for ${maxCount} Times.`);