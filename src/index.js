module.exports = function reverse (n) {
  if(n<0) n=-n;
  let string=n.toString();
  let array=string.split("");
  array.reverse();
  string=array.join("");
  return +string;
}
