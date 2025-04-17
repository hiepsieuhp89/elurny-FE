export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

export type Either<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T

 
export type GenericFunction<T = any> = (...args: any[]) => T
