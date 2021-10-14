function checkArgument(value: unknown, name: string) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!value) {
    throw new Error(`The argument "${name}" cannot be empty`);
  }
}

export default async function filterAsync<T>(
  array: readonly T[],
  callback: (value: T, index: number) => Promise<boolean>,
): Promise<T[]> {
  checkArgument(array, 'array');
  checkArgument(callback, 'callback');

  const results: boolean[] = await Promise.all(array.map((value, index) => callback(value, index)));
  return array.filter((_, i) => results[i]);
}
