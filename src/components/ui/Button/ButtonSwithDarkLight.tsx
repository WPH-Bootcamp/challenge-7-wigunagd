import React, { useEffect } from "react";

const applyThemeClass = (isDark: boolean): void => {
    if (isDark) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};


const updateUIElements = (isDark: boolean): void => {
    const el = document.getElementById("mobilemenutoggle") as HTMLElement | null;
    const imgherodark = document.getElementById("imgherodark") as HTMLImageElement | null;
    const imgherolight = document.getElementById("imgherolight") as HTMLImageElement | null;

    if (el && imgherolight && imgherodark) {
        if (isDark) {
            el.classList.replace("hamburgerlight", "hamburgerdark");
            imgherolight.classList.add("hidden");
            imgherodark.classList.remove("hidden");
        } else {
            el.classList.replace("hamburgerdark", "hamburgerlight");
            imgherolight.classList.remove("hidden");
            imgherodark.classList.add("hidden");
        }
    } else {
        console.warn("Could not find mobilemenutoggle or imghero element.");
    }
};

const ButtonSwitchDarklight: React.FC = () => {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        let initialIsDark = false;

        if (savedTheme === "dark") {
            initialIsDark = true;
        } else if (savedTheme === "light") {
            initialIsDark = false;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            initialIsDark = true;
        }

        applyThemeClass(initialIsDark);
        updateUIElements(initialIsDark);
        
        const handleThemeToggle = () => {
            const isCurrentlyDark = document.documentElement.classList.toggle("dark");

            if (isCurrentlyDark) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }

            updateUIElements(isCurrentlyDark);
        };

        const themeToggleButton = document.getElementById("theme-toggle");
        if (themeToggleButton) {
            themeToggleButton.addEventListener("click", handleThemeToggle);
        }

        return () => {
            if (themeToggleButton) {
                themeToggleButton.removeEventListener("click", handleThemeToggle);
            }
        };
    }, []); 

    useEffect(() => {
        const mynavbar = document.getElementById("mynavbar");

        if (mynavbar) {
            const handleScroll = (): void => {
                if (window.scrollY === 0) {
                    mynavbar.classList.remove("bg-white", "dark:bg-black", "shadow-md");
                } else {
                    mynavbar.classList.add("bg-white", "dark:bg-black", "shadow-md");
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            console.warn("Navbar element with ID 'mynavbar' not found.");
        }
    }, []);


    return (
        <button
            id="theme-toggle"
            className="fab-button flex px-2 py-1 bg-amber-600 hover:bg-amber-600 text-white dark:bg-yellow-600 dark:hover:bg-yellow-600 rounded-full pulse-button"
            aria-label="Toggle dark/light mode"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
        </button>
    );
};

export default ButtonSwitchDarklight;