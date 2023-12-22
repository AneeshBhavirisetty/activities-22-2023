export function ProfilePic(props) {
    let prof = props.user;
    return (<div>
            <img src={prof.imageUrl} className="card-img-top" />
    </div>)
}