function checkArgument(value: unknown, name: string) {
  if (!value) {
    throw new Error(`The argument "${name}" cannot be empty`);
  }
}

export async function filterAsync<T>(
  array: T[],
  callback: (value: T, index: number) => Promise<boolean>): Promise<T[]> {
    checkArgument(array, 'array');
    checkArgument(callback, 'callback');

    const results: boolean[] = await Promise.all(array.map(async (value, index) => {
      return await callback(value, index);
    }));
    return array.filter((_, i) => results[i]);
}
