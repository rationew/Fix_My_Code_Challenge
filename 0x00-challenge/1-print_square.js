#!/usr/bin/node
/*
    Print a square with the character #
    The size of the square must be the first argument 
    of the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

const size = process.argv[2];

if (!size || isNaN(size)) {
  console.log("Please provide a valid size.");
} else {
  // print first row
  let square = "";
  for (let i = 0; i < size; i++) {
    square += "#";
  }
  console.log(square);

  // print remaining rows
  for (let i = 1; i < size; i++) {
    console.log(square);
  }
}

