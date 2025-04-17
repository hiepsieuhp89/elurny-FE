export function downloadPresigned(presignedUrl: string) {
  if (!window) {
    console.error('Window object not found')

    return
  }

  window.open(presignedUrl, '_blank')
}
