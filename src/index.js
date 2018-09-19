// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let errObject = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency > 10000){
        return errObject;
    }

    let resultObject = {};

    function setResultObject(propertyName, coinValue, summValue){
        let coinCount = Math.floor(summValue / coinValue);
        if (coinCount != 0){
            resultObject[propertyName] = coinCount;
        }
    }

    if (currency > 0){
        setResultObject('H', 50, currency);
        setResultObject('Q', 25, currency % 50);
        setResultObject('D', 10, currency % 50 % 25);
        setResultObject('N', 5, currency % 50 % 25 % 10);
        setResultObject('P', 1, currency % 50 % 25 % 10 % 5);
    }

    return resultObject;
}
