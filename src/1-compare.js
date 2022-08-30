const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let [hours, minutes] = startTime.split(':').map(Number);
  minutes += durationMinutes;

  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;

  // wrap around hours
  hours = hours % 24;

  const meetingTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  return meetingTime >= dayStart && meetingTime <= dayEnd;
}

(function () {
  const tests = [
    ["7:00", 15, true],
    ["07:15", 30, true],
    ["7:30", 30, true],
    ["11:30", 60, true],
    ["17:00", 45, true],
    ["17:30", 30, false],
    ["18:00", 15, false]
  ];
  tests.forEach(([date, duration, expectedResult]) => {
    const isPassed = scheduleMeeting(date, duration) === expectedResult;
    console.log(`test case [${date}, ${duration}]: ${isPassed ? 'PASS': 'FAIL'}`);
  });
})();