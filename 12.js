//================================== Vue.js =========================================

//Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк  открытым исходным кодом  для создания пользовательских интерфейсов. Основная цель Vue – решать задачи уровня представления
// Почему именно он --- он прост в написании да и в понимани... 

// Основными элементами фреймворка являются:

// - Шаблоны;
// - Привязки.

// Для преобразования шаблонов в функции Vue.js использует
// Virtual DOM – копия версии фактического DOM -объекта.
// Virtual DOM отвечает за эффективное определение той части разметки,
// которую необходимо обновить в браузере. Позволяет все изменения проести в нем а потом отрендерить на странице за один проход все изменения. Мы перерендерим только то что изменяем 

//================= Жизненные циклы ========================

//     updateClick: function () {
//         this.counter = this.counter + 1;
//     }
// },
// beforeCreate: function () {
//     console.log('Начало создания');
// },
// created: function () {
//     console.log('Создан экзмепляр'); 
// },
// beforeMount: function () {
//     console.log('Начало подключения');
// },
// mounted: function () {
//     console.log('Подключение завершено');
// },
// beforeUpdate: function () {
//     console.log('Начало обновления');
// },
// updated: function () {
//     console.log('Обновлен экземпляр');
// },
// beforeDestroy: function () {
//     console.log('Начало удаления');
// },
// destroyed: function () {
//     console.log('Удален экземляр');
// }

//================================== Привязки ========================================

//  Связывают данные и бизнес логику с пользовательским интерфейсом;
//  Сводят к минимуму прямое обращение к DOM;
//  Мгновенное обновление при изменении данных.

//================================ Виды привязок Vue.js =================================

// Семантическая
// <p>{{ data }}</p>

// Декларативная
// <p v-text=
// “name”></p>

// Элементы форм
// <input v-model=
// “name”/>

// Привязка CSS
// <p v-bind: class=“class1”></p>

// ================================ Способы передачи данных ================================

// Props https://www.youtube.com/watch?v=Vmw7quCVphw
// Emit {https://medium.com/@modex13/vue-js-2-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8-467383294847 
// Откуда передаем: 

// this.$emit("save", this.yourBid) "save" это метод который запустит нам передачу данных

// Где принимаем: 

// @save="savе" - прописываем в антрибуте нашего компонента который мы импортировали,  @save - это метод  со страницы дочернего элемента/ "savе" - метод на странице родителя(мы его пропишем в методах)       save(value) {
// console.log(value);
//     }
//  }

// this.$router.params


// ============================================== Директивы ========================================

//Директивы — специальные атрибуты для добавления элементам html дополнительной функциональности

//Привязка элементов форм:

// V-model – директива, позволяющая создать двунаправленную привязку в экземпляре Vue.js для cбора и  обработки данных, подключенная к элементам форм.

// Реакция на события:

// V-on2
// Событие – ответная реакция (взаимодействие) на действие, произошедшее со
// стороны пользователя. В экземпляре Vue создаётся новый объект methods
// содержащий поведения, для работы с событиями.


// ================================== Отображение данных =============================================

//Рендеринг – отображение данных в пользовательском интерфейсе.
// Vue.js использует директивы для отображения элементов при получении определённых условий

//Визуализация элементов после загрузки страницы  V-cloak

//Визуализация элементов во время работы приложения V-if, V-show


// ======================= Реакция на изменения данных ============================================

// Watchers(наблюдатели) – специальные функции, которые выполняют контроль за изменением
// значения данных. Пример: она наблюдает за массивом, когда он измениться запускается нужная нам фукция(мы будем менять или что-то еще)


// ========================== Вычисляемые свойства, фильтры ==========================================

// Вычисляемые свойства – функции, результат которых кэшируется (сохраняется в памяти
// браузера), до тех пор, пока меняются значения данных.
// При первом вызове вычисляемого свойства - результат будет сгенерирован и сохранен. При
// повторном вызове – будет возвращаться значение из памяти.
// Computed {prop}- объект экземпляра Vue, содержащий все вычисляемые свойства

// Фильтры – специальные типы функций в Vue.js, предназначенные для общих текстовых
// преобразований при выводе значений в пользовательский интерфейс.
// Filters: {} – объект содержащий функции определения функции фильтрации.
// Фильтры принимают значение и возвращают значение, не меняя его параметр при этом в
// представлении.


//============================================= Компоненты =========================================


//Компоненты – экземпляры Vue с предустановленными опциями и методами, которые позволяют расширить базовые HTML элементы, инкапсулируя в разметку повторноиспользуемый код

// Компоненты представляют этап жизненного цикла, аналогичный Vue.

// JavaScript 

// Vue.component('new-item', {
// template: '<p>Новый параграф</p>'
// })
// var sample = new Vue({
// el: "#app"
// })


// HTML

/* <div id="app" class="col-6 offset-1">
<new-item></new-item>
<new-item></new-item>
</div> */


// ==================================== Элементы компонента ==================================

// API компонента состоит из 4 частей:
// -входные параметры;
// -события;
// -слоты;
// -шаблоны.

