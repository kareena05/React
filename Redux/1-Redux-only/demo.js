const redux = require("redux");
console.log("ok");
const INITIAL_VALUES = {
    counter:0
}
//step 1:create reducer
const reducer = (store=INITIAL_VALUES,action)=>{
    if(action.type=="INCREMENT"){
        store.counter = store.counter+1;
    }
    if(action.type=="DECREMENT"){
        store.counter = store.counter-1;
    }
    if(action.type=="ADDITION"){
        store.counter = store.counter+action.payload.number;
    }
    return store;
}

//step 2: create store
const store = redux.createStore(reducer);

//step 3: create subscriber
const subscriber = ()=>{
    const currentState  = store.getState();
    console.log(currentState);
}

store.subscribe(subscriber);

store.dispatch({type:"INCREMENT"});
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"ADDITION",payload:{number:15}});

