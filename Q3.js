function find(str1, str2) {
    if (str1.includes(str2)) {
        return str1.indexOf(str2);
    } else {
        return -1;
    }
}

let str1 = "Hello Good Morning Sir";
let str2 = "Good Morning Sir";
let index = find(str1, str2);

console.log(index);