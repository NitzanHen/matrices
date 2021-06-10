export class DimensionError extends Error {}; 
export class EmptyCellError extends Error {};

/** @todo maybe find a better field name than result (leads to `result.result`) */
export type Result<T, E> = { ok: true, result: T } | { ok: false, err: E }

/** Convenience factory for { ok: true, result: result } */
export const ok = <T>(result: T): { ok: true, result: T } => ({ ok: true, result });
/** Convenience factory for { ok: false, err: err } */
export const err = <E>(err: E): { ok: false, err: E } => ({ ok: false, err });