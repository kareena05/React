function Hello() {
    let fname = "kareena";
    function fullname(){
        return fname+" balwani";
    }

    return <h1>Hello! I am your master {fullname()}</h1>;
}
export default Hello;