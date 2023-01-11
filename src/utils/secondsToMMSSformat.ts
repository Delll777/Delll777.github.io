export function secondsToMMSSformat(seconds: number): string {
  let extraSeconds = seconds % 60
  let minutes = (seconds - extraSeconds) / 60
  let minutesStr: string = minutes < 10 ? `0${minutes}` : `${minutes}`
  let secondsStr: string =
    extraSeconds < 10 ? `0${extraSeconds}` : `${extraSeconds}`
  return `${minutesStr}:${secondsStr}`
}
