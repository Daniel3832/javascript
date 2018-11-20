//  test each string and only print it if it is a Christmas message.
let greetings = [
    'Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
]

for (let i = 0; i < greetings.length; i++) {
    if (greetings[i].toLowerCase().includes('christmas'))
        console.log(greetings[i])
}



