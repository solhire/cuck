/**
 * Utility functions for handling timed events
 */

/**
 * Checks if the current time is at or past the target time (3:45 AM EST)
 */
export function isDDayTime(): boolean {
  // Create date object in local time
  const now = new Date();
  
  // Convert to EST
  const estTime = convertToEST(now);
  
  // Target time: 3:45 AM EST
  const targetHour = 3;
  const targetMinute = 45;
  
  // D-Day date - the date when we switch to D-Day mode
  // Using current date, as we're only concerned with time
  if (estTime.getHours() >= targetHour && 
      (estTime.getHours() > targetHour || estTime.getMinutes() >= targetMinute)) {
    return true;
  }
  
  return false;
}

/**
 * Converts a date to EST/EDT (US Eastern Time)
 */
export function convertToEST(date: Date): Date {
  // Create a new date object that we'll convert to EST
  const estDate = new Date(date);
  
  // Get the UTC time for our date
  const utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  
  // EST is UTC-5, EDT is UTC-4
  // We'll use a general approach that works year-round
  const estOffset = -5; // EST offset in hours
  
  // Adjust the date by the EST offset
  utcDate.setHours(utcDate.getHours() + estOffset);
  
  return utcDate;
}

/**
 * Gets milliseconds until 3:45 AM EST
 */
export function getMillisecondsUntilDDay(): number {
  const now = new Date();
  const estNow = convertToEST(now);
  
  // Create target time for today
  const targetTime = new Date(estNow);
  targetTime.setHours(3, 45, 0, 0); // 3:45:00.000 AM
  
  // If it's already past 3:45 AM EST today, the target is tomorrow
  if (estNow >= targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }
  
  // Get the difference in milliseconds
  return targetTime.getTime() - estNow.getTime();
} 