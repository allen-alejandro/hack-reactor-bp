// Write a function that takes an array of characters and returns an array of just the characters that are superheroes:

var characters = [
  { character: 'Superman', hero: true },
  { character: 'Sinestro', hero: false },
  { character: 'Wonder Woman', hero: true },
  { character: 'Lex Luthor', hero: false },
  { character: 'Green Lantern', hero: true }
]

var isHero = function (chars) {
    return chars.filter(obj => {
      return obj.hero
    })
}


console.log(isHero(characters));