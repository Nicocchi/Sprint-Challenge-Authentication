import React from "react";

const Jokes = (props) => {
    return (
        <div>
            <h1>{props.joke.type}</h1>
            <p>{props.joke.setup}</p>
            <p>{props.joke.punchline}</p>
        </div>
    )
}

export default Jokes;