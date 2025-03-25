

function useState(initialValue){
    let state = initialValue;

    function setState(newValue){
        state = newValue;
    }

    return [state, setState]
}


console.log(useState('akash'))


/**
 

fetch('url')
.then(res => res.json())
.then(data => console.log(data));


const loadData = async() => {
    const res = await fetch('url');
    const data = res.json();
    return data;
    }


 */