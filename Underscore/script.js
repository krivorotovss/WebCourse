$(function () {
    var peopleList = $(".people-list");
    var getSolutionsButton = $(".get-solutions-button");
    var solution1 = $(".solution1");
    var solution2 = $(".solution2");
    var solution3 = $(".solution3");
    var solution4 = $(".solution4");

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

    _.each(people, function (person) {
        peopleList.append(person.name + ", " + person.age);
        peopleList.append("<br>");
    })

    var peopleAverageAge = people.reduce(function (sum, person) {
        return sum + person.age;
    }, 0) / _.size(people);

    var ascendingSortedPeopleAgeFrom20To30 = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    var descendingSortedPeopleNamesFrom20To30 = _.chain(people) //TODO
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .map("name")
        .reverse()
        .uniq()
        .value();

    var namesCountObject = _.countBy(people, "name");

    getSolutionsButton.click(function () {
        solution1.append(peopleAverageAge);
        solution2.append(JSON.stringify(ascendingSortedPeopleAgeFrom20To30));
        solution3.append(descendingSortedPeopleNamesFrom20To30.join(", "));
        solution4.append(JSON.stringify(namesCountObject));
    });
});