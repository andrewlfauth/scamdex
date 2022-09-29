import { useEffect } from 'react'
import { useActionData } from '@remix-run/react'
import { toast } from 'react-hot-toast'

export default function useToastErrorFromAction() {
  const error = useActionData()

  useEffect(() => {
    if (error) {
      toast.dismiss()
      toast.error(error)
    }
  }, [error])
}
