// primitive types: number
const lessonsCount = 10;

const total = lessonsCount + 10;

console.log("total =", total);

// primitive types: string
let title = "Typescript Bootcamp";

let subtitle = "Learn the language fundamentals, build practical projects";

const fullTitle = `Full title: ${title}: ${subtitle}`;

console.log(`Full title: ${fullTitle}`);

// primitive types: boolean
const published = true;

if(published) {
    console.log("The course is published.");
}

// Type inference
printCourse(title, subtitle, lessonsCount);

function printCourse(title: string, subtitle: string, lessonsCount: number) {
    let fullTitle = title + subtitle;

    console.log(`Course: ${fullTitle} | Lessons: ${lessonsCount}`);
}

// primitive types: object
let course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
}

console.log("type of course is " + typeof course);