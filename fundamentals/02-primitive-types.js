// primitive types: number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total =", total);
// primitive types: string
var title = "Typescript Bootcamp";
var subtitle = "Learn the language fundamentals, build practical projects";
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle);
console.log("Full title: ".concat(fullTitle));
// primitive types: boolean
var published = true;
if (published) {
    console.log("The course is published.");
}
// Type inference
printCourse(title, subtitle, lessonsCount);
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
    console.log("Course: ".concat(fullTitle, " | Lessons: ").concat(lessonsCount));
}
// primitive types: object
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};
console.log("type of course is " + typeof course);
