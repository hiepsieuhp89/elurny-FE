async function downloadFromURL(url: string, filename: string) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const urlObject = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = urlObject
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(urlObject)
  } catch (error) {
    console.error('Download failed:', error)
  }
}

export default downloadFromURL
