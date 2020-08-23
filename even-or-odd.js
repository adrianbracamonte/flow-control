function evenOrOdd (number) {
 if (Number.isInteger(number)) {  
    if ((number % 2) === 0) {
        console.log('Even')
    } else {
        console.log('Odd')
    }
} else {
    console.log('Please enter a Number!')
}
}

evenOrOdd('joe')