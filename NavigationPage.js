import $ from "jquery";


class NavigationPage {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        this.lastScroll = 0;
        let self = this;
        $(".nav-tab").click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkHeaderPosition();
        this.findCurrentTabSelector();
        this.lastScroll = $(window).scrollTop();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkHeaderPosition() {
        const headerHeight = 75;
        if ($(window).scrollTop() > headerHeight) {
            $(".nav").addClass("nav-scrolled");
        } else {
            $(".nav").removeClass("nav-scrolled");
        }
        let offset =
            $(".header").offset().top +
            $(".header").height() -
            this.tabContainerHeight -
            headerHeight;
        if (
            $(window).scrollTop() > this.lastScroll &&
            $(window).scrollTop() > offset
        ) {
            $(".nav").addClass("nav-move-up");
            $(".nav").removeClass("nav-top-first");
            $(".nav").addClass("nav-top-second");
        } else if (
            $(window).scrollTop() < this.lastScroll &&
            $(window).scrollTop() > offset
        ) {
            $(".nav").removeClass("nav-move-up");
            $(".nav").removeClass("nav-top-second");
            $(".nav").addClass("nav-top-first");
        } else {
            $(".nav").removeClass("nav-move-up");
            $(".nav").removeClass("nav-top-first");
            $(".nav").removeClass("nav-top-second");
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $(".nav-tab").each(function () {
            let id = $(this).attr("href");
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom =
                $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if (
                $(window).scrollTop() > offsetTop &&
                $(window).scrollTop() < offsetBottom
            ) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css("width");
            left = this.currentTab.offset().left;
        }
        $(".nav-tab-slider").css("width", width);
        $(".nav-tab-slider").css("left", left);
    }
}

export default NavigationPage