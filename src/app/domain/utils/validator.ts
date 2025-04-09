
export const getValidId = (id: number) => id > 0 ? id : null;
export const isValidField = <T>(field: T): T | null => {
  let value: any = field
  if (typeof field === 'string') {
    value = field.trim()
  }
  const invalidValues: ReadonlyArray<T | null | undefined | "" | 0> = ["", null, undefined, 0];

  return invalidValues.includes(value) ? null : value;
};
