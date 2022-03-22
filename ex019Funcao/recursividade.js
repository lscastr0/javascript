function recursiva(max) {
    console.log(max);
    if (max > 10) {
        return max;
    }

    max++;

    recursiva(max);
}

recursiva(0);