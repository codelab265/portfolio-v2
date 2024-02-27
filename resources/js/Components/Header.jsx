import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePage } from "@inertiajs/react";

const Header = () => {
    const [header, setHeader] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        // remove event
        return () => window.removeEventListener("scroll", scrollYPos);
    });

    return (
        <header
            className={`${
                header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${url == "/" && "bg-[#fef9f5]"}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* nav */}
                        <Nav
                            containerStyles="hidden lg:flex gap-x-8 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        {/* mobile nav */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;