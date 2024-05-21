/*1. Create a function to check if two objects are equal 
● Example
○ Input : { a: 2 } & { a: 1 }
○ Output: false
● Example
○ Input : { a: “Hello” } & { a: 1 }
○ Output: false
● Example
○ Input : { a: 1 } & { a: 1 }
○ Output: true*/
function checkEqual(obj1, obj2){
    if(typeof obj1 === 'object'){
        let flag = true

        for(let key in obj1){
            if(!obj2[key] || obj1[key] != obj2[key]){
                flag = false
                break
            }
        }
        return flag
    }
    return obj1 === obj2
}

console.log(checkEqual({a:2},{a:1}))
console.log(checkEqual({a:1},{a:1}))
console.log(checkEqual({a:"Hello"},{a:1}))
console.log(checkEqual({a:1, b:3},{a:1, b:3}))
console.log(checkEqual('hello','hello'))

/*2. Create a function to get the intersection of two objects
● Example
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 }
*/
function intersectObject(obj1, obj2){
    let intersection = []
    for(let item of obj2){
        if(obj1.has(item)){
            intersection.add(item)
        }
    }
    return intersection
}

console.log(intersectObject({ a:1, b:2 }, { a:1, c:3 }))

/*3. Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example : 
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result : 
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]*/
function mergeArray(arr1, arr2){
    let merged = [...arr1, ...arr2]
    //console.log(merged)
    let result = []

    for(let i = 0; i < merged.length; i++){
        let flag = true
        for(let j = i+1; j < merged.length; j++){
            if(i != j && merged[i].name == merged[j].name){
                flag = false
                break
            }
        }

        // true
        if(flag){
            result.push(merged[i])
        }
    }

    return result
}

console.log(mergeArray([
    { name: 'Student 1', email: 'student1@mail.com' }, 
    { name: 'Student 2', email: 'student2@mail.com' }
],[
    { name: 'Student 1', email: 'student1@mail.com' }, 
    { name: 'Student 3', email: 'student3@mail.com' }
]))

/*4. Create a function that can accept input as an array of objects and switch all values into property and 
property into value
● Example : 
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]*/
function switchObj(objectArr){
    let result = []
    for(let item of objectArr){
        //console.log("Item --> ", item)
        let newObj = {}
        for(let key in item){
            //console.log("Item in object --> ", key, item[key], " - ", item)
            newObj[item[key]] = key
        }

        result.push(newObj)
    }

    return result
}

console.log(switchObj([
    {name:'david', age:20},
    {name:'noah', age:95}
]))

/*5. Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120*/
function factorial(num){
    if(num == 0){
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))