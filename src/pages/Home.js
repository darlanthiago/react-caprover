import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <h1>Welcome to my React App!</h1>
            <p>This is the Home page.</p>
            <Link to="/about">
                About
            </Link>
        </div>
    )
}
