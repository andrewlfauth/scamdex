import { useEffect, useRef } from 'react'

function Message({ item }) {
  const msgRef = useRef()

  useEffect(() => {
    msgRef.current.scrollIntoView()
  }, [])

  return (
    <div ref={msgRef} className='my-2 text-sm font-semibold'>
      <span style={{ color: item.user.color }}>
        {item.user.name}
        <span className='text-type-white'>: </span>
      </span>
      <span
        id='twitch-msg'
        dangerouslySetInnerHTML={{ __html: item.message }}
        className='font-light break-words text-type-white'
      ></span>
    </div>
  )
}
export default Message
