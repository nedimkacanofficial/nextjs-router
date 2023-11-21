import React from 'react'
import UserTemplate from '../user_template/page'

export default function HomePage() {
    return (
        <UserTemplate>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1>Hello NextJS Homepage</h1>
            </main>
        </UserTemplate>
    )
}
