export default function Friend({friend}) {
    const {name, email} = friend
    const {city,street, suite, } = friend.address
    console.log(name)
    return (
        <div className="card">
            <h4>Name: {name} </h4>
            <h4>Email: {email} </h4>
            <h4>Adress: {street}, {suite}, {city} </h4>


        </div>
    )
}