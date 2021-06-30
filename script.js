new Vue({
	el: "#utama",
    data: {
        data1:  dummyData(),
        heads: ["name", "inClock", "outClock"]
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
        result.push({id: generator(9), name: generatorNama(), inClock: generatorClock(), outClock: generatorClock()})
    }

    return result
}

function generatorNama () {
    let nama = ['SUDIONO', 'CAHYO HARDIANTO', 'KHOIRUL', 'ARIMBI AYUNINGTYAS','M HUDA', 'DENY ARDIANSYAH','DWI WIDI ARIANTOKO', 'GITA KRISTIANA PRATIWI','IMRON ROSYADI', 'FX.PERMADI LESMANA PUTRA','SAIFUL RIZAL', 'TIO ACHMAD FATIHUDIN B.','DEWANTORO', 'SLAMET RIYADI B','ATIM SUBANDI', 'DIDIK ASMARA','KUSNO', 'AGUS SANTOSO','SUJIYAT', 'SARNO B','TRI HERNO WIYOTO', '**JAMALI','**SAMIONO', 'RIYANTO B','ALI MACHFUD', 'RISDIYANTO','BUDIONO', 'M MOHAN','SUPRAPTO', 'DEBBY BAIHAQI']
    return nama[Math.round(Math.random() * (nama.length-1) ) ]
}

function generatorClock () {
    let clock = ['14:30','22:46','06:42','22:39','22:48','14:46','06:50','06:45','22:45','06:46','06:25','22:45','06:51','06:55','06:31','14:29','06:21','06:26','09:49','06:56','14:48','22:41','06:26','18:50','06:47','14:46','22:42','14:30','14:49']
    return clock[Math.round(Math.random() * (clock.length-1) ) ]
}