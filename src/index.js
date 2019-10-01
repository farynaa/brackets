const check = (s,config) => {
   
    const begins = config.map( el => el[0]);
    const ends = config.map( el => el[1]);
    const arr = s.split('');
    
    let ndxArray = -1;

    for (let i = 0; i < arr.length; i ++) {
        const search = begins.findIndex( el => el === arr[i]);
        if (search !== -1) {
            if (arr[i + 1] === ends[search]) {
                ndxArray = i;
                break;
            }
        }
    }

    if (ndxArray === -1) {
        return false
    }

    const slicedArray = arr.splice(ndxArray,2);

    if (arr.length === 0) {
        return true;
    } else {
        return check(arr.join(''), config);
    }

}

module.exports = check;
