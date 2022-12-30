/*
32eddseew3
#%he3#33ll#l#o
*/

((str) => {
    dict = {};
    arr = str.split('')
    arr.forEach(x => { 
        // create key if not existing
        if (isNaN(dict[x])) {
            dict[x] = 1
            return
        }
        dict[x] += 1
    })
    maxNum = 0
    maxKey = ''
    for (let key in dict) {
        if (dict[key] > maxNum) {
            maxNum = dict[key]
            maxKey = key
        }
    }
    console.log('max key ' + maxKey)
    console.log('max count ' + maxNum)
})('32eddddseew3')