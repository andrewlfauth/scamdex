import { IoSettingsOutline } from 'react-icons/io5'
import { useState, memo } from 'react'
import { useAtom } from 'jotai'

import { chatSettingsAtom } from './index'

function ChatSettings() {
  const [openSettings, setOpenSettings] = useState(false)
  const [settings, setSettings] = useAtom(chatSettingsAtom)

  return (
    <div className='absolute top-2 right-2'>
      <IoSettingsOutline className='text-type-secondary text-lg cursor-pointer' />
      {settings.pauseOnScroll ? 'PAUSE' : 'No Pause'}
      <div className='bg-primary rounded-md p-3 text-type-secondary'>
        <div>
          <span className='text-sm font-semibold mr-2'>Pause on hover</span>
          <input
            type='checkbox'
            onChange={(e) => {
              setSettings((old) => {
                return { ...old, pauseOnHover: e.target.checked }
              })
            }}
          />
        </div>
        <div>
          <span className='text-sm font-semibold mr-2'>Pause on Alt</span>
          <input
            type='checkbox'
            onChange={(e) => {
              setSettings((old) => {
                return { ...old, pauseOnAlt: e.target.checked }
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}

const MemoizedChatSetting = memo(ChatSettings)

export default MemoizedChatSetting
