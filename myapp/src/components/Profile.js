import { profiles } from "../util/fake";

export function ProfileTable(){
    let items = profiles;
    return (<div>
        <div className="row">
            {/* <div className="col-2"> */}
                    {items.map((value,index) => <div className="col-4"><Profile key = {index} prof = {value}/></div>)}
            {/* </div> */}
        </div>
    </div>)
}

export function Profile(props) {
    let prof = props.prof;
    return (<div>
        <div className="card" style={{width: '18rem'}}>
            <img src={prof.imageUrl} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Name: {prof.name}</h5>
                <p>Email: {prof.email}</p>
                <p>Occupation: {prof.occupation}</p>
                <p>Location: {prof.address?.city}, {prof.address?.state}</p>
            </div>
        </div>
    </div>)
}