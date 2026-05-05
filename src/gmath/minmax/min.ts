export function min<T> (items: T[], pred: (item: T)=> number) {
  return Math.min.apply(null, items.map(p => pred(p)))
}