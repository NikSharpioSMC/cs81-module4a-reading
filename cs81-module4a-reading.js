// Weekly reading log
/*\

Above each function, write a brief summary (2–3 sentences) explaining:
Its purpose: To store daily reading entries for the week as an array of objects.
The inputs it uses: Each entry includes the day of the week, the book title, and the number of minutes read.
The output or result it produces: An array of reading entries that can be used for tracking and analyzing reading logs.
*/
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
]; 
/*
What each function is doing:
How loops interact with the data: Loops are used to iterate over the readingLog array to access and manipulate the reading entries.
What kind of data is stored and accessed: The data stored includes the day of the week, the book title, and the number of minutes read for each entry.
Why specific lines of code are important: Specific lines are important for maintaining the structure of the reading log and ensuring accurate calculations of reading statistics.
*/

// Adds a new reading entry to the log
/*
Its purpose: addReadBook is designed to add a new reading entry to the weekly reading log, by taking the day, book title, and minutes read as inputs.
The inputs it uses: The function takes three parameters: day (string), book (string), and minutes (number).
The output or result it produces: The function updates the global readingLog array with the new entry. The push method is used to append the new entry to the readingLog array.
*/
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}
/*
What each function is doing: addReadBook creates a new entry for the reading log and appends it to the global readingLog array.
How loops interact with the data: Loops are not directly used in this function, but the new entry will be included in future iterations of the log.
What kind of data is stored and accessed: The function stores the day of the week, book title, and minutes read in a new object that is added to the readingLog array.
Why specific lines of code are important: The function is crucial for updating the reading log with new entries, allowing for dynamic tracking of reading habits.
*/

// Returns total minutes spent reading all week
/*
Its purpose: To calculate the total number of minutes read across all entries in the reading log.
The inputs it uses: The function takes in the reading log array as a parameter.
The output or result it produces: The function returns the total number of minutes read across all entries in the log.
*/
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}
/*
What each function is doing: totalReadingMinutes calculates the total number of minutes read by summing the minutes from each entry in the log.
How loops interact with the data: Loops are used to iterate through each entry in the readingLog array to accumulate the total minutes.
What kind of data is stored and accessed: The function accesses the minutes property of each entry in the readingLog array to compute the total.
Why specific lines of code are important: The loop is essential for iterating through the log entries to ensure that all minutes are counted, providing an accurate total reading time.
*/
// Returns the book read most frequently
/*
Its purpose: mostReadBook is designed to determine which book has been read most frequently in the reading log. const bookCounts is used to store the count of each book.
The inputs it uses: The function takes in the reading log array as a parameter.
The output or result it produces: The function returns the book that has been read most frequently.

SUGGESTED IMPROVEMENT: This function has a potential issue - it returns null for empty arrays,
but doesn't handle the case where multiple books are tied for most frequent. Consider these improvements:
1. Return a more descriptive result for empty logs (e.g., "No books found")
2. Handle ties by returning all tied books or the first one encountered
3. Add input validation to ensure 'log' is a valid array
This would make the function more robust and provide clearer results for edge cases.
*/
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}
/*
What each function is doing: mostReadBook counts how many times each book appears in the reading log and returns the book with the highest count.
How loops interact with the data: Loops are used to iterate through the readingLog to count occurrences of each book and then to find the book with the maximum count.
What kind of data is stored and accessed: The function accesses the book titles from each entry in the readingLog and stores counts in an object.
Why specific lines of code are important: The loops are crucial for counting the occurrences of each book and determining which one is read most frequently, providing insights into reading preferences.
*/
// Prints a summary of minutes read per day
/*
Its purpose: To print a summary of the minutes read for each day along with the book title.
The inputs it uses: The function takes in the reading log array as a parameter.
The output or result it produces: The function prints a summary of the minutes read for each day along with the book title.
*/
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}
/*
What each function is doing: printDailySummary iterates through the reading log and prints a summary of the minutes read for each day along with the book title.
How loops interact with the data: Loops are used to go through each entry in the readingLog array to format and display the reading summary.
What kind of data is stored and accessed: The function accesses the day, book title, and minutes read from each entry in the readingLog array.
Why specific lines of code are important: The loop is essential for iterating through the log entries to display the reading summary for each day.
*/ 
// Example usage
addReadBook("Saturday", "Dune", 50);
addReadBook("Sunday", "1984", 35); // Test case: This creates a tie - both Dune and 1984 will have 3 entries each
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
