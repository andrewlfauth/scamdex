import ChatAnimation from './ChatAnimation'
import ChatSettings from './ChatSettings'

function Header({ state, channel, controls }) {
  return (
    <div className='relative p-3 border-y rounded-t-md border-opacity-30 border-type-secondary'>
      {state === 'playing' && <ChatAnimation />}

      <ChatSettings />
      <span className='block mb-2 font-semibold tracking-tight text-center text-type-primary'>
        Stream Chat
      </span>

      {true ? (
        <>
          <button onClick={controls.play}>Start</button>
          <button onClick={controls.stop}>Stop</button>
          <button onClick={controls.pause}>Pause</button>
          <button onClick={controls.clear}>Clear</button>
        </>
      ) : (
        <span className='block text-xs text-center text-type-secondary'>
          Edit settings to add channel
        </span>
      )}
    </div>
  )
}

export default Header
