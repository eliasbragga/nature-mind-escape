const socks = [1, 2, 3, 1, 2, 2, 3, 4, 5, 5, 5, 3, 2, 1,4 ,4, 4]

const countSocks = (socks) => {
    const socksCount= {}

    socks.forEach(sock => {
        if(socksCount[sock]) {
            socksCount[sock] += 1
        }
        else {
           socksCount[sock] = 1
        }
    })

    const socksCountPairs = {}
    for(const sock in socksCount) {
        socksCountPairs[sock] = Math.floor(socksCount[sock] / 2)
    }

    return socksCountPairs

}

console.log(countSocks(socks))  