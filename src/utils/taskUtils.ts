export const validateAndPrepareTaskText = (input: string): string | null => {
  const trimmed = input.trim();
  return trimmed.length > 0 ? trimmed : null;
};
