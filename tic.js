// let sign = "x"

// function boxclicked(id) {
//     console.log('box is click & (id)')
//     if (document.getElementById(id).innerText = "") {
//         document.getElementById(id).innerText = sign
//         calResult(sign);
//         if (sign == "x") {
//             sign = "o"
//         } else {
//             sign = "x"
//         }
//     }
// }

// function calResult(sign) {
//     if (document.getElementById('box1').innerText == sign &&
//         document.getElementById('box2').innerText == sign &&
//         document.getElementById('box3').innerText == sign ||
//         document.getElementById('box4').innerText == sign &&
//         document.getElementById('box5').innerText == sign &&
//         document.getElementById('box6').innerText == sign ||
//         document.getElementById('box7').innerText == sign &&
//         document.getElementById('box8').innerText == sign &&
//         document.getElementById('box9').innerText == sign ||
//         document.getElementById('box1').innerText == sign &&
//         document.getElementById('box4').innerText == sign &&
//         document.getElementById('box7').innerText == sign ||
//         document.getElementById('box2').innerText == sign &&
//         document.getElementById('box5').innerText == sign &&
//         document.getElementById('box8').innerText == sign ||
//         document.getElementById('box3').innerText == sign &&
//         document.getElementById('box6').innerText == sign &&
//         document.getElementById('box9').innerText == sign ||
//         document.getElementById('box1').innerText == sign &&
//         document.getElementById('box5').innerText == sign &&
//         document.getElementById('box9').innerText == sign ||
//         document.getElementById('box3').innerText == sign &&
//         document.getElementById('box5').innerText == sign &&
//         document.getElementById('box7').innerText == sign) {

//         alert('winner is found')
//         location.reload();
//     }
// }

let sign = "x"

function boxclicked(id) {
    console.log('box is click $(id)')

    if (document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText = sign
        calResult(sign);
        if (sign == "x") {
            sign = "o"
        } else {
            sign = "x"
        }
    }
}


function calResult(sign) {
    if (document.getElementById('box1').innerText == sign &&
        document.getElementById('box2').innerText == sign &&
        document.getElementById('box3').innerText == sign ||
        document.getElementById('box4').innerText == sign &&
        document.getElementById('box5').innerText == sign &&
        document.getElementById('box6').innerText == sign ||
        document.getElementById('box7').innerText == sign &&
        document.getElementById('box8').innerText == sign &&
        document.getElementById('box9').innerText == sign ||
        document.getElementById('box1').innerText == sign &&
        document.getElementById('box4').innerText == sign &&
        document.getElementById('box7').innerText == sign ||
        document.getElementById('box2').innerText == sign &&
        document.getElementById('box5').innerText == sign &&
        document.getElementById('box8').innerText == sign ||
        document.getElementById('box3').innerText == sign &&
        document.getElementById('box6').innerText == sign &&
        document.getElementById('box9').innerText == sign ||
        document.getElementById('box1').innerText == sign &&
        document.getElementById('box5').innerText == sign &&
        document.getElementById('box9').innerText == sign ||
        document.getElementById('box3').innerText == sign &&
        document.getElementById('box5').innerText == sign &&
        document.getElementById('box7').innerText == sign) {

        alert('winner is found')
        location.reload();
    }
}