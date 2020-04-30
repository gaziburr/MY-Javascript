    /* SOME  POPULAR USEFULL ARRAY METHODS :--- */
    var arr = ['a', 'b', 'c', 'd'];
    // push()
    arr.push('e');
    console.log(arr);
    var arr2 = ['g', 'q'];
    // concat()
    console.log(arr.concat(arr2))
    console.log(arr2)
        // join()
    console.log(arr.join('!'));
    // reverse()
    console.log(arr.reverse())
    console.log(arr)
        // shift()
    console.log(arr.shift())
    console.log(arr)
        // unshift()
    console.log(arr.unshift('p'))
    console.log(arr)
        // slice()
    console.log(arr.slice(1, 2));
    arr.push('i')
    arr.push('f')
    console.log(arr)
        // sort()
    arr.sort()
    console.log(arr)
        // splice()
    console.log(arr.splice(2, 2, 'js Gazibur'))
    console.log(arr)



//Practicing an array by arrow function(=>)
    const Numbers = [4, 2, 3, 1, 5, 6, 7, 9, 8, 0];
    // forEach()
    Numbers.forEach(number => console.log(Number))
        // includes()
    console.log(Numbers.includes(2))
        // filter()
    const filtersNumbers = Numbers.filter(Numbers => Numbers < 7)
    console.log(filtersNumbers)
        //  map()  methods Creates an array with given condition, It is some similar to foreach() methods.
    const newNumbers = Numbers.map(Numbers => Numbers + 3)
    console.log(newNumbers)
    console.log(newNumbers)
        // reduce()
    console.log(Numbers);
    //  below at firstround:  value of accumulator always 0,and number is Number[0];;And the next round the value of accumulator is accumulator+number[0] And the number is number[1]... to the end result the sum of the array.
    const sum = Numbers.reduce((accumulator, number) => accumulator + number)
    console.log(sum)
        //some()
        //  even if only one of the elements passes the condition then  results is true.
    console.log(Numbers.some(Numbers => Numbers < 3))

    //every()
    // Every of the array elements needs to pass the condition if result is true.
    let otherNum = [1, 2, 3, 4, 5, 6]
    console.log(otherNum.every(number => number))
        // sort()
    const sortedArray = otherNum.sort((a, b) => b < a); /* I am little bit confused in it  have to see again! */
    console.log(sortedArray)
        //     // also
        // const otherSortedArray = Numbers.sort((a, b, c) => a > b > c);
        // console.log(otherSortedArray)