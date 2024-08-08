const idToWelcome = {
  'sveta_and_andrey': "Дорогие Светлана и Андрей",
  'tatyana_and_victor': 'Дорогие Татьяна и Виктор',
  'alisa_and_sergey': 'Дорогие Алиса и Сергей',
  'yuriy_ivanovich': 'Дорогой Юрий Иванович',
  'nataliya_and_dmitriy': 'Дорогие Наталья и Дмитрий',
  'galina_and_nikolay': 'Дорогие Галина Дмитриевна и Николай Маркович',
  'anastasiya_and_kirill': 'Дорогие Анастасия и Кирилл',
  'yana_and_evgeniy': 'Дорогие Родители',
  'tatyana_and_vasiliy': 'Дорогие Родители',
  "kseniya": "Дорогая Ксения",
  "evgeniy": "Дорогой Евгений",
  "nikolay": "Дорогой Николай",
  "anastasiya_and_ivan": "Дорогие Анастасия и Иван",
  "andrey": "Дорогой Андрей",
  "aleksandra": "Дорогая Александра",
  "yaliya_and_anton": "Дорогие Юлия и Антон",
  "eseniya": 'Дорогая Есения',
  'svetlana_and_petr': 'Дорогие Светлана и Петр',
  'inna': 'Дорогая Инна',
  'denis': 'Дорогой Денис',
  'dmitriy': 'Дорогой Дмитрий',
  'ruslan': 'Дорогой Руслан',
  'aleksey': 'Дорогой Алексей',
  'denis_and_oksana': 'Дорогие Денис и Оксана',
  'dmitriy_and_nataliya': 'Дорогие Дмитрий и Наталья',
  'roman': 'Дорогой Роман',
  'taisiya': 'Дорогие Таисия Дмитриевна',
  'aleksey_and_elena': 'Дорогие Алексей и Елена',
}

// @ts-expect-error: string as index
export const getWelcomeById = (id: string) => idToWelcome[id] ?? ''
