import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ikon hamburger & close

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Beranda", path: "/" },
        { name: "Loker", path: "/jobs" },
        // { name: "Contact", path: "/contact" },
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="w-full fixed p-3 top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Job<span className="text-blue-500">Finder.</span></h1>

                {/* Menu Tengah (Hidden di Mobile) */}
                <ul className="hidden md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`hover:text-blue-500 pb-2 transition ${location.pathname === item.path ? "border-b-2 border-blue-500 text-blue-500 font-semibold" : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login, Sign Up, & Hamburger */}
                <div className="flex items-center space-x-4">
                    {/* Login & Sign Up (Hidden di Mobile) */}
                    <div className="hidden md:flex space-x-4">
                        {["Login", "Sign Up"].map((text, index) => (
                            <Link key={index} to={`/${text.toLowerCase().replace(" ", "")}`} className="bg-white text-black px-4 py-2 rounded-lg hover:text-blue-500 transition">
                                {text}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button onClick={toggleMenu} className="md:hidden p-2">
                        {menuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-100 w-64 bg-white shadow-lg border-l border-gray-300 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button onClick={closeMenu} className="absolute top-4 right-4">
                    <X className="h-6 w-6 text-black" />
                </button>

                <ul className="mt-16 flex flex-col space-y-6 px-6">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`block text-lg hover:text-blue-500 py-2 ${location.pathname === item.path ? "border-l-4 border-blue-500 pl-2 text-blue-500 font-semibold" : "pl-4"
                                    }`}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Login & Sign Up di Mobile */}
                    {["Login", "Sign Up"].map((text, index) => (
                        <li key={index}>
                            <Link to={`/${text.toLowerCase().replace(" ", "")}`} className="block text-lg hover:text-blue-500 py-2 pl-4" onClick={closeMenu}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
