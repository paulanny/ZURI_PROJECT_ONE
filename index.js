// Function to update the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];
  
    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayElement.textContent = currentDay;
  }
  
  // Function to update the current UTC time
  function updateCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toUTCString();
  
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    timeElement.textContent = currentUTCTime;
  }
  
  // Call the update functions initially to show the data immediately
  updateCurrentDay();
  updateCurrentUTCTime();
  
  // Update the data every second (1000 milliseconds)
  setInterval(() => {
    updateCurrentDay();
    updateCurrentUTCTime();
  }, 1000);
  