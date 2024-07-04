import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white shadow-md border-t-2 border-primary">
            <div className="container mx-auto px-4 py-4 text-center">
                <p className="text-gray-600">© 2024 JRS AUTO CORP. All rights reserved.</p>
                <nav className="space-x-4">
                    <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
                    <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
                </nav>
            </div>
        </footer>
    )
}
