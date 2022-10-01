import { useEffect } from 'react'
import { useTransition } from '@remix-run/react'
import { toast } from 'react-hot-toast'

export default function useShowLoadingAfterDelay(msg = 'loading') {
  const transition = useTransition()

  useEffect(() => {
    if (transition.state !== 'idle') {
      let id = setTimeout(() => toast.loading(msg), 300)
      return () => clearTimeout(id)
    }
    toast.dismiss()
  }, [transition, msg])
}
