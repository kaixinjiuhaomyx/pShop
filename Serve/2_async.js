// async function timeout(){
//     // return '1'
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             console.log(1);
//             resolve();
//         },3000)
//     }
//     );
// }
// // console.log(timeout()); //Promise { '1' } promise对象

// timeout().then(result =>{
//     console.log(result);
// });
// console.log(2);

// //////////////////////////////
function timeout(){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(1);
            resolve();
        },3000)
    })
}    

async function fn(){
    await timeout();
    console.log(2);
}

fn();


