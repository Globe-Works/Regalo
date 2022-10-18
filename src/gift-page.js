export default GiftPage = () => {
    let giftsObj;
    fetch('http://localhost:3000/api/gift',{
    })
    .then((response) => {
        response.json();
    })
    .then((data) => {
        console.log(data);
        giftsObj = data;
    })
    .catch((err) => {
        console.log('Error occurred in Gift Page fetch: ',err);
    })
    const gifts = [];
    for (key in giftsObj){
        let { name, img, link, notes } = key
        let props = { name, img, link, notes}
        gifts.push(<Gift props={props} />);
    }

    return (
        <div id='gift-page'>
            <h1>Gift Ideas</h1>
            <section>
                {gifts}
            </section>
        </div>
    );
}