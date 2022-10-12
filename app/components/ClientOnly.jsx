import { useState, useEffect } from 'react'

function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    if (window.localStorage) {
      setHasMounted(true)
    }
  }, [])

  return !hasMounted ? null : <div>{children}</div>
}

export default ClientOnly
