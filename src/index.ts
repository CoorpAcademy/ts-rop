import { Validation, Success, Failure, success, failure } from 'fp-ts/lib/Validation';
// import { compose } from 'fp-ts/lib/function';

export {
  Validation,
  Success,
  Failure,
  success,
  failure
};

export function bind<E, A, B>(f: (a: A) => Validation<E, B>) {
  return function (a: Validation<E, A>) {
    return a.fold<Validation<E, B>>(
      failure,
      f
    );
  }
}

export function compose<L, A, B, C>(
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, C>
export function compose<L, A, B, C, D>(
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, D>
export function compose<L, A, B, C, D, E>(
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, E>
export function compose<L, A, B, C, D, E, F>(
  ef: (e: E) => Validation<L, F>,
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, F>
export function compose<L, A, B, C, D, E, F, G>(
  fg: (f: F) => Validation<L, G>,
  ef: (e: E) => Validation<L, F>,
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, G>
export function compose<L, A, B, C, D, E, F, G, H>(
  gh: (g: G) => Validation<L, H>,
  fg: (f: F) => Validation<L, G>,
  ef: (e: E) => Validation<L, F>,
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, H>
export function compose<L, A, B, C, D, E, F, G, H, I>(
  hi: (h: H) => Validation<L, I>,
  gh: (g: G) => Validation<L, H>,
  fg: (f: F) => Validation<L, G>,
  ef: (e: E) => Validation<L, F>,
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, I>
export function compose<L, A, B, C, D, E, F, G, H, I, J>(
  ij: (i: I) => Validation<L, J>,
  hi: (h: H) => Validation<L, I>,
  gh: (g: G) => Validation<L, H>,
  fg: (f: F) => Validation<L, G>,
  ef: (e: E) => Validation<L, F>,
  de: (d: D) => Validation<L, E>,
  cd: (c: C) => Validation<L, D>,
  bc: (b: B) => Validation<L, C>,
  ab: (a: A) => Validation<L, B>
): (a: A) => Validation<L, J>
export function compose(...fns: Array<Function>): Function {
  const len = fns.length - 1
  return function (this: any, x: any) {
    let fy = success(x)
    for (let i = len; i > -1; i--) {
      fy = fy.fold(
        failure,
        y => fns[i].call(this, y)
      );
    }
    return fy
  }
}

export function pipe<L, A, B, C>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>
): (a: A) => Validation<L, C>
export function pipe<L, A, B, C, D>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>
): (a: A) => Validation<L, D>
export function pipe<L, A, B, C, D, E>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>
): (a: A) => Validation<L, E>
export function pipe<L, A, B, C, D, E, F>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>,
  ef: (e: E) => Validation<L, F>
): (a: A) => Validation<L, F>
export function pipe<L, A, B, C, D, E, F, G>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>,
  ef: (e: E) => Validation<L, F>,
  fg: (f: F) => Validation<L, G>
): (a: A) => Validation<L, G>
export function pipe<L, A, B, C, D, E, F, G, H>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>,
  ef: (e: E) => Validation<L, F>,
  fg: (f: F) => Validation<L, G>,
  gh: (g: G) => Validation<L, H>
): (a: A) => Validation<L, H>
export function pipe<L, A, B, C, D, E, F, G, H, I>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>,
  ef: (e: E) => Validation<L, F>,
  fg: (f: F) => Validation<L, G>,
  gh: (g: G) => Validation<L, H>,
  hi: (h: H) => Validation<L, I>
): (a: A) => Validation<L, I>
export function pipe<L, A, B, C, D, E, F, G, H, I, J>(
  ab: (a: A) => Validation<L, B>,
  bc: (b: B) => Validation<L, C>,
  cd: (c: C) => Validation<L, D>,
  de: (d: D) => Validation<L, E>,
  ef: (e: E) => Validation<L, F>,
  fg: (f: F) => Validation<L, G>,
  gh: (g: G) => Validation<L, H>,
  hi: (h: H) => Validation<L, I>,
  ij: (i: I) => Validation<L, J>
): (a: A) => Validation<L, J>
export function pipe(...fns: Array<Function>): Function {
  const len = fns.length - 1
  return function (this: any, x: any) {
    let fy = success(x)
    for (let i = 0; i <= len; i++) {
      fy = fy.fold(
        failure,
        y => fns[i].call(this, y)
      );
    }
    return fy
  }
}

export const lift = <L, A, B>(f: (a: A) => B) => (a: A) =>
  success<L, B>(f(a));


export const map = <L, A, B>(f: (a: A) => B) => (fa: Validation<L, A>) =>
  fa.fold<Validation<L, B>>(
    failure,
    lift(f),
  );


export const tee = <A, B>(f: (a: A) => B) => (a: A) => {
  f(a);
  return a;
};

export const tap = tee;

export const tryCatch = <L, A, B>(f: (a: A) => B) => (a: A) => {
  try {
    return success<L, B>(f(a));
  }
  catch (err) {
    return failure<L, B>(err);
  }
};

export const doubleMap = <L, M, A, B>(f: (l: L) => M, g: (a: A) => B) =>
    (fa: Validation<L, A>) => fa.bimap(f, g);
    
export const bimap = doubleMap;
