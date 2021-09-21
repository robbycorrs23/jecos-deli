export default function Hours () {
    const today = new Date();
    const time = today.getHours()


    return (
        <>
            <h3>Hours</h3>
            <div>
                <p>Currently {time < 6 || time >= 15 ? "Closed!" : "Open!"}</p>
                <div>
                    <p>Monday-Sunday</p>
                    <p>6:00am-3:00pm</p>
                </div>
            </div>
        </>
    )
}