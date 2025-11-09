# Настройка Google Sheets для сбора email

## Шаг 1: Создай Google Spreadsheet

1. Перейди на [Google Sheets](https://sheets.google.com)
2. Создай новую таблицу с названием "WebVoice Early Access"
3. В первой строке добавь заголовки:
   - A1: `Email`
   - B1: `Timestamp`

## Шаг 2: Создай Google Apps Script

1. В таблице нажми **Extensions** → **Apps Script**
2. Удали весь код и вставь следующий:

```javascript
function doPost(e) {
  try {
    // Получаем активную таблицу
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Парсим данные из запроса
    const data = JSON.parse(e.postData.contents);

    // Добавляем новую строку с данными
    sheet.appendRow([
      data.email,
      data.timestamp
    ]);

    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Возвращаем ошибку
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Нажми **Save** (значок дискеты)

## Шаг 3: Деплой скрипта

1. Нажми **Deploy** → **New deployment**
2. Выбери тип: **Web app**
3. Настройки:
   - **Description**: WebVoice Email Collection
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Нажми **Deploy**
5. **Появится предупреждение "Google hasn't verified this app"** - это нормально!
   - Нажми **Advanced** (внизу слева)
   - Нажми **Go to [название проекта] (unsafe)**
   - Нажми **Allow** для предоставления доступа
6. Скопируй **Web app URL** (выглядит как: `https://script.google.com/macros/s/...`)

## Шаг 4: Обнови код в HomePage.jsx

В файле `src/pages/HomePage.jsx` найди строку:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```

И замени `YOUR_GOOGLE_SCRIPT_URL_HERE` на скопированный URL из шага 3.

## Готово!

Теперь при отправке формы email будет сохраняться в Google Sheets.

## Тестирование

1. Открой сайт в браузере
2. Введи email и нажми "Get Early Access"
3. Проверь, что в Google Sheets появилась новая строка с email и временем
4. На сайте должно появиться сообщение: "Thanks! We will write you soon"
