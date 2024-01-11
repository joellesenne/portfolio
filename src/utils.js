export function useScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
export function useGetYear() {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2019) {
        return `2019-${currentYear}`;
    }
    return String(currentYear);

}