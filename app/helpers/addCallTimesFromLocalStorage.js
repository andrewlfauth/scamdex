export default function addCallTimesFromLocalStorage(calls) {
  let callWithTimes = calls.map((i) => {
    let callTime = JSON.parse(window.localStorage.getItem(i._id))

    let hoursInSeconds = callTime.hours * 60 * 60
    let minutesInSeconds = callTime.minutes * 60
    let totalTimeInSeconds =
      hoursInSeconds + minutesInSeconds + callTime.seconds

    i.callTime = totalTimeInSeconds
    return i
  })

  return callWithTimes
}
