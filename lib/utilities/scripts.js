import { letterScores } from './constants.js'

const scripts = {
  scoreWord(word, multiplier = 1) {
    let wordScore = 0
    if (word) {
      for (let i = 0; i < word.length; i++) {
        const char = word[i].toUpperCase()
        letterScores[char] && (wordScore = wordScore + letterScores[char])
      }
    }
    return wordScore * multiplier
  },
}

module.exports = scripts
