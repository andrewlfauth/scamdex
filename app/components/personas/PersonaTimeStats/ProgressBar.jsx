import { useEffect, useRef, useMemo } from 'react'
import clsx from 'clsx'

function Stat({ percent, idx }) {
  const COLOR_CODE_TEXT = clsx({
    'text-accent-blue': idx === 0,
    'text-accent-purple': idx === 1,
    'text-accent-red': idx === 2,
  })

  const COLOR_CODE_STOKE = clsx(
    {
      'stroke-accent-blue': idx === 0,
      'stroke-accent-purple': idx === 1,
      'stroke-accent-red': idx === 2,
    },
    'circle'
  )

  const circleRef = useRef()

  let length = useMemo(() => 236 - 216 * (percent / 100), [percent])

  useEffect(() => {
    let keyframe = [{ strokeDashoffset: length }]

    circleRef.current.animate(keyframe, {
      duration: 1500,
      easing: 'ease-out',
      fill: 'forwards',
    })
  }, [length])

  return (
    <div className='relative'>
      <div
        className={`${COLOR_CODE_TEXT} w-[80px] h-[80px] border-[8px] border-primary rounded-full flex items-center justify-center text-sm`}
      >
        {percent}%
      </div>
      <svg
        className='absolute top-0 -rotate-90'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='80'
        height='80'
      >
        <circle
          ref={circleRef}
          className={COLOR_CODE_STOKE}
          cx='40'
          cy='40'
          r='35'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default Stat
