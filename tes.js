// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {

  const sum_v1 = input.reduce((acc, number) => acc + number, 0);

  const median = sum_v1 / input.length;

  const pembulatan = Math.ceil(median);
  // floor pembulatan kebawah, ceil pembulatan keatas
  return pembulatan;

}

console.log(result(input));
