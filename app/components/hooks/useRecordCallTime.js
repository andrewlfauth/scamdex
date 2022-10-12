import { useState, useEffect, useCallback, useRef } from 'react'

import useActiveCall from './useActiveCall'

export default function useRecordCallTime(call) {
  const { activeCall, setActiveCall } = useActiveCall()
  const [callTime, setCallTime] = useState({})
  const [startTimer, setStartTimer] = useState(false)
  const [isSynced, setIsSynced] = useState(false)
  const intervalRef = useRef()

  const addSecond = useCallback(() => {
    let time = callTime

    if (time.seconds === 59) {
      time.seconds = 0
      if (time.minutes === 59) {
        time.minutes = 0
        time.hours++
      } else {
        time.minutes++
      }
    } else {
      time.seconds++
    }
    return { ...time }
  }, [callTime])

  useEffect(() => {
    setStartTimer(false)

    if (window.localStorage.getItem(activeCall._id)) {
      setCallTime(JSON.parse(localStorage.getItem(activeCall._id)))
      setIsSynced(true)
    } else {
      localStorage.setItem(
        activeCall._id,
        JSON.stringify({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      )
      setCallTime({
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
      setIsSynced(true)
    }
  }, [activeCall._id])

  useEffect(() => {
    if (startTimer) {
      intervalRef.current = setInterval(() => {
        setCallTime(addSecond())
        window.localStorage.setItem(activeCall._id, JSON.stringify(callTime))
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [startTimer, callTime, addSecond, activeCall._id])

  return {
    isSynced,
    activeCall,
    setActiveCall,
    startTimer,
    setStartTimer,
    callTime,
  }
}
