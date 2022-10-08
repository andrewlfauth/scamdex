import ChatAnimation from './ChatAnimation'
import ChatSettings from './ChatSettings'

function Header({ state, controls, pausedMessages }) {
  return (
    <div className='relative p-3 border-y rounded-t-md border-opacity-30 border-type-secondary'>
      {state === 'playing' && <ChatAnimation />}
      {state === 'paused' && (
        <span className='text-accent-blue tracking-tight top-1 left-[9px] text-xs absolute font-semibold'>
          {pausedMessages.length} unseen
        </span>
      )}

      <ChatSettings />
      <span className='block mb-2 font-semibold tracking-tight text-center text-type-primary'>
        Stream Chat
      </span>

      <button
        className={`${
          state === 'stopped' ? 'bg-accent-blue' : 'bg-accent-red'
        } block mx-auto bg-primary select-none rounded px-6 py-[2px] font-semibold tracking-right text-sm duration-100 outline-none`}
        onClick={
          state === 'stopped' ? () => controls.play() : () => controls.stop()
        }
      >
        {state === 'stopped' ? 'Start' : 'Stop'}
      </button>

      {/* <span className='block text-xs text-center text-type-secondary'>
        Edit settings to add your channel
      </span> */}
    </div>
  )
}

export default Header
