//Веб-сервис===================================

// Это программа которая организовывает взаимодействует между сайтами(информация из одного портала передаеться на другой портал) используя XML и  JSON при помощи  SOAP протокола или Rest-архитектурный стиль.
//
//SOAP - протокол обмена произвольными сообщениями в формате XML(состоти из XCD - это XML файл. WSDL - описывает структуру веб-сервиса )
// Rest-архитектурный стиль, позволяет записывать инф. в более удобном формате и который занимает меньше места и повышает производительность нашей систем.С помощью его описываем структуру передачи информации у веб-сервисов
//RESTfull - характеристики веб-сервисов.Это вебсервис который отвечает требованиям Rest
//Разница меду архитектурным стилем и протоколам - к первому не применяеться жесткие правила и нет  WSDL
//  использует JSON

//Отличия: Rest исользует такие форматы HTML, XML, JSON и только текстовые форматы, работает  только с HTTP и HTTPS а SOAP с многими протоколами и больше возможностей по безопасностей.

//API =======================================================

//API - контракт который рассказываем нам как можно общаться с это системой, набор функций ...включает в себя:
// 1. Операции
// 2. Данные на входе
// 3. Данные на выходе
// Мы изучаем сторонню API делаем запрос к нему и получаем данные(наши веб-сервисы начинают работать передавать данные или получать, у нас может быть или SOAP или Rest веб-сервис)

//Разница между службами и процессами: первый не зависит от сеанса пользователя


//Клиент-серверная архитектура======================

//Двух уровневая - клиент+сервер
//Трех уровневая - клиент+сервер+база данных

// Типы клиентов=====================================

//Тонкий клиент - переносит большую часть задач обратки информации на сервер..вся бизнес логика расположена на компьютере сервера...клиент протстое программное обеспечение которое  отсылает запросы на сервер 
//Толстый клиент - сервер являеться хранилищем данных, вся обработка и представлению этих данных переноситьсяна машину клиента/содержиться вся основная бизнес логика/идет запрос данных на сервак он дальше на базу и она передает эти данные 