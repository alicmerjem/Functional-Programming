// write a function countWords(sentences)
// that takes an array of sentences and returns
// an array of word counts for each sentence

const countWords = (sentences) => sentences.map(sentence => sentence.split(" ").length);