//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



console.log('=====Exercise #1 ======')
console.log('-------SOLUTION A-------')
function findWords(str, arr){
    let found_names =  arr.map(i =>{
        return (str.includes(i) ? "matched dog_name" : "No matches")
    })
    
    return found_names
}

console.log(findWords(dog_string, dog_names))

console.log('-------SOLUTION B-------')
function findWords2(str, array){
for(i = 0; 1, array.length; i++){
    return str.includes(array[i]) ? "Matched dog_names" : "No matches"
    }
}
console.log(findWords2(dog_string, dog_names))


console.log('-------SOLUTION C-------')

function findWords3(string1, array1){
    let string2 = string1.replace(/[_\W]+/g, " ");  //regex to eliminate non alhpanumeric characters
    console.log(string2)
    let array2 = string2.split(" ")
    console.log(array2)
    console.log(array1)

    let discovered_names = array1.map(i =>{
        return (array2.includes(i) ? 'Matched dog_names' : 'No matches')
    })

    return discovered_names

}

console.log(findWords3(dog_string, dog_names))



console.log('=====Exercise #2 ======')
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Given

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(list1){
    for(i = 0; i < list1.length; i++){
        if(i % 2 == 0){
            list1.splice(i, 1, "even index")
        }
    }
    return list1
}
console.log(replaceEvens(arr))

