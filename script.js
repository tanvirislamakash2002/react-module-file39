

function useState(initialValue){
    let state = initialValue;

    function setState(newValue){
        state = newValue;
    }

    return [state, setState]
}


console.log(useState('akash'))