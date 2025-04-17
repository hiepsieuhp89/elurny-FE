export default function decimalToPercentage(input: string | number) {
  const decimal = typeof input === 'string' ? parseFloat(input) : input

  if (Number.isNaN(decimal)) return 0

  return Math.round(decimal * 100)
}
