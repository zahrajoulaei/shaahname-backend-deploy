//This is the Static list of characters created before adding them to database:
// const characters = [
//   {
//     "id": 1,
//     "name": "Rostam",
//    "children": ["Sohrab"],
//     "monarchy": "None",
//     "age": 500,
//     "abilities": ["Superhuman strength", "Skilled warrior", "Tactician"],
//     "specialty": "Hero of Iran, Defender of the Iranian kings",
//   },
//   {
//     id: 2,
//     name: "Sohrab",
//     children: [],
//     monarchy: "None",
//     age: 18,
//     abilities: ["Exceptional strength", "Bravery"],
//     specialty: "Son of Rostam, Tragic Hero",
//   },
//   {
//     id: 3,
//     name: "Zahhak",
//     children: [],
//     monarchy: "King of Persia",
//     age: 1000,
//     abilities: ["Sorcery", "Immortality"],
//     specialty: "Tyrant king, Snakes on shoulders",
//   },
//   {
//     id: 4,
//     name: "Kay Kavus",
//     children: ["Siyavash", "Fereydun"],
//     monarchy: "King of Persia",
//     age: 150,
//     abilities: ["Leadership", "Wisdom"],
//     specialty: "King of Persia, Lost his throne due to arrogance",
//   },
//   {
//     id: 5,
//     name: "Esfandiyār",
//     children: ["Bahman"],
//     monarchy: "Prince of Persia",
//     age: 37,
//     abilities: ["Invulnerability (except for his eyes)", "Warrior"],
//     specialty: "Tragic hero, son of Goshtasp",
//   },
//   {
//     id: 6,
//     name: "Tahmina",
//     children: ["Sohrab"],
//     monarchy: "None",
//     age: 35,
//     abilities: ["Persuasive", "Cunning"],
//     specialty: "Mother of Sohrab, wife of Rostam",
//   },
//   {
//     id: 7,
//     name: "Zal",
//     children: ["Rostam"],
//     monarchy: "None",
//     age: 400,
//     abilities: ["Wisdom", "Mentorship"],
//     specialty: "Father of Rostam, raised by Simurgh",
//   },
//   {
//     id: 8,
//     name: "Simurgh",
//     children: [],
//     monarchy: "None",
//     age: "10000",
//     abilities: ["Healing", "Flight", "Immense knowledge"],
//     specialty: "Mythical bird, savior of Zal and Rostam",
//   },
//   {
//     id: 9,
//     name: "Kay Khosrow",
//     children: [],
//     monarchy: "King of Persia",
//     age: 45,
//     abilities: ["Divine wisdom", "Just leadership"],
//     specialty: "Most righteous king, known for his wisdom and justice",
//   },
//   {
//     id: 10,
//     name: "Afrasiab",
//     children: ["Shideh", "Arjasp"],
//     monarchy: "King of Turan",
//     age: 70,
//     abilities: ["Military strategy", "Leadership"],
//     specialty: "Arch-enemy of Iran, ruler of Turan",
//   },
//   {
//     id: 11,
//     name: "Gordafarid",
//     children: [],
//     monarchy: "None",
//     age: 25,
//     abilities: ["Warrior", "Bravery"],
//     specialty: "Female warrior, defender of her people",
//   },
//   {
//     id: 12,
//     name: "Bijan",
//     children: [],
//     monarchy: "None",
//     age: 30,
//     abilities: ["Strength", "Skill in battle"],
//     specialty: "Lover of Manijeh, hero of Iran",
//   },
//   {
//     id: 13,
//     name: "Manijeh",
//     children: [],
//     monarchy: "Princess of Turan",
//     age: 28,
//     abilities: ["Loyalty", "Courage"],
//     specialty: "Lover of Bijan, daughter of Afrasiab",
//   },
//   {
//     id: 14,
//     name: "Fereydun",
//     children: ["Iraj", "Salm", "Tur"],
//     monarchy: "King of Persia",
//     age: 200,
//     abilities: ["Justice", "Strength"],
//     specialty: "Slayer of Zahhak, righteous king",
//   },
//   {
//     id: 15,
//     name: "Iraj",
//     children: ["Manuchehr"],
//     monarchy: "Prince of Persia",
//     age: 25,
//     abilities: ["Gentleness", "Wisdom"],
//     specialty: "Youngest son of Fereydun, symbol of innocence",
//   },
//   {
//     id: 16,
//     name: "Siyâvash",
//     children: ["Kay Khosrow"],
//     monarchy: "Prince of Persia",
//     age: 30,
//     abilities: ["Purity", "Martial skills"],
//     specialty: "Tragic hero, symbol of innocence and purity",
//   },
//   {
//     id: 17,
//     name: "Fariborz",
//     children: [],
//     monarchy: "Prince of Persia",
//     age: 50,
//     abilities: ["Diplomacy", "Leadership"],
//     specialty: "Son of Kay Kavus, supporter of Kay Khosrow",
//   },
//   {
//     id: 18,
//     name: "Giv",
//     children: ["Bizhan"],
//     monarchy: "None",
//     age: 60,
//     abilities: ["Loyalty", "Bravery"],
//     specialty: "Faithful warrior of Kay Khosrow",
//   },
//   {
//     id: 19,
//     name: "Bizhan",
//     children: [],
//     monarchy: "None",
//     age: 35,
//     abilities: ["Strength", "Bravery"],
//     specialty: "Hero of the tale of Bijan and Manijeh",
//   },
//   {
//     id: 20,
//     name: "Rudaba",
//     children: ["Rostam"],
//     monarchy: "None",
//     age: 40,
//     abilities: ["Beauty", "Wisdom"],
//     specialty: "Mother of Rostam, wife of Zal",
//   },
//   {
//     id: 21,
//     name: "Sudabeh",
//     children: [],
//     monarchy: "Queen of Persia",
//     age: 40,
//     abilities: ["Deception", "Manipulation"],
//     specialty: "Wife of Kay Kavus, instigator of Siyavash's tragedy",
//   },
//   {
//     id: 22,
//     name: "Jamshid",
//     children: [],
//     monarchy: "King of Persia",
//     age: 700,
//     abilities: ["Inventor", "King"],
//     specialty: "Legendary king, lost his throne due to arrogance",
//   },
//   {
//     id: 23,
//     name: "Garshasp",
//     children: [],
//     monarchy: "None",
//     age: 90,
//     abilities: ["Warrior", "Strength"],
//     specialty: "Great warrior of the Persian army",
//   },
//   {
//     id: 24,
//     name: "Nariman",
//     children: ["Sam"],
//     monarchy: "None",
//     age: 100,
//     abilities: ["Strength", "Wisdom"],
//     specialty: "Ancestor of Rostam, great warrior",
//   },
//   {
//     id: 25,
//     name: "Sam",
//     children: ["Zal"],
//     monarchy: "None",
//     age: 120,
//     abilities: ["Strength", "Bravery"],
//     specialty: "Father of Zal, grandfather of Rostam",
//   },
//   {
//     id: 26,
//     name: "Kaveh",
//     children: [],
//     monarchy: "None",
//     age: 50,
//     abilities: ["Leadership", "Courage"],
//     specialty: "Blacksmith who led a rebellion against Zahhak",
//   },
//   {
//     id: 27,
//     name: "Bahram",
//     children: [],
//     monarchy: "None",
//     age: 70,
//     abilities: ["Archery", "Strategy"],
//     specialty: "Warrior known for his archery skills",
//   },
//   {
//     id: 28,
//     name: "Gordiyeh",
//     children: [],
//     monarchy: "None",
//     age: 35,
//     abilities: ["Leadership", "Bravery"],
//     specialty: "Sister of Bahram Chobin, a warrior woman",
//   },
//   {
//     id: 29,
//     name: "Mehrab Kaboli",
//     children: ["Rudaba"],
//     monarchy: "King of Kabul",
//     age: 90,
//     abilities: ["Leadership", "Diplomacy"],
//     specialty: "King of Kabul, father of Rudaba",
//   },
//   {
//     id: 30,
//     name: "Keyumars",
//     children: [],
//     monarchy: "First King of Persia",
//     age: 1000,
//     abilities: ["Wisdom", "Justice"],
//     specialty: "First king of the world, founder of civilization",
//   },
//   {
//     id: 31,
//     name: "Faramarz",
//     children: [],
//     monarchy: "None",
//     age: 60,
//     abilities: ["Strength", "Leadership"],
//     specialty: "Son of Rostam, a hero who continued his father's legacy",
//   },
//   {
//     id: 32,
//     name: "Kay Bahman",
//     children: [],
//     monarchy: "King of Persia",
//     age: 80,
//     abilities: ["Leadership", "Wisdom"],
//     specialty: "Son of Esfandiyār, continued the Kayanian dynasty",
//   },
//   {
//     id: 33,
//     name: "Arash",
//     children: [],
//     monarchy: "None",
//     age: 40,
//     abilities: ["Archery", "Patriotism"],
//     specialty: "Legendary archer who sacrificed himself for Iran",
//   },
//   {
//     id: 34,
//     name: "Garsivaz",
//     children: [],
//     monarchy: "None",
//     age: 70,
//     abilities: ["Strategy", "Manipulation"],
//     specialty: "Brother of Afrasiab, often involved in deceit",
//   },
//   {
//     id: 35,
//     name: "Tahmoores",
//     children: [],
//     monarchy: "King of Persia",
//     age: 300,
//     abilities: ["Wisdom", "Invention"],
//     specialty: "Tamed demons, taught civilization",
//   },
//   {
//     id: 36,
//     name: "Kai Lohrasp",
//     children: ["Goshtasp"],
//     monarchy: "King of Persia",
//     age: 90,
//     abilities: ["Leadership", "Justice"],
//     specialty: "King who abdicated in favor of his son Goshtasp",
//   },
//   {
//     id: 37,
//     name: "Goshtasp",
//     children: ["Esfandiyār", "Pashotan"],
//     monarchy: "King of Persia",
//     age: 100,
//     abilities: ["Leadership", "Wisdom"],
//     specialty: "Father of Esfandiyār, known for spreading Zoroastrianism",
//   },
//   {
//     id: 38,
//     name: "Pashotan",
//     children: [],
//     monarchy: "None",
//     age: 85,
//     abilities: ["Wisdom", "Holiness"],
//     specialty: "Son of Goshtasp, known for his piety and wisdom",
//   },
//   {
//     id: 39,
//     name: "Salm",
//     children: [],
//     monarchy: "Prince of Persia",
//     age: 100,
//     abilities: ["Military strategy", "Leadership"],
//     specialty: "Son of Fereydun, ruler of the western provinces",
//   },
//   {
//     id: 40,
//     name: "Tur",
//     children: [],
//     monarchy: "Prince of Persia",
//     age: 100,
//     abilities: ["Military strategy", "Leadership"],
//     specialty:
//       "Son of Fereydun, ruler of the eastern provinces, ancestor of the Turanians",
//   },
//   {
//     id: 41,
//     name: "Rakhsh",
//     children: [],
//     monarchy: "None",
//     age: 30,
//     abilities: ["Immense strength", "Loyalty"],
//     specialty: "Rostam's loyal horse, known for his strength and bravery",
//   },
//   {
//     id: 42,
//     name: "Shaghad",
//     children: [],
//     monarchy: "None",
//     age: 50,
//     abilities: ["Deceit", "Treachery"],
//     specialty: "Half-brother of Rostam, betrayed him leading to Rostam's death",
//   },
//   {
//     id: 43,
//     name: "Katayoun",
//     children: ["Esfandiyār"],
//     monarchy: "Queen of Persia",
//     age: 70,
//     abilities: ["Wisdom", "Nurturing"],
//     specialty: "Wife of Goshtasp, mother of Esfandiyār",
//   },
//   {
//     id: 44,
//     name: "Arnavaz",
//     children: [],
//     monarchy: "Queen of Persia",
//     age: 100,
//     abilities: ["Loyalty", "Nobility"],
//     specialty:
//       "One of the wives of Zahhak, known for her suffering and loyalty",
//   },
//   {
//     id: 45,
//     name: "Farangis",
//     children: ["Kay Khosrow"],
//     monarchy: "Princess of Turan",
//     age: 40,
//     abilities: ["Nurturing", "Wisdom"],
//     specialty: "Mother of Kay Khosrow, known for her devotion to her son",
//   },
//   {
//     id: 46,
//     name: "Shirin",
//     children: [],
//     monarchy: "Queen of Persia",
//     age: 60,
//     abilities: ["Beauty", "Diplomacy"],
//     specialty: "Queen known for her tragic love story with Khosrow",
//   },
//   {
//     id: 47,
//     name: "Tahmina",
//     children: ["Sohrab"],
//     monarchy: "None",
//     age: 35,
//     abilities: ["Persuasive", "Cunning"],
//     specialty: "Mother of Sohrab, wife of Rostam",
//   }
// 
// ];

