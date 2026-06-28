import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600">
                    My Portfolio
                </h1>

                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
                    <Link to="/about" className="hover:text-blue-500 cursor-pointer">About</Link>
                    <Link to="/projects" className="hover:text-blue-500 cursor-pointer">Projects</Link>
                    <Link to="/contact" className="hover:text-blue-500 cursor-pointer">Contact</Link>
                    <Link to="/chatbot" className="hover:text-blue-500 cursor-pointer">Chatbot</Link>
                             
                </nav>

                <button className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Hire Me
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-2xl">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;