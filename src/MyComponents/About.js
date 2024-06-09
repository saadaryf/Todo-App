import React from 'react'

const About = (props) => {
    let aboutStyle = {
        paddingTop: '100px',
        margin: '20px'
    }
    return (
        <div style={aboutStyle}>
            This is a Todo App in React Made by {props.name} following tutorial of Code with Harry.
        </div>
    )
}

export default About
