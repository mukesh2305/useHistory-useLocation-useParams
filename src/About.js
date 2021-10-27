import React from 'react'
import { useLocation, useHistory } from 'react-router'
const About = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    const goBackHandle = () => {
        history.push('/'); // it push to the location we want ot go suppose we want to go to the location og /home than it push to thw home location or home page
    }
    console.log(location);
    return (
        <>
            <div>
                About
            </div>
            <div>Location = {location.pathname}</div>
            <div>from = {location.state.from}</div>
            <button onClick={goBackHandle}>Go Back</button>
        </>
    )
}

export default About
