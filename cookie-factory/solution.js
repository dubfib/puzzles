const input = "(3, 5, 1, 9, 7)";

let number_array = [];
const string_array = input.replace("(", "").replace(")", "").split(", ");
string_array.forEach((value) => number_array.push(parseInt(value)));

const sorted_number_array = number_array.sort((a, b) => b - a);
const output = "(" + sorted_number_array.toString().replaceAll(",", ", ") + ")";

console.log(output);
