export default function sortCallsByLongestDuration(calls) {
  let callTimes = calls.map((i) => {
    let callTime = JSON.parse(window.localStorage.getItem(i._id))

    let totalTimeConcat = parseInt(
      '' + callTime.hours + callTime.minutes + callTime.seconds
    )
    return {
      callId: i._id,
      callTime: totalTimeConcat,
    }
  })

  let sortedByCallDuration = callTimes.sort((a, b) => b.callTime - a.callTime)

  return sortedByCallDuration
}
