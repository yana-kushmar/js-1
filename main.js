// примитивы:
// string number boolean null undefined NaN Infinity Symbol BigInt
// объекты:
// array function object


// ОБЪЕКТЫ  имееют более сложную структуру
// (могут включать др объекты и примитивы )
//  имеют свойста и методы
// объекты представляют собой ссылочный тип данных ?!

//
// const a = 75
// console.log(typeof a)

// что выведет консоль?
// console.log(100 + "yo") - это седая древность => исп TypeScript
// https://habr.com/ru/company/ruvds/blog/347866/


// React -
const a = [1, 2, 3, 4]// ссылка на ячуйку памяти, в которой лежит объект
a.push(5) //мутация, изменения
console.log(a)

const b = [1, 2, 3, 4] //переносим содержимое исходного массива или копируем
b.push(5)


function logger(prev, current) {
    if (prev !== current) {
        console.log(current)
    }
}

logger(a, b)


//КАК МОЖНО СДЕЛАТЬ НЕПРАВИЛЬНО!!!!!!!!!

const a = [1, 2, 3, 4]
a.push(5) //мутация, изменения
console.log(a)

const b = a
b.push(5)


function logger(prev, current) {
    if (prev !== current) {
        console.log(current)
    } else {
        console.log("всё пропало ")
    }
}

logger(a, b)

////////////////////

const students = [ // prev student
    {
        name: "Bob",
        age: 34,
    },
    {
        name: "Alex",
        age: 32,
    },
]


//CRUD

// add students ("Create")

const NewSt ={
    name: "John",
    age: 31,
}
const CopySt = [...students, NewSt]// current array-students

//update bob name  (to Julia)

const CopySt2 = CopySt.map(st => st.name === "Bob" ? {...st, name: "Julia"} : st) //map return new array
// or
const CopySt2 = CopySt.map(st => {
    if (st.name === "Bob") {
      return   {...st, name: "Julia"}
    } else {
        return st
    }
})

//delete Julia

const CopySt3 = CopySt2.filter(st => st.name !== "Julia") // new Array