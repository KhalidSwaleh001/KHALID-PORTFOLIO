
import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PWAUpdatePrompt() {
  const [dismissed, setDismissed] = useState(false)

  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl) {
      console.log('PWA service worker registered:', swUrl)
    },

    onRegisterError(error) {
      console.error('PWA registration error:', error)
    },
  })

  if (dismissed || (!needRefresh && !offlineReady)) {
    return null
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9999] max-w-sm rounded-xl border border-emerald-700 bg-[#14251F] p-5 text-[#F1EBDD] shadow-2xl">
      {needRefresh ? (
        <>
          <h3 className="mb-2 font-semibold">
            New version available
          </h3>

          <p className="mb-4 text-sm text-[#A4B5A7]">
            A new version of this portfolio is ready.
            Update now to get the latest improvements.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => updateServiceWorker(true)}
              className="rounded-lg bg-[#78A88A] px-4 py-2 text-sm font-semibold text-[#101A16]"
            >
              Update now
            </button>

            <button
              onClick={() => setDismissed(true)}
              className="rounded-lg border border-[#819487] px-4 py-2 text-sm"
            >
              Later
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-3 text-sm">
            Portfolio is ready for offline use.
          </p>

          <button
            onClick={() => setDismissed(true)}
            className="text-sm text-[#78A88A]"
          >
            Close
          </button>
        </>
      )}
    </div>
  )
}
