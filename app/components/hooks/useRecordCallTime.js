import { useState, useEffect } from 'react'

export default function useRecordCallTime(call) {
  const [callTime, setCallTime] = useState()

  useEffect(() => {
    const savedTime = window.localStorage.getItem(call._id)

    if (savedTime) {
      setCallTime(savedTime)
    } else {
      setCallTime({
        hours: 10,
        minutes: 10,
        seconds: 10,
      })
    }
  }, [callTime, call])

  return { callTime }
}
// {hours: 0, minutes: 0, seconds: 0}
