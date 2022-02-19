module.exports = function towelSort (mat) {
    let s = []
    if(! mat) {  
    return []
    } else {
        mat.forEach((elem, i) => {(i+1)%2!=0 ? elem : elem.reverse()})
        mat.forEach(elem => {elem.forEach(elem1 => {s.push(elem1)})})
        return s
    }
}
