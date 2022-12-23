// return chunks of size n, no effort to normalize chunck size
// if arr cannot be equally subdivided
function chunk(arr,n) {
    let out=[];
    for (let i=0; i<arr.length; i += n) {
        let chunk = [];
        next = i; end = i+n;
        for (next; next<end && next < arr.length; next++) {
            chunk.push(arr[next])
        }
        out.push(chunk)
    }
    console.log(out)
}
const chunkSplice = (arr, n) => {
    const result = []
    while (arr.length > 0) {
      result.push(arr.splice(0, n))
    }
    return result
  }

chunk([1,2,3,4,5], 2);
chunkSplice([1,2,3,4,5], 2);

/**
 * 
 * 
 * 
 * 
 */