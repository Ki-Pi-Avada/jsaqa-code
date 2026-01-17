const sorting = require("../../app");

describe("Books names test suit", () => {
  // Исходный тест
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  // Дополнительные тесты для покрытия всех веток

test('should sort empty array', () => {
  expect(sorting.sortByName([])).toEqual([]);
});

test('should sort single element array', () => {
  expect(sorting.sortByName(['Гарри Поттер'])).toEqual(['Гарри Поттер']);
});

test('should handle case insensitive sorting', () => {
  expect(sorting.sortByName(['ГАРРИ', 'властелин'])).toEqual(['властелин', 'ГАРРИ']);
});

test('should keep already sorted array', () => {
  const input = ['А', 'Б', 'В'];
  const result = sorting.sortByName(input);
  expect(result).toEqual(['А', 'Б', 'В']);
  expect(result).toBe(input); // проверяем мутацию
});

test('should handle equal strings after lowercase', () => {
  const input = ['ТЕСТ', 'тест', 'Тест'];
  const result = sorting.sortByName(input);
  expect(result).toEqual(['ТЕСТ', 'тест', 'Тест']); // порядок сохраняется
});

test('should sort reverse order', () => {
  expect(sorting.sortByName(['В', 'Б', 'А'])).toEqual(['А', 'Б', 'В']);
});

test('should handle special characters', () => {
  expect(sorting.sortByName(['#Я', '!А', 'Б'])).toEqual(['!А', '#Я', 'Б']);
});
});