import { useState } from "react";

export function MyForm(){
    let [first, setFirst] = useState('');
    let [last, setLast] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        alert('Hello'+first+" "+last);
        setFirst('');
        setLast('');
    }

    return(<div className = "w-25">
        <h2>
            Simple User Form
        </h2>
        <form onSubmit={handleSubmit}>
            <div>
                FirstName
                <input type = "text" autoComplete="off" value = {first} className="form-control" onChange={(e) => setFirst(e.target.value)}></input>
            </div>
            <div>
                LastName
                <input type = "text" autoComplete="off" value = {last} className="form-control" onChange={(e) => setLast(e.target.value)}></input>
            </div>
            <div>
                <input type = "submit" value = "Submit" className="btn btn-primary"></input>
            </div>
        </form>
    </div>)
}