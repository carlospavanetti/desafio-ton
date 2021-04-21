class Empty {
  empty = true as const;
  value: { id: number };
  constructor(id: number) {
    this.value = { id };
  }
}
class Just<T> {
  empty = false as const;
  constructor(public value: T) {}
}

type Maybe<T> = Just<T> | Empty;

export default function withMissingElements<T>(
  elements: Array<T>,
  columns: number,
): Array<Maybe<T>> {
  const lastRowRemain = elements.length % columns;

  const missingCount = (columns - lastRowRemain) % columns;
  const newElements = Array(missingCount)
    .fill(0)
    .map((_, i) => new Empty(-i));

  return elements.map((e) => new Just(e) as Maybe<T>).concat(newElements);
}
