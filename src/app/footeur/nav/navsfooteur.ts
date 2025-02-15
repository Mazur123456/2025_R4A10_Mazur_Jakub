import { InfoNavs } from "./navsinfofooteur";

export const allNavs: InfoNavs[] = [
    {
        title: "Compagny",
        listesPages: [{ titleLink: "About", href: "#" },
                      { titleLink: "Testimonials", href: "#" },
                      { titleLink: "Find a doctor", href: "#" },
                      { titleLink: "Apps", href: "#" }]
    },
    {
        title: "Region",
        listesPages: [{ titleLink: "Indonesia", href: "#" },
                      { titleLink: "Singapore", href: "#" },
                      { titleLink: "Hongkong", href: "#" },
                      { titleLink: "Canada", href: "#" }]
    },
    {
        title: "Help",
        listesPages: [{ titleLink: "Help center", href: "#" },
                      { titleLink: "Contact support", href: "#" },
                      { titleLink: "Instructions", href: "#" },
                      { titleLink: "How it works", href: "#" }]
    }

]