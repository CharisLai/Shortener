const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
const MAX = 61
const MIN = 0

module.exports = () => {
  let shortURL = ""
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    const chooseChar = character[randomIndex]
    shortURL += chooseChar
  }
  return shortURL
}