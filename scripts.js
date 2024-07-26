/*1. Создайте переменную price и присвойте ей значение 100. 
Затем создайте переменную discount и присвойте ей значение 0.2 (20%). 
Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".*/
{
  let price = 100;
  let discount = 0.2;
  let result = price - price * discount;
  console.log(`${result} руб, вместо ${price} руб`);
}

/*2. Дана строка: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда 
приемлемые модификации, например, юмористические вставки или слова, 
которые даже отдалённо не напоминают латынь". 
Посчитайте сколько раз в строке встречается символ "п". Выведите кол-во в консоль.*/
{
  let str = "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь";
  let search = 'п';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(search)) {
      count++;
    }
  }
  console.log(count);
}

/*3. Создайте массив с числами и длиной массива от 5 до 8 на выш выбор.
Используйте цикл for, чтобы найти и вывести наименьшее число в массиве. */
{
  let arr = [124, 22, -3, 42, 52, -36, 7];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}

/*4. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя
вложенные циклы выведите в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". */
{
  let arr = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];
   for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(`${arr[i][j]} из ${arr[i + 1][j]}`);
      }
    }
   }
}

/*5. Создайте переменную temperature со случайным значением от -10 до 40. Напишите условие, которое проверяет,
холодно ли (меньше 0) или жарко (больше 30), либо "нормальная температура", и выведите соответствующее сообщение.
Решите задачу с помощью switch. */
{
  let temperature = -2;
  switch (true) {
    case temperature < 0:
      console.log('Холодно');
      break;
      case temperature > 30:
        console.log('Жарко');
        break;
        default:
          console.log("Нормальная температура");
  }
}

/*6. Напишите программу, которая запрашивает у пользователя целое положительное число и выводит
на экран факториал этого числа с помощью цикла for. Например, для числа 5 = 1*2*3*4*5 = 120. */
{
  let userAnswer = +prompt('Введите целое положительное число');
  let factorial = 1;
  
  while (!Number.isInteger(userAnswer) || userAnswer < 0 || isNaN(userAnswer)) {
    userAnswer = +prompt('Только целое положительное число');
  }
  
  for (let i = 1; i <= userAnswer; i++) {
    factorial  *= i;
  }
  
  console.log(factorial);
}


/*7. Создайте строку с названиями городов Беларуси, записывая каждый город через запятую (4 городов будет достаточно).
Создайте массив из данной строки с городами. Используя метод push, добавьте в массив еще 3 города и выведите результат.
 */
{
  let cities = 'Brest,Gomel,Vitebsk,Grodno';
  let arr = cities.split(',');
  arr.push('Mogilev', 'Minsk', 'Svetlogorsk');
  console.log(arr);
}

/*8. Напишите условие, которое проверяет, что переменная age больше 18 и меньше 65.
Если условие выполнено, выведите сообщение о том, что пользователь находится в возрасте трудоспособности. */
{
  let age = 19;
  if (age > 18 && age < 65) { //на случай, если ему уже есть 18, тогда age >= 18 && age < 65
    console.log('Пользователь находится в возрасте трудоспособности');
  }
}

/*9. Создайте массив с названиями месяцев. Используя обратный цикл while,
выведите каждый месяц в консоль, добавить порядковый номер к месяцу, например: "1. Январь". */
{
  let mounths = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
  let i = 0;
  while (i < mounths.length) {
    console.log(`${i + 1}. ${mounths[i]}`);
    i++;
  }
}

{
  let mounths = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];
  let i = mounths.length;
  do {
    i--;
    console.log(`${i + 1}. ${mounths[i]}`);
  }
  while (i > 0) 
}

//не совсем поняла что значит обратный цикл. и сделала как поняла

/*10. Напишите программу, которая ищет заданное число в произвольном массиве длиной 8 и выводит его индекс.
Если число не найдено, выведите сообщение об этом. */
{
  let search = 4;
  let arr = [3, 6, 7, 11, 90, 4, 0, -12];
  let index = arr.indexOf(search);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log('Совпадений не найдено');
  }
}

/*EXTRA TASKS */

/*1. Напишите программу, которая соединяет две строки, представляющие ваше имя и фамилию.
Данные запросите у пользователя через prompt. Выведите на экран: "Имя Фаимилия, добро пожаловать в аккаунт!".
Если пользователь ввел пустые данные, то ничего не выводить. */

{
  let userFirstName = prompt('Введите ваше имя');
  let userLastName = prompt('Введите вашу фамилию');
  if (userFirstName && userLastName) {
    alert(`${userFirstName} ${userLastName}, добро пожаловать в аккаунт!`)
  }
}

/*
2. Напишите условие, которое проверяет, что переменная input, значение в которую записывается через prompt, 
является положительным числом и не равна нулю.Выведите результат в консоль, 
но если пользователь нажимает отмена - вывести "Нет значения". */
{
  let input = +prompt('Введите число');
  if (input && input > 0 &&) {
    console.log(input);
  } if (input === null) {
    console.log("Нет значения");
  }

}

/*3. Создайте переменную day и присвойте ей значение от 1 до 7 (представляющее день недели). 
Напишите условие, которое проверяет, является ли день выходным (суббота или воскресенье) и выведите результат в консоль. */
{
  let day = 5;
 if (day > 5) {
  console.log('Выходной!');
 } else {
  console.log("Работать!");
 }
}

/*4. Создайте любой массив из 8 значений и удалите 2 элемента из массива, начиная с индекса 3, и выведите измененный массив. */
{
  let arr = [5, , 'world', true, 'false', 6, -7, 8];
  let removed  = arr.splice(3, 2);
  console.log(arr);
}
/*

5. Объявите переменные x и y и присвойте им значения 5 и 10 соответственно.
Обменяйте значения переменных между собой и выведите их в консоль. */
{
  let x = 5;
  let y = 10;
  let z = x;
  x = y;
  y = z;
  console.log(x, y); 
}

/*6. Объявите переменную items и присвойте ей массив из 5 строковых значений. Выведите в консоль все элементы массива.*/
{
  let items = ['1', '2', '3', '4', '5'];
   items.map(el => console.log(el));
}

/*7. Объявите переменную isOnline и присвойте ей значение true. Напишите условие,
которое будет выводить в консоль "Пользователь онлайн", если isOnline равно true, иначе "Пользователь не в сети"*/
{
  let isOnline = true;
  if (isOnline) {
    console.log("Пользователь онлайн");
  } else {
    console.log("Пользователь не в сети");
  }
}

/*8. Создайте переменную stringNum со значением "100px".
Преобразуйте это значение в число и выведите результат в консоль (ожидается NaN). */
{
  let stringNum = '100px';
  console.log(+stringNum);
}

/*9. Создайте переменную floatNumber с значением 3.14. Преобразуйте это число в целое и выведите результат в консоль. */
{
  let floatNumber = 3.14;
  console.log(Math.round(floatNumber));
}