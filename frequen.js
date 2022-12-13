function countFreq(arr, n) {
    let visited = [];
    for (let i = 0; i < arr.length; i++) {
        // skip this element if already processed
        if (visited[i] === true) {
            continue;
        }
        let count = 1;
        for (let j = 1 + i; j < n; j++) {
            if (arr[i] === arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        console.log(arr[i] + " founded " + count + ' times');
    }
}
let arr = [10, 20, 20, 10, 10, 20, 5, 20, 30];
let n = arr.length;
countFreq(arr, n);


