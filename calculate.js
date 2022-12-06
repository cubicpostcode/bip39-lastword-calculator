const wordlist = require('./bip39/english.json')
const mnemonicToEntropy = require('./bip39/needed-functions')

const [_1, _2, ...first23Words] = process.argv
//const cleanFirst23Words = first23Words.join(' ').toLowerCase()
// hardwired 23 lowercase words each one separated by a space:
const cleanFirst23Words = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23'

// NO NEED TO CHECK BUT BE CAREFUL.
//if (first23Words.length !== 23) throw new Error(`Yout must provide 23 words. Provided: ${first23Words}`)

const lastWord = wordlist.find(currentWord => {
  try {
    const current24Words = `${cleanFirst23Words} ${currentWord}`
    mnemonicToEntropy(current24Words, wordlist)
    return true
  } catch (error) {
    return false
  }
})

console.log(`Last word: ${lastWord}`)
