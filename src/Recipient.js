export default Recipient = (props) => {
    //People that the user will be gifting to
    return(
    <div class="recipient">
        <h2>{props.fullName}</h2>
        <p>Birthday: {props.birthday}</p>
        <p>Notes: {props.notes}</p>
    </div>);
}

