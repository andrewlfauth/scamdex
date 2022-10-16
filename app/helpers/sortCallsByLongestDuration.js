export default function sortCallsByLongestDuration(calls) {
  let callTimes = calls.map((i) => {
    let callTime = JSON.parse(window.localStorage.getItem(i._id))

    let hoursInSeconds = callTime.hours * 60 * 60
    let minutesInSeconds = callTime.minutes * 60

    return {
      callId: i._id,
      callTime: hoursInSeconds + minutesInSeconds + callTime.seconds,
    }
  })

  let sortedByCallDuration = callTimes.sort((a, b) => b.callTime - a.callTime)

  return sortedByCallDuration
}
