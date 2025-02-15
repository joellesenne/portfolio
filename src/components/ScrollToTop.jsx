import { useScrollToTop } from "../hooks/useScollToTop.jsx";

export  default function ScrollToTop() {
    const { isVisible, scrollToTop} = useScrollToTop(300);
    return (
        <>
            <button
              className="scroll"
              style={{ display: isVisible ? "block" : "none" }}
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll to top"
              title="Scroll to top"
            />
        </>
    )
}