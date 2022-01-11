let num = [1, 2, 5, 4, 9, 7];
num.sort();
console.log(num.indexOf(2));
console.log(num.indexOf(3));

for(let i = 0; i < num.length; i++){
    console.log(`a posiçõa ${i} tem o valor ${num[i]}`);
}

for(let i in num){
    console.log(`a posiçõa ${i} tem o valor ${num[i]}`);
}