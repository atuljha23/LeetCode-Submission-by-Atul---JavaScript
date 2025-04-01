/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let mapS = new Map();
    let mapT = new Map();
    for(let i = 0; i < s.length; i++) {
        let letterInS = s[i];
        let letterInT = t[i];
        if(mapS.has(letterInS) && mapS.get(letterInS) !== letterInT) {
            return false;
        }
        if(mapT.has(letterInT) && mapT.get(letterInT) !== letterInS) {
            return false;
        }
        mapS.set(letterInS, letterInT);
        mapT.set(letterInT, letterInS);
    }
    return true;
};