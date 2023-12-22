export function User(props) {
    let prof = props.user;
    return (<div>
            <h5 className="card-title">Name: {prof.name}</h5>
    </div>)
}