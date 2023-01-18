(function () {
    var countries = [
        {
            name: "Россия",
            cities: [
                {name: "Новосибирск", population: 1567000},
                {name: "Омск", population: 1125695},
                {name: "Москва", population: 11980000}
            ]
        },

        {
            name: "США",
            cities: [
                {name: "Вашингтон", population: 712816},
                {name: "Нью-Йорк", population: 8467513}
            ]
        },

        {
            name: "Япония",
            cities: [
                {name: "Токио", population: 14043239},
                {name: "Осака", population: 2685481}
            ]
        }
    ];

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = Math.max.apply(null, countries
            .map(function (country) {
                return country.cities.length;
            }));

        var countryNames = {};

        countryNames = countries.filter(function (country) {
            return country.cities.length === maxCitiesCount
        });

        return countryNames;
    }

    console.log("Страна(ы) с максимальным количеством городов:");
    console.log(getCountriesWithMaxCitiesCount(countries));

    function getCountriesAndPopulation(countries) {
        var citiesPopulationSum = {};

        countries.forEach(function (country) {
            citiesPopulationSum[country.name] = country.cities
                .reduce(function (sum, city) {
                    return sum + city.population;
                }, 0);
        });

        return citiesPopulationSum;
    }

    console.log("Информация о населении по странам:");
    console.log(getCountriesAndPopulation(countries));
})();