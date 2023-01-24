// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let count = 0;
    for (let i=0;i<birdsPerDay.length;i++){
      count = count + birdsPerDay[i];
    }
    console.log(count)
    return count;
  }
  
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
  let daysInWeek = 7;
    let startIndex = (week - 1) * daysInWeek;
    let endIndex = startIndex + daysInWeek;
    let weekCount = 0;
    for (let i = startIndex; i < endIndex; i++) {
      weekCount += birdsPerDay[i];
    }
    return weekCount;
  
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
   for (let i = 0; i < birdsPerDay.length; i += 2) {
          birdsPerDay[i] += 1;
      }
    console.log(birdsPerDay)
      return birdsPerDay;
      
  }
    
    
  