export async function filterAsync<T>(
  array: T[],
  callback: (value: T, index: number) => Promise<boolean>): Promise<T[]> {
    const tests: boolean[] = await Promise.all(array.map(async (value, index) => {
      return await callback(value, index);
    }));
    return array.filter((_, i) => tests[i]);
}
