import { useEffect, useState } from "react";

export const useScrollToTop = (threshold = 300) => {
    const [isVisible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            setVisible(scrolled > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return {
        isVisible,
        scrollToTop,
    };
};