// Входные параметры – передают в компонент данные извне.
// События – позволяют компонентам воздействовать на внешнее окружение.
// Слоты позволяют окружению дополнять компоненты новым контентом (используя вложенные
// шаблоны).
// Шаблоны –позволяют определять необходимый контент для замещения.


// ======================================= Свойства экземпляра компонента =========================


// У компонента присутствуют встроенные свойства:
// Data – является функцией и возвращает определенное значение
// Props – содержит в себе пользовательские атрибуты для передачи информации (входные параметры)


                // template: '<span class="input-group">$<input class="input-group" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"></span> ',
                // //Входящие свойства
                // props: ['value'], 

//  !!!!!!!!!!!!и дальше используем в методах 

// Шаблон – разметка, замещенная в HTML странице при подключении
// Методы - объект, содержащий все поведения компонента.
// data: function () { return { count: 0 } }
// methods: { incrementCounter: function () {
// this.counter += 1} }
// props: ['message']
// template: '<span>{{ message }}</span>'

//========================= События ==========================================


// Генерация событий происходит с помощью функции $emit(event)  v-on:increment - используется для прослушивания(отлавливания) событий в родительском компоненте.....this.$emit('increment') прописали в там где слушаем и когда меняеться родительский элемент(например был счетчик, когда он увеличился, то вписанная функция у дочернего элемента будет вызванна.... v-on:increment = твоя функия котороя будет вызываться после изменения родителя)
// Отслеживание сгенерированных событий - функция $on(event)

// ============================ Роутинг =================================


//Во Vue.js за маршрутизацию отвечает отдельный пакет vue-router. Он поддерживает вложенные маршруты к вложенным компонентам, предлагает упрощенное API для навигационных хуков, управляемое поведение скрола и продвинутый контроль переходов.

//Для работы с Ajax-запросами существует плагин vue-resource. Он предоставляет возможности для создания веб-запросов и обработки ответов с помощью XMLHttpRequest или JSONP. Также особенностью плагина является поддержка Promise API и URI шаблонов.


// =============================== State ======================================

//Состояние (State), которое является единственным источником данных для компоненто
//Действия (Actions), которые отлавливают событие, которое произошло, собирают данные с внешних API и запускают нужные мутации.
// Мутации (Mutations) — единственная часть, которая может изменять состояние и, получив данные от Actions, применяет их на состоянии.


// ================================== Свойства объекта Vue =================================

//metods - когда мы там пропишем свою функцию, она будет запускаться при каждом при изменении любого свойства во Vue (да же тех которые не касаються нашей функции)

//computed  - когда мы там пропишем свою функцию, но теперь при изменении состояния Vue будут анализироваться сделанные изменения, и если потребуется то будет запускать твою функию в computed.


// Вычисляемое свойство можно разделить на сеттер и геттер. Геттер возвращает значение, а сеттер устанавливает. По умолчанию свойство имеет только геттер - во всех примерах выше вычисляемое свойство представляет функцию, которая возвращает некоторое значение. Теперь определим и геттер, и сеттер:

//=================================== Состав проекта ========================================

// 1.Файл package.json :
//  a) "dev" - команда в режиме разрабоки,
//  "build" - строит клиент и сервер и строит статические файлы которые будут использованы  с продакшен сборке.
//  "start" - запускаем построенный файлы (те котоорые построены выше командой)
//  "generate" - генерирует статические файлы если мы работаем в SPA.
// b) "dependencies" 
//  "@nuxtjs/axios" -Автоматически устанавливать базовый URL-адрес для стороны клиента и сервера/Предоставляет функцию `setToken` функции` $ axios`, чтобы мы могли легко и глобально установить токены аутентификации. Пакет предоставляет возможность для работы с ajax  запросами асинхронными
//  "core-js" хранилище полиифиловТермин «полифил» означает, что скрипт «заполняет» пробелы и добавляет современные функции.
//  "nodemon" -позволяет автоматически перезапускать сервер при сохранении изменений

//  nuxt.config.js - храним конфигурацию для нащего проекта
//  //ПАПКИ
//  - assest  хранение статических файлов (нейкие картинки) и нескомпилированные файлы LESS, SCSS
//  -components - храним компоненты
//  -layout - содержит лояуты --- макеты для всех наших страниц
//  -middleware -В этой папке необходимо хранить сущности middleware. Они позволяют определять пользовательские функции, которые можно запускать перед отображением страницы или группы страниц (layouts).
//  -pages - содержит наши страницы
//  -plugins -Папка plugins содержит JavaScript-плагины, запускаемые перед созданием экземпляра корневого приложения Vue.js.
//  -static  Папка static содержит статические файлы приложения. Каждый файл в этой папке доступен через /
//  -store - Папка store может содержать файлы Vuex хранилища. Vuex хранилище является опциональным в Nuxt.js. Создайте файл index.js в этой папке, и Vuex хранилище активируется фреймворком автоматически.
 
// <nuxt/> -это типа вью роутер..мы показываем эти компоненмтом место куда нужно рендерить страницу
// Есть иеархия компонентов....самый верхнеуревненвый это лояуты в него вставляються страницы с