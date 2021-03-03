export default function theme(key) {
  return ({theme}) => {
    const keyPieces = key.split('.');

    return keyPieces.reduce((acc, current) => {
      if (!acc[current]) {
        throw Error(`Key theme.${key} is not set`)
      }

      return acc[current]
    }, theme)
  }
}
