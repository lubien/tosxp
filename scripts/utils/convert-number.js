export default function convertNumber(str) {
  return Number(str.replace(/,/g, ''));
}
