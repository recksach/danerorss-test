const archetypes = {
    caregiver: { name: "Заботливый", description: "Вы заботитесь о других и стремитесь помочь всем вокруг.", colors: "зеленый, синий", items: "теплые одеяла, уютные кресла" },
    hero: { name: "Герой", description: "Вы смелы и стремитесь достигать великих вещей.", colors: "красный, золотой", items: "мечи, щиты" },
    creator: { name: "Творец", description: "Вы креативны и любите создавать что-то новое.", colors: "фиолетовый, оранжевый", items: "краски, кисти" },
    ruler: { name: "Правитель", description: "Вы любите контроль и порядок.", colors: "черный, серебряный", items: "короны, троны" },
    sage: { name: "Мудрец", description: "Вы стремитесь к знаниям и делитесь ими с другими.", colors: "синий, серый", items: "книги, очки" },
    jester: { name: "Шут", description: "Вы веселы и любите развлекаться.", colors: "желтый, красный", items: "шапки с бубенцами, клоунские носы" },
    magician: { name: "Маг", description: "Вы верите в магию и чудеса.", colors: "фиолетовый, серебряный", items: "волшебные палочки, хрустальные шары" },
    everyman: { name: "Простолюдин", description: "Вы скромны и просты, как большинство людей.", colors: "коричневый, зеленый", items: "джинсы, футболки" },
    explorer: { name: "Искатель", description: "Вы любите приключения и исследования.", colors: "синий, зеленый", items: "рюкзаки, карты" },
    lover: { name: "Любовник", description: "Вы романтичны и полны страсти.", colors: "розовый, красный", items: "сердечки, свечи" },
    outlaw: { name: "Бунтарь", description: "Вы не любите правила и стремитесь к свободе.", colors: "черный, красный", items: "кожаные куртки, цепи" },
    innocent: { name: "Невинный", description: "Вы искренни и честны.", colors: "белый, голубой", items: "цветы, ангелочки" }
};

function showResult() {
    const form = document.getElementById('archetypeTest');
    const formData = new FormData(form);
    const counts = {};

    for (let [key, value] of formData.entries()) {
        counts[value] = (counts[value] || 0) + 1;
    }

    let maxCount = 0;
    let maxArchetype = "";

    for (let archetype in counts) {
        if (counts[archetype] > maxCount) {
            maxCount = counts[archetype];
            maxArchetype = archetype;
        }
    }

    const resultDiv = document.getElementById('result');
    const archetype = archetypes[maxArchetype];
    resultDiv.innerHTML = `
        <h2>Ваш архетип: ${archetype.name}</h2>
        <p>${archetype.description}</p>
        <p><strong>Рекомендуемые цвета:</strong> ${archetype.colors}</p>
        <p><strong>Рекомендуемые предметы:</strong> ${archetype.items}</p>
    `;
}