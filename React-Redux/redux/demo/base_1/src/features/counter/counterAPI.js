// A mock function to mimic making an async-await request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
