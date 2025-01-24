export default abstract class Calculator<T> {
  abstract processRow: (row: object, schema: T) => {};
}