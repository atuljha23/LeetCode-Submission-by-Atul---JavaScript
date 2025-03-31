/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        const mp = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
        let ans = 0;
        const n = s.length;
        for(let i = 0; i < n; i++) {
            if(i < n - 1 && [mp[s[i]]] < mp[s[i + 1]]) {
                ans += mp[s[i+1]] - mp[s[i]]
                i++;
            } else ans += mp[s[i]]
        }
        return ans;
};