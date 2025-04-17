type GenericFunction<T = any> = (...args: any[]) => T

/**
 * This function to catch Promise error to reduce try catch block
 * @param promise
 * @param errorExt
 */
 
export async function catchAsync<T, E = any>(promise: Promise<T>, errorExt?: object): Promise<[E, null] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[E, null]>((err: E) => {
      if (errorExt) {
        const parsedError = { ...err, ...errorExt }

        return [parsedError, null]
      }

      return [err, null]
    })
}

 
export function catchSync<T, E = any>(cb: GenericFunction<T>, errorExt?: object): [E, null] | [null, T] {
  try {
    const result = cb()

    return [null, result]
  } catch (error) {
    if (errorExt) {
      const parsedError = { ...error, ...errorExt }

      return [parsedError as E, null]
    }

    return [error as E, null]
  }
}
