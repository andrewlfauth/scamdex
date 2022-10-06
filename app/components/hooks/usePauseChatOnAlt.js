import { useEffect, useCallback } from 'react'
import { useAtom } from 'jotai'

import { chatSettingsAtom } from '../dashboard/tmi/index'

export default function usePauseChatOnAlt(play, pause) {
  const [settings] = useAtom(chatSettingsAtom)

  const handleKeyDown = useCallback(
    function (e) {
      if (e.key === 'p') pause()
    },
    [pause]
  )

  const handleKeyUp = useCallback(
    function (e) {
      if (e.key === 'p') play()
    },
    [play]
  )

  useEffect(() => {
    if (settings.pauseOnAlt) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [settings, handleKeyDown, handleKeyUp])
}