// module.exports = characters;




// [
//     {
//       "id": 1,
//       "name": "Rostam",
//       "children": ["Sohrab"],
//       "monarchy": "None",
//       "age": 500,
//       "abilities": ["Superhuman strength", "Skilled warrior", "Tactician"],
//       "specialty": "Hero of Iran, Defender of the Iranian kings"
//     },
//     {
//       "id": 2,
//       "name": "Sohrab",
//       "children": [],
//       "monarchy": "None",
//       "age": 18,
//       "abilities": ["Exceptional strength", "Bravery"],
//       "specialty": "Son of Rostam, Tragic Hero"
//     },
//     {
//       "id": 3,
//       "name": "Zahhak",
//       "children": [],
//       "monarchy": "King of Persia",
//       "age": 1000,
//       "abilities": ["Sorcery", "Immortality"],
//       "specialty": "Tyrant king, Snakes on shoulders"
//     },
//     {
//       "id": 4,
//       "name": "Kay Kavus",
//       "children": ["Siyavash", "Fereydun"],
//       "monarchy": "King of Persia",
//       "age": 150,
//       "abilities": ["Leadership", "Wisdom"],
//       "specialty": "King of Persia, Lost his throne due to arrogance"
//     },
//     {
//       "id": 5,
//       "name": "Esfandiyār",
//       "children": ["Bahman"],
//       "monarchy": "Prince of Persia",
//       "age": 37,
//       "abilities": ["Invulnerability (except for his eyes)", "Warrior"],
//       "specialty": "Tragic hero, son of Goshtasp"
//     },
//     {
//       "id": 6,
//       "name": "Tahmina",
//       "children": ["Sohrab"],
//       "monarchy": "None",
//       "age": 35,
//       "abilities": ["Persuasive", "Cunning"],
//       "specialty": "Mother of Sohrab, wife of Rostam"
//     },
//     {
//       "id": 7,
//       "name": "Zal",
//       "children": ["Rostam"],
//       "monarchy": "None",
//       "age": 400,
//       "abilities": ["Wisdom", "Mentorship"],
//       "specialty": "Father of Rostam, raised by Simurgh"
//     },
//   
//     {
//       "id": 9,
//       "name": "Kay Khosrow",
//       "children": [],
//       "monarchy": "King of Persia",
//       "age": 45,
//       "abilities": ["Divine wisdom", "Just leadership"],
//       "specialty": "Most righteous king, known for his wisdom and justice"
//     },
//     {
//       "id": 10,
//       "name": "Afrasiab",
//       "children": ["Shideh", "Arjasp"],
//       "monarchy": "King of Turan",
//       "age": 70,
//       "abilities": ["Military strategy", "Leadership"],
//       "specialty": "Arch-enemy of Iran, ruler of Turan"
//     },
//     {
//       "id": 11,
//       "name": "Gordafarid",
//       "children": [],
//       "monarchy": "None",
//       "age": 25,
//       "abilities": ["Warrior", "Bravery"],
//       "specialty": "Female warrior, defender of her people"
//     },
//     {
//       "id": 12,
//       "name": "Bijan",
//       "children": [],
//       "monarchy": "None",
//       "age": 30,
//       "abilities": ["Strength", "Skill in battle"],
//       "specialty": "Lover of Manijeh, hero of Iran"
//     },
//     {
//       "id": 13,
//       "name": "Manijeh",
//       "children": [],
//       "monarchy": "Princess of Turan",
//       "age": 28,
//       "abilities": ["Loyalty", "Courage"],
//       "specialty": "Lover of Bijan, daughter of Afrasiab"
//     },
//     {
//       "id": 14,
//       "name": "Fereydun",
//       "children": ["Iraj", "Salm", "Tur"],
//       "monarchy": "King of Persia",
//       "age": 200,
//       "abilities": ["Justice", "Strength"],
//       "specialty": "Slayer of Zahhak, righteous king"
//     },
//     {
//       "id": 15,
//       "name": "Iraj",
//       "children": ["Manuchehr"],
//       "monarchy": "Prince of Persia",
//       "age": 25,
//       "abilities": ["Gentleness", "Wisdom"],
//       "specialty": "Youngest son of Fereydun, symbol of innocence"
//     },
//     {
//       "id": 16,
//       "name": "Siyâvash",
//       "children": ["Kay Khosrow"],
//       "monarchy": "Prince of Persia",
//       "age": 30,
//       "abilities": ["Purity", "Martial skills"],
//       "specialty": "Tragic hero, symbol of innocence and purity"
//     },
//     {
//       "id": 17,
//       "name": "Fariborz",
//       "children": [],
//       "monarchy": "Prince of Persia",
//       "age": 50,
//       "abilities": ["Diplomacy", "Leadership"],
//       "specialty": "Son of Kay Kavus, supporter of Kay Khosrow"
//     },
//     {
//       "id": 18,
//       "name": "Giv",
//       "children": ["Bizhan"],
//       "monarchy": "None",
//       "age": 60,
//       "abilities": ["Loyalty", "Bravery"],
//       "specialty": "Faithful warrior of Kay Khosrow"
//     },
//     {
//       "id": 19,
//       "name": "Bizhan",
//       "children": [],
//       "monarchy": "None",
//       "age": 35,
//       "abilities": ["Strength", "Bravery"],
//       "specialty": "Hero of the tale of Bijan and Manijeh"
//     },
//     {
//       "id": 20,
//       "name": "Rudaba",
//       "children": ["Rostam"],
//       "monarchy": "None",
//       "age": 40,
//       "abilities": ["Beauty", "Wisdom"],
//       "specialty": "Mother of Rostam, wife of Zal"
//     },
//     {
//       "id": 21,
//       "name": "Sudabeh",
//       "children": [],
//       "monarchy": "Queen of Persia",
//       "age": 40,
//       "abilities": ["Deception", "Manipulation"],
//       "specialty": "Wife of Kay Kavus, instigator of Siyavash's tragedy"
//     },
//     {
//       "id": 22,
//       "name": "Jamshid",
//       "children": [],
//       "monarchy": "King of Persia",
//       "age": 700,
//       "abilities": ["Inventor", "King"],
//       "specialty": "Legendary king, lost his throne due to arrogance"
//     },
//     {
//       "id": 23,
//       "name": "Garshasp",
//       "children": [],
//       "monarchy": "None",
//       "age": 90,
//       "abilities": ["Warrior", "Strength"],
//       "specialty": "Great warrior of the Persian army"
//     },
//     {
//       "id": 24,
//       "name": "Nariman",
//       "children": ["Sam"],
//       "monarchy": "None",
//       "age": 100,
//       "abilities": ["Strength", "Wisdom"],
//       "specialty": "Ancestor of Rostam, great warrior"
//     },
//     {
//       "id": 25,
//       "name": "Sam",
//       "children": ["Zal"],
//       "monarchy": "None",
//       "age": 120,
//       "abilities": ["Strength", "Bravery"],
//       "specialty": "Father of Zal, grandfather of Rostam"
//     },
//     {
//       "id": 26,
//       "name": "Kaveh",
//       "children": [],
//       "monarchy": "None",
//       "age": 50,
//       "abilities": ["Leadership", "Courage"],
//       "specialty": "Blacksmith who led a rebellion against Zahhak"
//     },
//     {
//       "id": 27,
//       "name": "Bahram",
//       "children": [],
//       "monarchy": "None",
//       "age": 70,
//       "abilities": ["Archery", "Strategy"],
//       "specialty": "Warrior known for his archery skills"
//     },
// ]