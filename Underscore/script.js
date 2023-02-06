$(function () {
    var peopleList = $(".people-list");
    var getDecisionsButton = $(".get-decisions");
    var decision1 = $(".decision1");
    var decision2 = $(".decision2");
    var decision3 = $(".decision3");
    var decision4 = $(".decision4");

    var people = [
        {name: "Вавила", age: 20},
        {name: "Герасим", age: 30},
        {name: "Артамон", age: 15},
        {name: "Сергей", age: 19},
        {name: "Матвей", age: 45},
        {name: "Петр", age: 25},
        {name: "Вавила", age: 16},
        {name: "Герасим", age: 35},
        {name: "Сергей", age: 27},
        {name: "Петр", age: 27}
    ];

    _.each(people, function (person, index) {
        peopleList.append(person.name + ", " + person.age);
        peopleList.append("<br>");
    })

    var peopleAverageAge = _.chain(people)
        .reduce(function (sum, person) {
            return sum + person.age;
        }, 0)
        .value() / _.size(people);

    var from20To30AscendingSortedPeople = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    var from20To30DescendingSortedPeopleNames = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .map("name")
        .uniq()
        .reverse()
        .value();

    var namesCountObject = _.countBy(people, "name");

    getDecisionsButton.click(function () {
        decision1.append(peopleAverageAge);
        decision2.append(JSON.stringify(from20To30AscendingSortedPeople));
        decision3.append(from20To30DescendingSortedPeopleNames.join(", "));
        decision4.append(JSON.stringify(namesCountObject));
    });
});