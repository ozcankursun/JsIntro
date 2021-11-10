export const compute = (a, b) => {
    if (a.length == 0 && b.length > 0) {
      throw Error('strands must be of equal length')
    }
    if (a.length > 0 && b.length == 0) {
      throw Error('strands must be of equal length')
    }
    if (a.length != b.length) {
       throw Error("strands must be of equal length")
    }
    var cnt = 0
    for (var i=0; i<a.length; i++) {
       cnt += (a.charAt(i) != b.charAt(i));
    }
    return cnt;   
  }