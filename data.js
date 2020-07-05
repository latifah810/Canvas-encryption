
// 5 * 7
// let messageData = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
// ]
// console.log(messageData)
// //A
// messageData[4][0] = 1
// console.log(" new ")
// console.log(messageData)

/* A
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
*/

/* B
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
*/
// let resevedMessageData = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [1,0,0,0,0,0,0],
//     [1,0,0,0,0,0,0],
// ]

// let bLetterData = [
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0],
//     [1,0,0,0,0,0,0],
//     [1,0,0,0,0,0,0],
// ]

// switch (resevedMessageData) {
//     case bLetterData:
//         console.log("this is a B")
//         break

// }



function SetUp(message, time) {
    let messageData = [] ;
    let counter =  message.lenghth-1 ;
    while(counter) {
        messageData[counter] = {
            unicode:message.charCodeAt(counter), 
            index: counter }
            counter++;
    }
     encryption(messageData , Time)
}

function encryption(messageData , Time){
}


function drawEncryptedMessage(messageData) {

}

function readEncryptedMessage(image) {

}

function decryption(time) {
    //decryption methed = f-1 number
    //draw decrypted message
    // return messageData
    switch () {
        case "a":
            messageData = [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
            ]
            while (time > 0) {
                time--
                messageData[4].unshift(0)
                messageData[4].pop()
            }
            
            break

        default:
            break
    }
}

let encryptedMessage = encryption("a" , 3)
let decryptedMessage = decryption(0)

console.log(encryptedMessage)