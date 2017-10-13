export async function filterAsync<T>(
  array: T[],
  callback: (value: T) => Promise<boolean>): Promise<T[]> {
    const bools: boolean[] = await Promise.all(array.map(async (value) => {
      return await callback(value);
    }));
    const results: T[] = [];
    for (let i = 0; i < array.length; i++) {
      if (bools[i]) {
        results.push(array[i]);
      }
    }
    return results;
}
