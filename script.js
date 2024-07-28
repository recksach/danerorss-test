const archetypes = {
    caregiver: { name: "����������", description: "�� ���������� � ������ � ���������� ������ ���� ������.", colors: "�������, �����", items: "������ ������, ������ ������" },
    hero: { name: "�����", description: "�� ����� � ���������� ��������� ������� �����.", colors: "�������, �������", items: "����, ����" },
    creator: { name: "������", description: "�� ��������� � ������ ��������� ���-�� �����.", colors: "����������, ���������", items: "������, �����" },
    ruler: { name: "���������", description: "�� ������ �������� � �������.", colors: "������, ����������", items: "������, �����" },
    sage: { name: "������", description: "�� ���������� � ������� � �������� ��� � �������.", colors: "�����, �����", items: "�����, ����" },
    jester: { name: "���", description: "�� ������ � ������ ������������.", colors: "������, �������", items: "����� � ���������, ��������� ����" },
    magician: { name: "���", description: "�� ������ � ����� � ������.", colors: "����������, ����������", items: "��������� �������, ����������� ����" },
    everyman: { name: "�����������", description: "�� ������� � ������, ��� ����������� �����.", colors: "����������, �������", items: "������, ��������" },
    explorer: { name: "��������", description: "�� ������ ����������� � ������������.", colors: "�����, �������", items: "�������, �����" },
    lover: { name: "��������", description: "�� ���������� � ����� �������.", colors: "�������, �������", items: "��������, �����" },
    outlaw: { name: "�������", description: "�� �� ������ ������� � ���������� � �������.", colors: "������, �������", items: "������� ������, ����" },
    innocent: { name: "��������", description: "�� �������� � ������.", colors: "�����, �������", items: "�����, ���������" }
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
        <h2>��� �������: ${archetype.name}</h2>
        <p>${archetype.description}</p>
        <p><strong>������������� �����:</strong> ${archetype.colors}</p>
        <p><strong>������������� ��������:</strong> ${archetype.items}</p>
    `;
}