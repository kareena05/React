// eslint-disable-next-line react/prop-types
const Container = ({children})=>{
    return <> <center>
    <div className="card" style={{width: "18rem"}}>
        {children}
    </div>
    </center>
    </>
}
export default Container;