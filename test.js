// q2 ////////////
// const array = [1, [2, [3, 4], 5], 6];

// let flatternArray = [];
// array.map(a => {
//   if (Array.isArray(a)) {
//     a.map(b => {
//       if (Array.isArray(b)) {
//         b.map(c => {
//           flatternArray.push(c);
//         });
//       } else {
//         flatternArray.push(b);
//       }
//     });
//   } else {
//     flatternArray.push(a);
//   }
// });

// console.log(flatternArray);

// q2 ////////////
// const pairNumbersToTarget = (arr, target) => {
//   let newArray = [];

//   arr.map((i, index) => {
//     if (arr[index] + arr[index + 1] == target) {
//       newArray.push([arr[index], arr[index + 1]]);
//     }
//   });

//   return newArray;
// };

// console.log(pairNumbersToTarget([2, 4, 3, 8, 6, 1], 7));
