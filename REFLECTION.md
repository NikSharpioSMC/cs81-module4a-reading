//Nik Sharpio
//Santa Monica College - Summer 2025 - CS81 
//Module 4 Assignment 4A: Review readingTracker.js

# Code Structure Reflection

## What was the most helpful aspect of this code's structure?

The most helpful aspect of this code's structure was the **clear separation of concerns** with each function having a single, well-defined purpose. Each function does exactly one thing:

- `addReadBook()` - only adds entries
- `totalReadingMinutes()` - only calculates totals
- `mostReadBook()` - only finds frequency
- `printDailySummary()` - only displays data

This modular approach made it easy to understand what each piece of code was responsible for. The **consistent data structure** (array of objects with the same properties: day, book, minutes) also made it straightforward to see how data flows between functions. The use of descriptive function names immediately communicated their purpose without needing to read the implementation details.

## What part was confusing or took longer to understand?

The most confusing part was the **two-step process in `mostReadBook()`** - it wasn't immediately obvious why two separate loops were needed. The first loop builds a frequency map (`bookCounts` object), and the second loop finds the maximum. This pattern of "transform data, then analyze" took a moment to grasp.

Additionally, the **edge case handling** (or lack thereof) was confusing. The function returns `null` for empty arrays and doesn't handle ties between books, which could lead to unexpected results. The `for...in` loop iteration order isn't guaranteed, making the tie-breaking behavior unpredictable.

The **global state modification** in `addReadBook()` was also potentially confusing - the function modifies the global `readingLog` array rather than returning a new array, which could lead to unexpected side effects if not understood clearly.