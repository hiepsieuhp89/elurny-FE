export default function tryOpenTab(link: string, state = '') {
  const newTab = window.open(`${link}`, '_blank')
  if (newTab) {
    newTab.onload = () => {
      if (state) {
        newTab.location.hash = state
      }
    }
  }
  if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
    window.location.href = `${link}`
  }
}
