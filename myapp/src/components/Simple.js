
export function Greetings(){
    return (<div>
        <h2> Greetings component</h2>
    </div>)
}

export function Hello(props){
    let user = props.username;
    let age = props.age;
    return (<div>
        {
            user != undefined ? <div>Hello {user}</div> : <div> Hello man</div>
        }
        </div>
    )
    return(<div> Hello {user}, your age is : {age}</div>)

}