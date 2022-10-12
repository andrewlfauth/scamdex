import { useAtom } from 'jotai'

import { ActiveCallAtom } from '~/routes/call-center/calls'

export default function useActiveCall() {
  const [activeCall, setActiveCall] = useAtom(ActiveCallAtom)

  return { activeCall, setActiveCall }
}
