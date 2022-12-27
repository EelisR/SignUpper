export const serializeToPojo = <T>(obj: T): T => structuredClone(obj);

export const toPojos = <T>(array: T[]) => array.map(serializeToPojo);

export const buildError = (message: string) => {
  return { error: message }
}