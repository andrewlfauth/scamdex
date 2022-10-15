import { useState, useEffect } from 'react'
import { useTransition } from '@remix-run/react'

import ALL_MEMOJIS from '~/data/memojiSrcs'

function MemojiInput() {
  const transition = useTransition()
  const [imgIdx, setImgIdx] = useState()

  useEffect(() => {
    if (transition.state === 'submitting') {
      setImgIdx()
    }
  }, [transition])

  return (
    <>
      <span className='block text-sm text-type-secondary mt-4'>
        Choose memoji
      </span>
      {imgIdx >= 0 ? (
        <input type='hidden' name='memoji' value={ALL_MEMOJIS[imgIdx]} />
      ) : (
        ''
      )}
      <div className='grid mt-2 grid-cols-4 gap-2'>
        {ALL_MEMOJIS.map((s, i) => (
          <img
            key={s}
            src={s}
            alt=''
            onClick={() => setImgIdx(i)}
            className={`${
              imgIdx === i ? 'scale-[1.1] border-b border-accent-purple' : ''
            } cursor-pointer hover:scale-[1.1]`}
          />
        ))}
      </div>
    </>
  )
}

export default MemojiInput
