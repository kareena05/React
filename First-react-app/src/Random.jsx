function Random() {
    let rand = Math.random()*100;
    return <h2>Random Number is: {Math.round(rand)}</h2>;
}
export function Rand2(){
    return<h2>i m random 2-exported differently</h2>
  }
export default Random;