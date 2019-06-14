import { Either, Left, Right, left, right } from 'fp-ts/lib/Either';

export type Result<TSuccess, TFailure> = Either<TFailure, TSuccess>;
export type Success<TSuccess, TFailure> = Left<TFailure, TSuccess>;
export type Failure<TSuccess, TFailure> = Right<TFailure, TSuccess>;

export const failure = left;
export const success = right;

// export const bind = <A, B, C>(f: A -> Result<B,C>): Result<A,C> -> Result<B,C> => {

// }

function bind<A, B>(f: A => Result<B, C>): Result<A, B>{
}