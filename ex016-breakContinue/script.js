const numero = [1, 2, 3, 4, 5];

for (let i of numero) {
    if (i === 5 || i === 2) {
        continue;
    }

    if (i === 3) {
        console.log(i);
        break;
    }

    console.log(i);
}