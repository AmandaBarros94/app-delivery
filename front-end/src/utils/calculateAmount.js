export default function calculateAmount(order) {
  const amountSum = order.reduce((acc, cur) => {
    acc += (cur.quantity * cur.price);
    return acc;
  }, 0);
  return amountSum;
}
