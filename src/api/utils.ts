export function getHeaderWithAuthToken(
  token: string
): {
  Authorization: string
} {
  return {
    Authorization: `Token ${token}`,
  }
}
