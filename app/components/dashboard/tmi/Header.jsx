function Header({ channel, listening, loading, stop, start, clear }) {
  return (
    <div className='p-3 text-center border-y rounded-t-md border-opacity-30 border-type-secondary'>
      {/* {channel ? (
        listening ? (
          <button onClick={stop}>Stop</button>
        ) : (
          <button onClick={start}>Start</button>
        )
      ) : (
        <span>Add a channel</span>
      )} */}
      {channel ? (
        <>
          <button
            className={`${loading ? 'animate-spin' : ''}`}
            onClick={start}
          >
            Start
          </button>
          <button onClick={stop}>Stop</button>
          <button onClick={clear}>Clear</button>
        </>
      ) : (
        <span>Add channel</span>
      )}
    </div>
  )
}

export default Header
