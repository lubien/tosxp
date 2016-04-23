export function prettyNumber(n) {
  const str = String(n);
  const length = str.length;

  if (length <= 3) return str;

  const countBefore = length % 3;

  const after = str.slice(countBefore).match(/.{1,3}/g);

  const result = countBefore ? [
    str.slice(0, countBefore),
    ...after,
  ] : after;

  return result.join(',');
}

export const percRegex = /^([0-9]{1,2})%$/;
