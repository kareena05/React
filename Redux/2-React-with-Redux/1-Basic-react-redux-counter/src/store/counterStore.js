import {createStore} from "redux"

const INITIAL_VALUE ={
    counter:0,
    privacy:false
}
const counterReducer = (store=INITIAL_VALUE,action)=>{
    let newStore = {...store};
    if(action.type=="INCREMENT"){
        newStore.counter = store.counter+1;
    }
    if(action.type=="DECREMENT"){
        newStore.counter = store.counter-1;
    }
    if(action.type=="ADD"){
        newStore.counter = store.counter+ Number(action.payload.number);
    }
    if(action.type=="SUBTRACT"){
        newStore.counter = store.counter-Number(action.payload.number);
    }
    if(action.type=="PRIVACY_TOGGLE"){
        newStore.privacy= !store.privacy;
    }
    console.log(newStore);
    return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;