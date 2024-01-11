import { useGetYear } from "../utils";
import ToggleDarkMode from "./ToggleDarkMode";

export  default function Footer() {
    return (
        <footer className="footer scroll-snap">
            <h3>© {useGetYear()} - All rights reserved <br/> <a href="/">Joël Lesenne</a></h3>
            <ToggleDarkMode/>
        </footer>
    )
}