import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    const { firstname, lastname } = useParams();
    return (
        <div>
            User firstname: {firstname}, lastname: {lastname}
        </div>
    )
}
// const User = ({ match }) => {
//     return (
//         <div>
//             User {match.params.name}
//         </div>
//     )
// }

export default User
