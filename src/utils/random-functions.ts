
export const uuId = () => Math.random().toString(16).slice(2)

export const randomNumberBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)

export const randBool = () => Boolean(Math.round(Math.random()))

const nouns = ['bird', 'clock', 'boy', 'plastic', 'duck', 'teacher', 'old lady', 'professor', 'hamster', 'dog']
const verbs = ['kicked', 'ran', 'flew', 'dodged', 'sliced', 'rolled', 'died', 'breathed', 'slept', 'killed']
const adjectives = ['beautiful', 'lazy', 'professional', 'lovely', 'dumb', 'rough', 'soft', 'hot', 'vibrating', 'slimy']
const adverbs = ['slowly', 'elegantly', 'precisely', 'quickly', 'sadly', 'humbly', 'proudly', 'shockingly', 'calmly', 'passionately']
const preposition = ['down', 'into', 'up', 'on', 'upon', 'below', 'above', 'through', 'across', 'towards']

export const sentence = () => {
  const rand1 = Math.floor(Math.random() * 10)
  const rand2 = Math.floor(Math.random() * 10)
  const rand3 = Math.floor(Math.random() * 10)
  const rand4 = Math.floor(Math.random() * 10)
  const rand5 = Math.floor(Math.random() * 10)
  const rand6 = Math.floor(Math.random() * 10)
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  const content = `The ${adjectives[rand1]} ${nouns[rand2]} ${adverbs[rand3]} ${verbs[rand4]} because some ${nouns[rand1]} ${adverbs[rand1]} ${verbs[rand1]} ${preposition[rand1]} a ${adjectives[rand2]} ${nouns[rand5]} which, became a ${adjectives[rand3]}, ${adjectives[rand4]} ${nouns[rand6]}.`

  return `&quot;${content}&quot;`
}
