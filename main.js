const paragraphe = document.createElement('p');
const app = document.querySelector('#app');

paragraphe.textContent = "hello";
// document.body.appendChild(paragraphe);
app.appendChild(paragraphe);

let paragraphe2 = document.createElement('p');
paragraphe2.textContent = "coucou";
// document.body.appendChild(paragraphe);
app.appendChild(paragraphe2);

function createCustomElement(text, elementType) {
  console.log(text)
  const p = document.createElement(elementType);
  p.textContent = text;
  document.querySelector('#app').appendChild(p)
}

createCustomElement('salut', 'p');

// 1 n'étant pas une balise
// createCustomElement('bonjour', 1);


// .concat()
// let tmp = 0

// function concatener(tmp, tmp2){
//   for (let i = 0; i < tmp2.length; i++) {
//     tmp.push(tmp2[i]);
    
//   }
//   console.log(tmp)
// }
// concatener([1,2,3], [4,5,6]);


// .some()

// let tmp = [1,2,3];

// function some(tmp){
//   for (let i = 0; i < tmp.length; i++) {
//    if (tmp[i] === 2) {
//     console.log(true);
//     return true;
  
//    } 
    
//   }
//   console.log(tmp());
// }
// some(tmp);


// let tmp = ["abc", "cde", "obs","sad","doe"];

// function filtrer(tmp, request){
//   return tmp.filter(function (el){
//     return el.toLowerCase().indexOf(request.toLowerCase()) !== -1;
//   })
// }

// console.log(filtrer(tmp, "a"));


// .find()

// let tmp = [1,9,5,11,8,71,14];
// let otherTmp = [];

// function findThefirstWho(tmp, otherTmp) {

//   for (let i = 0; i < tmp.length; i++){

//     if (tmp[i] > 10) {
//       otherTmp.push(tmp[i]);
//       return tmp;
//     }
//   }
  
// }


// findThefirstWho(tmp, otherTmp);
// console.log(otherTmp);


// .reverse()

// let tmp = [8,1,2,3,15];
// let otherOne = [];
// function retourneToi(tmp, otherOne) {
//   for (let i = tmp.length-1; i >= 0; i--) {
//     otherOne.push(tmp[i]);
    
//   }
  
// }

// retourneToi(tmp, otherOne);
// console.log(otherOne);


// Tri à bulles

// let tmp = [9,7,1,5,6,4,8,3,2,10];
// let a = 0;
// let b = 0;
// let c = 0;

// function tri_a_bulles(tmp){
//   for (let i = 0; i < tmp.length; i++) {
//     for (let j = 0; j < tmp.length; j++) {
//       if (tmp[j+1] < tmp[j]) {
    
//         // a = tmp[j] ;
//         // b = tmp[j+1] ;
//         // c = a;
//         // a = b;
//         // b = c;
//       }
      
//     }
    
//   }
// }
// tri_a_bulles(tmp);
// console.log(tmp)


// .reduce()


// let tmp = [5,5,5];
// let resultReduce = [];
// let total = 0;

// function reduceMeThat(tmp, result) {
  
//   for (let i = 0; i < tmp.length ; i++){
//      total += tmp[i];
//   }
//   result.push(total);
// }
// reduceMeThat(tmp, resultReduce);
// console.log(resultReduce);