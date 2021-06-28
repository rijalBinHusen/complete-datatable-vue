new Vue({
	el: "#utama",
    data: {
        data1:  dummyData()
    }
})

function generator (length) {
    let str = "qwertyuiopasdfghjkllzxcvbnm1234567890QWERYUIOPASDFGHJKLZXCVBNM"
    let result = "";

    for (i = 1; i <= Number(length); i ++) {
        result += str[Math.round(Math.random() * (str.length-1) ) ]
    }
    return result
}

function dummyData () {
    let result = []

    for (let i = 0; i < 150; i ++) {
        result.push({id: i, dat1: generator(6), dat2: generator(9), dat3: generator(5)})
    }

    return result
}