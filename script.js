let name = prompt('введите свое имя');
let birth = +prompt('год рождения');
let date = +prompt('какой сейчас год?');


function sum(date,birth) {
   let res = date - birth;
    return res;
}

let answer = sum(date,birth);


if (isNaN(birth) || birth > date) {
    alert('ошибка')
} else if (birth == 2020 || birth == 2000 || birth == 1990 || birth == 1980 || birth == 1970 || birth == 1960 || birth == 1950 || birth == 1940 || birth == 1930 || birth == 1920) {
    alert(('Здравствуйте , ' + name ) +  (' Вам ' + answer ) + ' год ');
}else if (birth == 2019 || birth == 2018 || birth == 2017 || birth == 1999 || birth == 1998 || birth == 1997 || birth == 1989 || birth == 1988 || birth == 1987 || birth == 1979 || birth == 1978 || birth == 1976 || birth == 1969 || birth == 1968 || birth == 1967 || birth == 1959 || birth == 1958 || birth == 1957 || birth == 1949 || birth == 1948 || birth == 1947 || birth == 1939 || birth == 1938 || birth == 1937 || birth == 1929 || birth == 1928 || birth == 1927) {
    alert(('Здравствуйте , ' + name ) +  (' Вам ' + answer ) + ' года ');
}else {
    alert(('Здравствуйте , ' + name ) +  (' Вам ' + answer ) + ' лет ');
}
