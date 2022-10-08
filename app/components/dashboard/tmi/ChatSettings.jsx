import { IoSettingsOutline } from 'react-icons/io5'
import { useState, memo, useRef } from 'react'
import { useAtom } from 'jotai'

import { chatSettingsStorageAtom } from './index'

function ChatSettings() {
  const [settings, setSettings] = useAtom(chatSettingsStorageAtom)
  const [showSettings, setShowSettings] = useState(false)

  const channelRef = useRef()
  const pauseOnHoverRef = useRef()
  const pauseOnAltRef = useRef()
  const bufferRef = useRef()

  const handleSaveSettings = () => {
    const channel = channelRef.current.value
    setSettings((old) => ({ ...old, channel }))
  }

  return (
    <div className='absolute top-2 right-2'>
      <IoSettingsOutline
        className={`${
          showSettings ? '-rotate-90 text-accent-blue' : 'text-type-secondary'
        } text-lg duration-300 cursor-pointer`}
        onClick={() => setShowSettings(!showSettings)}
      />

      {showSettings && (
        <div className='p-3 rounded-md bg-primary text-type-secondary absolute right-4 top-6 w-40'>
          {/* <div className='flex flex-col'>
            <label htmlFor='channel' className='text-sm font-semibold'>
              Channel
            </label>
            <input
              ref={channelRef}
              type='text'
              defaultValue={settings?.channel}
              className='w-32 px-2 text-sm bg-transparent border-b outline-none border-type-secondary text-type-white'
            />
          </div> */}

          <div className='flex justify-between mt-2'>
            <span className='mr-2 text-sm font-semibold'>Pause on hover</span>
            <input
              ref={pauseOnHoverRef}
              type='checkbox'
              checked={settings.pauseOnHover}
              disabled={settings.buffer}
              onChange={(e) => {
                setSettings((old) => ({
                  ...old,
                  pauseOnHover: e.target.checked,
                }))
              }}
            />
          </div>

          <div className='flex justify-between mt-2'>
            <span className='flex mr-2 text-sm font-semibold '>
              Pause on
              <svg
                className='ml-[6px]'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='1'
                  y='1'
                  width='22'
                  height='22'
                  rx='2'
                  stroke='#6A696A'
                  strokeWidth='2'
                />
                <path
                  d='M8.14773 18V6.36364H12.5114C13.4053 6.36364 14.1553 6.5303 14.7614 6.86364C15.3712 7.19697 15.8314 7.6553 16.142 8.23864C16.4564 8.81818 16.6136 9.47727 16.6136 10.2159C16.6136 10.9621 16.4564 11.625 16.142 12.2045C15.8277 12.7841 15.3636 13.2405 14.75 13.5739C14.1364 13.9034 13.3807 14.0682 12.483 14.0682H9.59091V12.3352H12.1989C12.7216 12.3352 13.1496 12.2443 13.483 12.0625C13.8163 11.8807 14.0625 11.6307 14.2216 11.3125C14.3845 10.9943 14.4659 10.6288 14.4659 10.2159C14.4659 9.80303 14.3845 9.43939 14.2216 9.125C14.0625 8.81061 13.8144 8.56629 13.4773 8.39205C13.1439 8.21402 12.714 8.125 12.1875 8.125H10.2557V18H8.14773Z'
                  fill='#6A696A'
                />
              </svg>
            </span>
            <input
              ref={pauseOnAltRef}
              type='checkbox'
              checked={settings.pauseOnP}
              disabled={settings.buffer}
              onChange={(e) => {
                setSettings((old) => {
                  return { ...old, pauseOnP: e.target.checked }
                })
              }}
            />
          </div>

          <div className='flex justify-between mt-2'>
            <span className='flex mr-2 text-sm font-semibold '>
              Buffer chat
            </span>
            <input
              ref={bufferRef}
              type='checkbox'
              defaultChecked={settings.buffer}
              onChange={(e) => {
                setSettings((old) => {
                  return {
                    ...old,
                    pauseOnP: false,
                    pauseOnHover: false,
                    buffer: e.target.checked,
                  }
                })
              }}
            />
          </div>

          <button
            className='w-full py-1 mt-4 font-semibold tracking-tight rounded bg-accent-blue text-primary hover:bg-opacity-90'
            onClick={handleSaveSettings}
          >
            Save
          </button>
        </div>
      )}
    </div>
  )
}

const MemoizedChatSetting = memo(ChatSettings)

export default MemoizedChatSetting
