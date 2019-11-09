import * as amysPortfolio from "../images/amy-dickson.PNG";
import * as jRLifeCoaching from "../images/jill-ritchie.PNG";
import * as personalWebsite from "../images/personal-website.PNG";

/**
 * Return all personal projects. Organised as an array of length 3 arrays to help
 * with rendering.
 */
export function returnAllPersonalProjects() {
    return [
        [
            {
                photo: amysPortfolio,
                title: "Amy's Portfolio",
                description: "An online portfolio for up and coming architectural technologist Amy Dickson.",
                url: "https://amy-dickson.com/"
            },
            {
                photo: jRLifeCoaching,
                title: "Jill Ritchie - Life Coaching",
                description: "A website to provide information on the business of life coach Jill Ritchie.",
                url: "https://jill-ritchie.com/"
            },
            {
                photo: personalWebsite,
                title: "My Personal Website",
                description: "This website. It has the aim of providing information about me and my work.",
                url: "https://ronanjsmith.com/"
            }
        ],
        [
            // add more projects here...
        ]
    ]
}