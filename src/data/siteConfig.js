// ALL editable content lives here. Replace the [PLACEHOLDERS] and set photo paths
// (put images in public/assets/photos/ and use e.g. '/assets/photos/1.jpg').
// NOTE: the password is only a casual surprise gate, not real security.
const siteConfig = {
  friendName: 'Garvita', nickname: 'Chotu Don',
  password: 'BUTKI',            // change me ([SECRET_PASSWORD])
  music: '/assets/audio/music.mp3',                     // e.g. '/assets/audio/music.mp3'; empty hides the player
  text: {
    unlockTitle: 'A Little Surprise, Chotu Don..!!', unlockSub: 'A little world of happiness, made just for you...❤️',

    unlockBtn: 'Open Your Surprise..✨', wrong: 'Not quite — try again ✨',

    lightTitle: "Let's Light Up Diwali", lightSub: 'A little light, a little magic, and a lot of happiness.',

    greetMsg: 'May this Diwali bring endless smiles, beautiful moments and all the happiness you derserve, Chotu..!!❤️',

    beforeTitle: "Before the Diyas, There's You", beforeMsg: "Among all the lights of diwali, your smile will always be my favourite..✨",

    personal1: 'Oye Chotu Don..!!❤️, Is diwali bas yahi wish hai ki teri life humesha khushiyon se bhari rahe, tere chehre pe ye cute si smile kabhi kam na ho, aur tere saare sapne pure ho jaye. Tu humesha aise hi pagal, cute aur khush rehna. Happy Diwali meri pasandida mahila mitra...!!🪔❤️',

    hamperTitle: 'A Little Box of Happiness..🎁', hamperSub: 'Tere liye kuch meetha, kuch special aur dher saara pyaar...',

    hamperBtn: 'Open Your Diwali Hamper', hamperDone: 'Yayyy!! Tere liye ek chhota sa diwali hamper, lots of smiles and a little happiness..!!❤️✨',

    wishTitle: 'A Few Wishes for You..✨', wishMsg: 'Chotu, teri life mein humesha khushiyan rahein, har din ek nayi wajah mile smle karne ki, aur tere saare sapne ek-ek karke pure ho, aur tu humesha mere sath rahe. Hamesha khush reh..❤️',

    personal2: 'Aur Butki..❤️, Tu mere liye bahut important hai, Sach kahun to meri life ki thodi bahut khushiyon ki wajah tu bhi hai infact tu hi h. Teri presence, teri baatein aur tera pagalpan mere liye bahut matter karta hai. Bas aise hi humesha mere sath rehna, humesha haste rehna aur mujhse bhi hasate rehn. Pata nhi future me kya hoga, but I really hope humari ye friendship humesha aise hi bani rahe. Tu sach me bahut special hai mere liye..🥹❤️✨',

    memTitle: 'A Little World..❤️', memSub: 'Kuch yaadein, kuch pagalpan aur dher saari smiles..',

    skyTitle: 'A Night Full of Magic..✨', skySub: 'Aasmaan mein hazaaron roshniyan hain, par meri wish hai ki teri life humesha inse bhi jyada bright rahe, Butki jii..❤️',

    letterTitle: 'A Little Note From My Heart..💌',

    finalLabel: 'FINAL CELEBRATION', finalSub: 'To My Favourite Person...✨', finalMsg: 'Chotu Maharaj, iss Diwali apki life khushiyon ki roshni se jagmagati rahe, apke chehre ki smile kabhi kam na ho aur apke saare sapne poore ho. Har din apke liye kuch naya aur beautiful lekar aye. Humesha khush reh, aise hi pagalpan karti reh aur kabhi badalna mat. You deserve all the happiness in the world. Happy Happy Diwali meri bahut pyari si dost...🪔✨❤️',
  },

  photos: [
    '/assets/photos/1.jpg',
    '/assets/photos/2.jpg', 
    '/assets/photos/3.jpg', 
    '/assets/photos/4.jpg'],      // [PHOTO_01..04]

  captions: [
    'One of those moments I wish to relive again...✨❤️',
    'Two smiles, unlimited bakchodi and countless memories..!!❤️😄',
    'Ek aur pyaari si memory, jise dekhkar humesha smile aa jaati hai..!!🥹❤️',
    'Ending this little gallery with a smile, but never ending these memoies with you...🥹✨❤️',
    ],

  letter: { greeting: 'Meri Pyaari Dost...❤️', 
    content: 'Pata hai, kabhi-kabhi kuch log bina kisi reason ke life ka sabse important part ban jaate hain, aur tu unmein se ek hai. Tere sath hasi mazaak, random baatein karna aur chote-chote moments share karna mere liye bahut special hai. Shayad main humesha express nahi kar pata, but tu mere liye genuinely bahut important hai. Bas aise hi mere saath rehna aur khud bhi humesha khush rehna. Humari friendship aise hi bani rahe, aur hu aage bhi bahut saari beautiful memories banayein. Happy wali Diwali meri Chotu Don ko...🪔✨🥹❤️', 
    signature: 'Your forever dost, Manthan..❤️' },

  // fireworks rate per scene (index 0-9); 0 = none. Bursts play on scenes listed in burstScenes.
  fireworks: { rates: [0.3, 0.4, 1.5, 0.2, 0, 0, 0.3, 1.2, 0.2, 1.8], burstScenes: [2, 7, 9] },
};

export default siteConfig;
