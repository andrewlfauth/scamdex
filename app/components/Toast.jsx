import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import clsx from 'clsx'

function Toast({ title, subtitle, type }) {
  const [dismiss, setDismiss] = useState(false)

  let TITLE_STYLE = clsx({
    'text-red-500': type === 'error',
    'text-emerald-500': type === 'success',
    'text-blue-500': type === 'other',
  })

  let TIMER_STYLE = clsx({
    'bg-gradient-to-r from-red-200 to-red-500': type === 'error',
    'bg-gradient-to-r from-emerald-200 to-emerald-500': type === 'success',
    'bg-gradient-to-r from-blue-200 to-blue-500': type === 'other',
  })

  useEffect(() => {
    let t1 = setTimeout(() => setDismiss(true), 5500)
    return () => clearTimeout(t1)
  }, [])

  return dismiss ? null : (
    <div className='w-[300px] absolute shadow border bg-white px-10 py-4 rounded right-0 left-0 mx-auto top-10'>
      <AiOutlineClose
        className='absolute cursor-pointer top-2 right-2'
        onClick={() => setDismiss(true)}
      />
      <span className={`${TITLE_STYLE} text-lg font-bold tracking-tight`}>
        {title}
      </span>
      <p className='pb-4 text-gray-500'>{subtitle}</p>
      <span
        className={`${TIMER_STYLE} block w-full h-1 animate-toast origin-left`}
      ></span>
    </div>
  )
}

export default Toast
