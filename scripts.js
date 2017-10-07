var season = {
  'season1': ['Season 1', 'The series begins when Ned Stark is invited to become the chief adviser (known as the King\'s Hand) of the lustful King Robert Baratheon. Ned and his wife, Catelyn, receive a letter from Catelyn\'s sister, Lysa, who gives them reason to believe that their rivals, the House Lannister - of which the king\'s wife, Cersei Lannister, is a part - caused the death of Jon Arryn , the previous King\'s Hand. Ned must go south to help the king and find out who killed Jon Arryn while trying to protect his family from the Lannisters. While trying to discover the reasons behind Jon Arryn\'s death, Ned discovers the obscure secrets of the Lannisters, which Jon Arryn died trying to expose.'],
  'season2': ['Season 2', 'The Seven Kingdoms are at war with the King in the North, Robb Stark, struggling to gain independence for his people and the people of the River Lands. Robb realizes he needs to earn the loyalty of the Iron Born, who are fiercely independent, to his cause, and sends his best friend, Theon Greyjoy, to talk to his father, who is putting together plans for his own benefit. Meanwhile, Joffrey Baratheon takes over the Iron Throne with the support of the powerful House Lannister, but his uncle, Renly, also claimed the throne with the support of House Tyrell, whose armies are much larger. As they fight for the throne, Tyrion Lannister arrives in Port Royal to take things for himself, but ends up facing the opposition of his intriguing sister, Cersei, who is now Queen Regent.'],
  'season3': ['Season 3', 'Autumn has come all over the world, with winter not far behind. People need to prepare for years of snow and ice, but instead the Seven Kingdoms of Westeros remain trapped by civil war. The supposed King Renly Baratheon is assassinated, which alters the alliances in the war. Ruthless King Joffrey Baratheon wins a major victory by securing an alliance with House Tyrell, with his supporters defeating his uncle Stannis Baratheon in an epic battle. Now, Joffrey commands the greatest armies in the kingdom, and his triumph seems inevitable.'],
  'season4': ['Season 4', 'In the Seven Kingdoms, while the Stark House is on the verge of extinction - or at least that is what the kingdom generally believes in - four "solitary wolves" struggle to survive. Sansa Stark remains hostage to the Iron Throne and is forced to marry Tyrion Lannister. Rickon Stark seeks the safety of the Last Fireplace and the fiercely loyal Umber House. Bran Stark and his companions, Hodor, Jojen and Meera Reed, cross the Wall pursuing a vision; while Arya Stark, who lost everything and was forced to rely on the protection of a man she hates, clings to survival and her thirst for revenge.'],
  'season5': ['Season 5', 'The Five Kings War, which was believed to be coming to an end, enters a new, more chaotic phase. Westeros is on the verge of collapse, and many take what they can while the kingdom implodes, like a corpse making a feast for the crows.'],
  'season6': ['Season 6', 'Winter has come. Westeros prepares for a winter that may become a new long night, while White Walkers and his army of the dead are ready to attack the Wall and the kingdoms of men.'],
  'season7': ['Season 7', 'Não tem ainda']
};

function openSeason(id, linha) {

  let i, tablinks, text;

  text = `<h3>${season[linha][0]}</h3>${season[linha][1]}<p>`;

  document.getElementById("season").innerHTML = text;

  tablinks = document.getElementsByClassName("tablinks");
  for (tabs of tablinks) {
    tabs.className = tabs.className.replace(" active", "");
  }

  document.getElementById(id).className += " active";

}


let bannerAtual = 0
let elementoImagem = document.querySelector('.banner img');
let banners = [
  'images/titulo1.jpg',
  'images/titulo2.jpg',
  'images/titulo3.jpg'
];

function trocarBanner() {
  bannerAtual = bannerAtual + 1;
  if (bannerAtual == banners.length) {
    bannerAtual = 0;
  }

  let imagem = banners[bannerAtual];
  elementoImagem.src = imagem;
}

setInterval(trocarBanner, 2000);
openSeason('tabSeason1', 'season1');
