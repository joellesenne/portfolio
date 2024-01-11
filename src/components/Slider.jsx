export  default function Slider() {
    const sliderTabs = [
        {
            id: "project",
            title: "Project",
            subTittle: "A concentrate of projects carried out",
            url: "https://projects.joellesenne.dev"
        },
        {
            id: "lab",
            title: "Lab",
            subTittle: "Various coding experiments and dems",
            url: "https://lab.joellesenne.dev"
        },
        {
            id: "blog",
            title: "Blog",
            subTittle: "A concentrate of reflection, tutorials and watches",
            url: "https://blog.joellesenne.dev"
        },
        {
            id: "photos",
            title: "Photos",
            subTittle: "A collection of Photos & Graphs",
            url: "https://photos.joellesenne.dev"
        },
        {
            id: "about",
            title: "About",
            subTittle: "My passion lies in creating animations and small websites",
            url: "https://cv.joellesenne.dev"
        }
    ]
    return (
        <>
            {sliderTabs.map((tab, index) => (
                <section
                    key={index}
                    id={tab.id} className="slider scroll-snap js-slider">
                    <h2 className="slider-title glitch-text" data-text={tab.title}>{tab.title}</h2>
                    <p>{tab.subTittle}</p>
                    <form action={tab.url} method="get" target="_blank">
                        <button className="slider-link blob-animation" type="submit">see more</button>
                    </form>
                </section>
            ))}
        </>
    );
}