

// Write a function that takes an array of artist/song objects and returns an array of strings that name the song and say who it is performed by:

var songs = [
  { song: 'Phenom', artist: 'Alex Mali' },
  { song: 'Too Deep', artist: 'dvsn' },
  { song: 'Firefly', artist: 'Mura Masa' }
];

var songsBy = function (songs) {
  return songs.map(el => `${el.song} by ${el.artist}`); 
};

console.log(songsBy(songs));; // => ['Phenom by Alex Mali', 'Too Deep by dvsn', 'Firefly by Mura Masa']