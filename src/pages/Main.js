import {useSelector, useDispatch} from "react-redux";

function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const Decrease = () => {
        dispatch({type: 'DECREASE'});
    }
    const Increase = () => {
        dispatch({type: 'INCREASE'})
    }
    const Reset = () => {
        dispatch({type: 'RESET'})
    }
    return(
        <div style={{textAlign: "center", marginTop: "200px"}}>
            <h1 style={{fontSize: "80px", fontWeight: "bold"}}>Counter</h1>
            <span style={{display: "block", fontSize: "80px", fontWeight: "bold", marginBottom: "20px"}}>{counter}</span>
            <button onClick={Decrease} style={{width:"100px", height: "30px", borderRadius: "10px", marginRight: "10px", background: "red", color: "white"}}>Decrease</button>
            <button onClick={Reset} style={{width:"100px", height: "30px", borderRadius: "10px", marginRight: "10px", background: "gray", color: "white"}}>Reset</button>
            <button onClick={Increase} style={{width:"100px", height: "30px", borderRadius: "10px", marginRight: "10px", background: "teal", color: "white"}}>Increase</button>
        </div>
    )
}

export default Counter;