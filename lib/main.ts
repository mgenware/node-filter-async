function checkArgument(value: unknown, name: string) {
  if (!value) {
    throw new Error(`The argument "${name}" cannot be empty`);
  }
}

export async function filterAsync<T>(
  array: T[],
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

export default filterAsync;
