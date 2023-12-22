import { ProfilePic } from "./ProfilePic";
import { User } from "./User";

export function Comment(props) {
    let prof = props.comment;
    return (<div>
        <div className="card" style={{width: '20rem'}}>

            <div className="card-body">
            <ProfilePic user = {prof.user}/>
            <User user = {prof.user}/>
                <p>Comment : {prof.text.value}</p>
                <p style = {{color : "green"}}>Like : {prof.text.likes}</p> <p style = {{color : "red"}}>Dislike : {prof.text.dislikes}</p>
                <p>Date: {prof.date}</p>
            </div>
        </div>
    </div>)
}