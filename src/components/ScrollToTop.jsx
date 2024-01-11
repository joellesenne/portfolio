import { useScrollToTop } from "../utils";
import { UseScrollToTop } from "../hooks/UseScollToTop";

export  default function ScrollToTop() {
    const {isVisible} = UseScrollToTop();
    return (
        <>
            {isVisible && (
                <button
                    className="scroll"
                    onClick={useScrollToTop}
                    type="button"
                />
            )}
        </>

    )
}