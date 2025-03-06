import React from 'react'
import { Link } from 'react-router-dom'

export function About() {
    return (
        <div>
            <h1>Welcome to my React App!</h1>
            <p>This is the About page.</p>
            <Link to="/">
                Home
            </Link>
        </div>
    )
}
