function checkArgument(value: unknown, name: string) {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!value) {
    throw new Error(`The argument "${name}" cannot be empty`);
  }
}

export default async function filterAsync<T>(
  array: readonly T[],
  callback: (value: T, index: number) => Promise<boolean>,
  progressCb?: (value: T, index: number) => void,
): Promise<T[]> {
  checkArgument(array, 'array');
  checkArgument(callback, 'callback');

  const results: boolean[] = await Promise.all(
    array.map(async (value, index) => {
      const result = await callback(value, index);
      if (progressCb) {
        progressCb(value, index);
      }
      return result;
    }),
  );
  return array.filter((_, i) => results[i]);
}
