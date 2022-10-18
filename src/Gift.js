export default Gift = props => {
    //Individual Gift Items
    return(
        <div class="gift">
            <h2>{props.name}</h2>
            <p>Link: <a href={props.link}>{props.link}</a></p>
            <p>Notes: {props.notes}</p>
        </div>
    )
}
