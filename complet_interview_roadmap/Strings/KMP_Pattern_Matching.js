
function buildLPS(pattern) {

    let lps = new Array(pattern.length).fill(0); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]


    let length = 0;
    let i = 1;

    while (i < pattern.length) {

        if (pattern[i] === pattern[length]) {

            length++;
            lps[i] = length;
            i++;

        } else {

            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps; // [ 0, 0, 1, 2, 0, 1, 2, 3, 4 ]
}

function KMP(text, pattern) {

    let lps = buildLPS(pattern);

    let i = 0;
    let j = 0;

    while (i < text.length) {

        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j;
        }

        else if (i < text.length && text[i] !== pattern[j]) {

            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}


console.log(buildLPS("ABABCABAB")) // [ 0, 0, 1, 2, 0, 1, 2, 3, 4 ]

console.log(KMP("ABABDABACDABABCABAB", "ABABCABAB")); // 10
// console.log(KMP("Hello World", "JavaScript"));