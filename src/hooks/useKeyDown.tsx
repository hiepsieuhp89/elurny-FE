import { useEffect } from 'react'

export default function useDisableReload(setShowModalNotification: (show: boolean) => void) {
  useEffect(() => {
    const disableReload = (e: KeyboardEvent) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault()
        setShowModalNotification(true)
      }
    }

    document.addEventListener('keydown', disableReload)

    return () => {
      document.removeEventListener('keydown', disableReload)
    }
  }, [setShowModalNotification]) 

  return null
}
