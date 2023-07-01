function AddTwoNumber(number1, number2) {

    return new Promise((resolve, reject) => {
        let sum = number1 + number2
        if (sum < 0) {
            reject("error:sum is negative")
        }
        else {
            resolve(sum);
        }
    });
}
AddTwoNumber(15, 10)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error)
    }
    )
