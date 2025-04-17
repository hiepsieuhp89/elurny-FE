import { URLSearchParamsInit,useSearchParams } from 'react-router-dom'

type ReplaceSearchParams = [
  URLSearchParams,
  (searchParams: URLSearchParams | ((prevSearchParams: URLSearchParams) => URLSearchParamsInit)) => void,
]

const useReplaceSearchParams = (): ReplaceSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams()

  const replaceSearchParams = (
    newSearchParams: URLSearchParams | ((prevSearchParams: URLSearchParams) => URLSearchParamsInit)
  ) => {
    if (typeof newSearchParams === 'function') {
      setSearchParams(newSearchParams(searchParams), { replace: true })
    } else {
      setSearchParams(newSearchParams, { replace: true })
    }
  }

  return [searchParams, replaceSearchParams]
}

export default useReplaceSearchParams
