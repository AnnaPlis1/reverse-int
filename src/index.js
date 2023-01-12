module.exports = function reverse (n) {
    n = n + "";
    if (n>0){return Number(n.split("").reverse().join(""));}
   else if (n<0){n = -n + "";
    return Number(n.split("").reverse().join(""));
}
}