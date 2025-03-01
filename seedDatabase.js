const { v4: uuidv4 } = require("uuid");
const db = require("./app/config/database");

const data = [
  {
    city: "Paris",
    country: "France",
    clues: [
      "This city is home to a famous tower that sparkles every night.",
      "Known as the 'City of Love' and a hub for fashion and art.",
    ],
    fun_fact: [
      "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
      "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules.",
    ],
    trivia: [
      "This city is famous for its croissants and macarons. Bon appétit!",
      "Paris was originally a Roman city called Lutetia.",
    ],
  },
  {
    city: "Tokyo",
    country: "Japan",
    clues: [
      "This city has the world's busiest pedestrian crossing at Shibuya.",
      "It's the most populous metropolitan area in the world.",
    ],
    fun_fact: [
      "This city has more Michelin-starred restaurants than any other city in the world.",
      "There are over 12,000 vending machines in the subway stations alone.",
    ],
    trivia: [
      "The Imperial Palace, home to Japan's Emperor, sits in the heart of this city.",
      "The city was originally known as Edo before being renamed in 1868.",
    ],
  },
  {
    city: "New York City",
    country: "United States",
    clues: [
      "This city has a famous statue that was a gift from France.",
      "It's often called 'The Big Apple' and contains five boroughs.",
    ],
    fun_fact: [
      "There's a hidden train station beneath the Waldorf Astoria Hotel that was used by President Franklin D. Roosevelt.",
      "The subway system has 472 stations and over 850 miles of track.",
    ],
    trivia: [
      "The New York Public Library has over 50 million items, including a Gutenberg Bible.",
      "Wall Street is named after an actual wall that was built in the 1600s to keep out Native Americans and the British.",
    ],
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "This city is home to an ancient amphitheater where gladiators once fought.",
      "Seven hills surround this historic city, which wasn't built in a day.",
    ],
    fun_fact: [
      "There's a secret passage called Passetto di Borgo that connects the Vatican to Castel Sant'Angelo, used by popes to escape danger.",
      "People throw about €1.5 million into the Trevi Fountain each year, which is collected and donated to charity.",
    ],
    trivia: [
      "This city contains an entire country within its borders.",
      "The Romans built over 11 aqueducts to supply the city with fresh water.",
    ],
  },
  {
    city: "London",
    country: "United Kingdom",
    clues: [
      "This city has a famous clock tower often mistakenly called by the name of its bell.",
      "The world's oldest underground railway system operates in this city.",
    ],
    fun_fact: [
      "The city is home to more than 170 museums, including one dedicated entirely to fans.",
      "It's illegal to die in the Houses of Parliament.",
    ],
    trivia: [
      "The official residence of the monarch has 775 rooms, including 52 royal and guest bedrooms.",
      "This city's oldest subway station, Baker Street, opened in 1863.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "This city has a famous opera house with a distinctive sail-shaped design.",
      "It's home to one of the world's most famous harbors and a iconic bridge nicknamed 'The Coathanger'.",
    ],
    fun_fact: [
      "The Sydney Opera House has over one million roof tiles.",
      "The sand at Bondi Beach was once almost stolen and exported to Hawaii to replenish Waikiki Beach.",
    ],
    trivia: [
      "This city hosted the Summer Olympics in 2000.",
      "Sydney was founded as a British penal colony in 1788.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "This city is located near ancient pyramids and a sphinx.",
      "It's the largest city in Africa and sits on the banks of the Nile River.",
    ],
    fun_fact: [
      "This city's Al-Azhar University is one of the oldest universities in the world, founded in 970 CE.",
      "The city's traffic is so bad that the average commute can take more than two hours.",
    ],
    trivia: [
      "The city's name means 'The Victorious' in Arabic.",
      "Cairo's Egyptian Museum houses the world's largest collection of Pharaonic antiquities.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "This city has a massive statue of Christ with outstretched arms on a mountain.",
      "It's famous for its annual carnival celebration and Copacabana Beach.",
    ],
    fun_fact: [
      "The iconic Christ the Redeemer statue is struck by lightning an average of 4-5 times a year.",
      "This city was the capital of Brazil from 1763 until 1960.",
    ],
    trivia: [
      "The name of this city means 'River of January' in Portuguese.",
      "It was the first South American city to host the Summer Olympics.",
    ],
  },
  {
    city: "Venice",
    country: "Italy",
    clues: [
      "This city has canals instead of streets and is slowly sinking.",
      "It's known for gondolas and an annual carnival featuring elaborate masks.",
    ],
    fun_fact: [
      "This city is built on 118 small islands connected by over 400 bridges.",
      "To combat sinking, the city has installed inflatable flood barriers that can rise from the sea floor.",
    ],
    trivia: [
      "Marco Polo, the famous explorer, was born in this canal city.",
      "The glass-making industry on the nearby island of Murano dates back to 1291.",
    ],
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    clues: [
      "This city has the world's tallest building and artificial islands shaped like palm trees.",
      "Once a small fishing village, it's now known for luxury shopping and ultramodern architecture.",
    ],
    fun_fact: [
      "This city has an indoor ski resort despite being in a desert with temperatures that can exceed 50°C (122°F).",
      "Police here drive luxury cars like Lamborghinis and Bugattis.",
    ],
    trivia: [
      "Only about 15% of the population in this city are local citizens; the rest are expatriates.",
      "This city's airport is the world's busiest for international passenger traffic.",
    ],
  },
  {
    city: "Barcelona",
    country: "Spain",
    clues: [
      "This city has an unfinished cathedral designed by Antoni Gaudí that's been under construction since 1882.",
      "It's the capital of Catalonia and known for its distinctive architecture and beaches.",
    ],
    fun_fact: [
      "The famous Las Ramblas street was once a sewage-filled stream.",
      "This city's main cathedral, Sagrada Familia, is expected to be completed in 2026, a century after Gaudí's death.",
    ],
    trivia: [
      "This city hosted the Summer Olympics in 1992.",
      "Barcelona is the only city to have received a Royal Gold Medal for architecture, which is normally given to individuals.",
    ],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    clues: [
      "This city has more bridges than Venice and more bicycles than people.",
      "Famous for its canals, tulips, and historic houses that lean forward slightly.",
    ],
    fun_fact: [
      "Many houses in this city are tilted forward intentionally to make it easier to move furniture up and down using the hook at the top of the building.",
      "The city has over 165 canals with a combined length of more than 100 kilometers.",
    ],
    trivia: [
      "Anne Frank's hiding place during World War II is now a museum in this city.",
      "This city sits about 2 meters below sea level on average.",
    ],
  },
  {
    city: "Singapore",
    country: "Singapore",
    clues: [
      "This city-state has a famous hotel with a boat-shaped rooftop pool.",
      "Known for its cleanliness, it has banned chewing gum since 1992.",
    ],
    fun_fact: [
      "This city has the world's largest rooftop infinity pool at Marina Bay Sands.",
      "It's one of only three city-states in the world, alongside Monaco and Vatican City.",
    ],
    trivia: [
      "The national symbol of this city is the Merlion, a mythical creature with a lion's head and fish's body.",
      "This city was founded as a British trading colony in 1819 by Sir Stamford Raffles.",
    ],
  },
  {
    city: "Istanbul",
    country: "Turkey",
    clues: [
      "This city straddles two continents and was once called Constantinople.",
      "It's home to the Hagia Sophia and the Blue Mosque.",
    ],
    fun_fact: [
      "The Grand Bazaar in this city is one of the oldest and largest covered markets in the world with over 4,000 shops.",
      "This city has been the capital of three major empires: Roman, Byzantine, and Ottoman.",
    ],
    trivia: [
      "This city's famous Bosphorus Strait connects the Black Sea to the Sea of Marmara.",
      "The Basilica Cistern underneath the city features two mysterious Medusa head sculptures installed upside down and sideways.",
    ],
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    clues: [
      "This city is known as the 'Paris of South America' for its architecture.",
      "It's the birthplace of tango and has colorful houses in the La Boca neighborhood.",
    ],
    fun_fact: [
      "This city has the widest avenue in the world, 9 de Julio Avenue, which spans 140 meters with up to 20 lanes.",
      "It has the highest concentration of theaters in the world.",
    ],
    trivia: [
      "The city's Recoleta Cemetery is famous for elaborate tombs, including that of Eva Perón.",
      "Buenos Aires means 'fair winds' or 'good airs' in Spanish.",
    ],
  },
  {
    city: "Prague",
    country: "Czech Republic",
    clues: [
      "This city has a medieval astronomical clock that puts on a show every hour.",
      "Known for its preserved old town and Charles Bridge lined with statues.",
    ],
    fun_fact: [
      "The castle in this city is the largest ancient castle complex in the world according to the Guinness Book of Records.",
      "Franz Kafka, the famous writer, was born and lived most of his life in this city.",
    ],
    trivia: [
      "This city is nicknamed 'City of a Hundred Spires' due to its many Gothic church spires.",
      "The Dancing House, a modern building in this city, was inspired by dancers Fred Astaire and Ginger Rogers.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "This city is known for its ornate shrines, floating markets, and tuk-tuks.",
      "Its local name is actually much longer and holds the Guinness World Record for longest place name.",
    ],
    fun_fact: [
      "The full ceremonial name of this city is 168 letters long and is the longest place name in the world.",
      "It has been sinking 2-3 centimeters every year because it was built on swampland.",
    ],
    trivia: [
      "This city is home to the Temple of the Emerald Buddha, which houses a statue carved from a single jade stone.",
      "Bangkok's Chatuchak Weekend Market is one of the world's largest markets with over 15,000 stalls.",
    ],
  },
  {
    city: "Hong Kong",
    country: "China",
    clues: [
      "This city has one of the most recognizable skylines in the world with over 1,500 skyscrapers.",
      "It was a British colony until 1997 and operates under the 'One Country, Two Systems' principle.",
    ],
    fun_fact: [
      "This city has more skyscrapers than any other city in the world.",
      "Its subway system, the MTR, has a 99.9% on-time rate, making it one of the most efficient in the world.",
    ],
    trivia: [
      "The name of this city means 'Fragrant Harbor' in Cantonese.",
      "Hong Kong Disneyland has practiced feng shui with its design, including shifting the main gate by 12 degrees for better luck.",
    ],
  },
  {
    city: "Jerusalem",
    country: "Israel",
    clues: [
      "This city is considered holy by three major religions: Judaism, Christianity, and Islam.",
      "Its old walled city is divided into four quarters and contains many sacred sites.",
    ],
    fun_fact: [
      "This city has been captured and recaptured 44 times throughout its history.",
      "The Jerusalem syndrome is a psychological phenomenon where visitors to the city experience religious delusions.",
    ],
    trivia: [
      "The Western Wall in this city has notes with prayers placed in its cracks by visitors.",
      "This city's name appears in the Bible over 600 times.",
    ],
  },
  {
    city: "Marrakech",
    country: "Morocco",
    clues: [
      "This city is known for its maze-like medina and vibrant souks selling spices and textiles.",
      "It's nicknamed the 'Red City' due to the color of its buildings and walls.",
    ],
    fun_fact: [
      "The famous Jardin Majorelle in this city was owned by fashion designer Yves Saint Laurent.",
      "The central square, Jemaa el-Fnaa, transforms from a market during the day to an open-air dining area at night.",
    ],
    trivia: [
      "This city was founded in 1062 and was once the capital of the Almoravid Empire.",
      "Winston Churchill once described it as 'the nicest place on Earth to spend an afternoon.'",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "This city's famous square is surrounded by colorful onion-domed cathedrals.",
      "It's home to the world's largest country's government and the Bolshoi Theatre.",
    ],
    fun_fact: [
      "The metro stations in this city are so ornate they're sometimes called 'underground palaces'.",
      "The Kremlin walls were originally white, not red as they are today.",
    ],
    trivia: [
      "This city has the largest McDonald's in the world, which served over 30,000 customers on its opening day in 1990.",
      "The Seven Sisters, a group of skyscrapers in this city, were commissioned by Stalin.",
    ],
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "This city sits at the foot of a flat-topped mountain and near where two oceans meet.",
      "It's known for harbor views, beaches, and nearby vineyards.",
    ],
    fun_fact: [
      "This city is home to the world's largest individually timed cycle race, the Cape Town Cycle Tour.",
      "Table Mountain, which overlooks the city, is one of the oldest mountains in the world at over 600 million years old.",
    ],
    trivia: [
      "This city was the first place in South Africa where Europeans settled, in 1652.",
      "Nelson Mandela made his first speech as a free man from the balcony of City Hall in this city.",
    ],
  },
  {
    city: "Vienna",
    country: "Austria",
    clues: [
      "This city is known for its imperial palaces, coffee houses, and classical music heritage.",
      "It was home to famous composers including Mozart, Beethoven, and Strauss.",
    ],
    fun_fact: [
      "This city is home to the world's oldest zoo still in operation, founded in 1752.",
      "The snow globe was invented in this city in 1900.",
    ],
    trivia: [
      "This city's famous Sacher Torte chocolate cake was created in 1832 for Prince Metternich.",
      "Vienna's central cemetery has over 330,000 graves and is the final resting place of Beethoven, Schubert, and Strauss.",
    ],
  },
  {
    city: "San Francisco",
    country: "United States",
    clues: [
      "This city is known for a famous red bridge often shrouded in fog.",
      "It's built on 43 hills and has iconic cable cars climbing its steep streets.",
    ],
    fun_fact: [
      "The famous prison on an island in this city's bay was once home to Al Capone.",
      "The city's famous sourdough bread has a distinct taste due to a unique local bacteria found nowhere else.",
    ],
    trivia: [
      "This city experienced a devastating earthquake and fire in 1906 that destroyed over 80% of the city.",
      "The United Nations Charter was signed in this city in 1945.",
    ],
  },
  {
    city: "Kyoto",
    country: "Japan",
    clues: [
      "This former capital of Japan has over 1,600 Buddhist temples and 400 Shinto shrines.",
      "It's known for traditional wooden houses, gardens, and geishas in the Gion district.",
    ],
    fun_fact: [
      "This city was spared from atomic bombing during World War II because of its cultural significance.",
      "It has a temple with a nightingale floor that squeaks when walked upon, designed to warn of intruders.",
    ],
    trivia: [
      "This city was Japan's capital for over 1,000 years until 1868.",
      "The famous Ryoan-ji Temple contains a rock garden with 15 stones arranged so that only 14 are visible from any viewing angle.",
    ],
  },
  {
    city: "Berlin",
    country: "Germany",
    clues: [
      "This city was divided by a famous wall from 1961 to 1989.",
      "It's known for its modern art scene, techno clubs, and historical significance.",
    ],
    fun_fact: [
      "This city has more bridges than Venice, with over 1,700 bridges crossing its rivers and canals.",
      "The Berlin Airlift in 1948-49 supplied the city with food when ground access was blocked by the Soviet Union.",
    ],
    trivia: [
      "This city's famous Brandenburg Gate was once part of the Berlin Wall.",
      "Berlin's Tiergarten park was originally a hunting ground for the Prussian kings.",
    ],
  },
  {
    city: "Mumbai",
    country: "India",
    clues: [
      "This city is home to Bollywood, the world's largest film industry by number of films produced.",
      "It has a famous arch monument on its waterfront that was built to commemorate a royal visit.",
    ],
    fun_fact: [
      "This city was originally seven separate islands that were joined through land reclamation in the 19th century.",
      "It houses the world's most expensive private residence, a 27-story building called Antilia.",
    ],
    trivia: [
      "This city was previously known as Bombay until 1995.",
      "The famous Dabbawalas deliver over 200,000 homemade lunches to office workers daily with remarkable accuracy.",
    ],
  },
  {
    city: "Mexico City",
    country: "Mexico",
    clues: [
      "This city was built on the site of an ancient Aztec capital on a lake.",
      "It's one of the largest cities in the world and is slowly sinking.",
    ],
    fun_fact: [
      "This city is sinking at a rate of about 20 centimeters per year because it was built on the bed of a drained lake.",
      "The city's Chapultepec Park is one of the largest city parks in the Western Hemisphere, twice the size of Central Park in New York.",
    ],
    trivia: [
      "This city has the only royal castle in the Americas, Chapultepec Castle.",
      "The ancient Aztec city of Tenochtitlan lies beneath this modern capital.",
    ],
  },
  {
    city: "Lisbon",
    country: "Portugal",
    clues: [
      "This city is built on seven hills and has colorful trams navigating its steep streets.",
      "Famous for its custard tarts and being one of Europe's oldest capitals.",
    ],
    fun_fact: [
      "This city experienced one of history's most powerful earthquakes in 1755, which almost completely destroyed it.",
      "The city's Vasco da Gama Bridge is the longest bridge in Europe at nearly 11 miles long.",
    ],
    trivia: [
      "This city claims to be the only European capital with Atlantic beaches.",
      "Lisbon's distinctive black and white mosaic pavements are created using traditional Portuguese 'calçada' techniques.",
    ],
  },
  {
    city: "Athens",
    country: "Greece",
    clues: [
      "This city is dominated by an ancient citadel with a famous temple dedicated to Athena.",
      "Considered the birthplace of democracy and Western philosophy.",
    ],
    fun_fact: [
      "This city has been continuously inhabited for over 7,000 years, making it one of the oldest cities in Europe.",
      "The modern Olympic Games were revived in this city in 1896.",
    ],
    trivia: [
      "The Parthenon temple in this city was built without using cement, relying instead on precise cutting of stones.",
      "This city is named after the goddess of wisdom in Greek mythology.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "This city combines ancient palaces and traditional markets with futuristic skyscrapers.",
      "It's known for K-pop, Korean BBQ, and being a tech hub.",
    ],
    fun_fact: [
      "This city's subway system is one of the largest in the world, with over 300 stations and free WiFi throughout.",
      "It has the world's largest indoor amusement park, Lotte World.",
    ],
    trivia: [
      "The name of this city means 'capital' in the Korean language.",
      "Seoul has been the capital of Korea for over 600 years, since the Joseon Dynasty.",
    ],
  },
  {
    city: "Vancouver",
    country: "Canada",
    clues: [
      "This coastal city is surrounded by mountains and has been consistently ranked as one of the world's most livable cities.",
      "It's known for its film industry, earning the nickname 'Hollywood North'.",
    ],
    fun_fact: [
      "This city was named after British Captain George Vancouver, who explored the area in 1792.",
      "The steam-powered clock in Gastown is actually electric—the steam is just for show.",
    ],
    trivia: [
      "This city hosted the 2010 Winter Olympics.",
      "Stanley Park in this city is larger than New York's Central Park and was named the world's best park by TripAdvisor.",
    ],
  },
  {
    city: "Florence",
    country: "Italy",
    clues: [
      "This city is known as the birthplace of the Renaissance and is home to Michelangelo's David.",
      "Its historic center is dominated by a cathedral with a distinctive red dome.",
    ],
    fun_fact: [
      "The Stendhal syndrome, a psychosomatic condition involving rapid heartbeat and dizziness, was first described in visitors overwhelmed by this city's art.",
      "This city was the first in Europe to have paved streets, in 1339.",
    ],
    trivia: [
      "The Medici family, famous patrons of the arts, ruled this city for nearly 300 years.",
      "This city is home to the Uffizi Gallery, one of the world's oldest and most famous art museums.",
    ],
  },
  {
    city: "Dublin",
    country: "Ireland",
    clues: [
      "This city is known for its literary heritage and a famous dark beer brewed at St. James's Gate.",
      "The River Liffey runs through its center, crossed by the Ha'penny Bridge.",
    ],
    fun_fact: [
      "The St. Patrick's Day parade actually originated in this city's namesake brewery, not for religious reasons.",
      "The Dublin Zoo is the third oldest zoo in the world, opened in 1831.",
    ],
    trivia: [
      "The Book of Kells, a 9th-century illuminated manuscript, is housed in Trinity College in this city.",
      "This city has produced many famous literary figures including James Joyce, Oscar Wilde, and Samuel Beckett.",
    ],
  },
  {
    city: "Havana",
    country: "Cuba",
    clues: [
      "This city is known for its vintage American cars, colorful colonial architecture, and seaside promenade.",
      "It's famous for cigars, rum, and being a time capsule of the 1950s.",
    ],
    fun_fact: [
      "This city has the largest collection of Spanish colonial architecture in the Americas.",
      "Ernest Hemingway lived near this city for 20 years and wrote 'The Old Man and the Sea' there.",
    ],
    trivia: [
      "The famous daiquiri cocktail was invented at El Floridita bar in this city.",
      "This city's historic center, Old Havana, is a UNESCO World Heritage site.",
    ],
  },
  {
    city: "Stockholm",
    country: "Sweden",
    clues: [
      "This city is spread across 14 islands connected by 57 bridges.",
      "It's known for its waterways, ABBA museum, and the Nobel Prize ceremony.",
    ],
    fun_fact: [
      "This city's subway system is called 'the world's longest art gallery' with over 90 stations decorated with sculptures, mosaics, and paintings.",
      "The Stockholm syndrome psychological phenomenon was named after a bank robbery in this city in 1973.",
    ],
    trivia: [
      "This city is home to the Vasa Museum, which houses a nearly fully intact 17th-century ship that sank on its maiden voyage.",
      "Stockholm's Old Town, Gamla Stan, dates back to the 13th century and includes the Royal Palace.",
    ],
  },
  {
    city: "Machu Picchu",
    country: "Peru",
    clues: [
      "This ancient city sits high in the Andes Mountains and was built by the Inca civilization.",
      "It remained hidden from the outside world until 1911 when it was rediscovered by an American explorer.",
    ],
    fun_fact: [
      "This city was built without the use of wheels, iron tools, or mortar, yet its stonework is so precise that a knife blade cannot fit between the stones.",
      "It was likely abandoned before Spanish conquistadors arrived in Peru, which is why they never found it.",
    ],
    trivia: [
      "The name of this city means 'Old Peak' or 'Old Mountain' in the Quechua language.",
      "This site is one of the New Seven Wonders of the World, selected in 2007.",
    ],
  },
  {
    city: "Petra",
    country: "Jordan",
    clues: [
      "This ancient city is carved into pink sandstone cliffs and accessed through a narrow canyon.",
      "Its most famous structure is a temple with a Greek-inspired façade known as 'The Treasury'.",
    ],
    fun_fact: [
      "This city has appeared in several films, most famously as the location of the Holy Grail in 'Indiana Jones and the Last Crusade'.",
      "The site covers over 100 square miles and contains more than 800 monuments.",
    ],
    trivia: [
      "This city was established around the 4th century BC by the Nabataean Kingdom.",
      "It remained unknown to the Western world until 1812 when it was rediscovered by Swiss explorer Johann Ludwig Burckhardt.",
    ],
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    clues: [
      "This city has a famous castle on a volcanic rock and hosts the world's largest arts festival.",
      "It's divided into an Old Town and New Town, both UNESCO World Heritage sites.",
    ],
    fun_fact: [
      "This city has more listed buildings than anywhere in the world.",
      "There are said to be hundreds of underground passages and chambers beneath the Old Town, many of which are supposedly haunted.",
    ],
    trivia: [
      "J.K. Rowling wrote much of the Harry Potter series in cafes in this city.",
      "This city is built on seven hills, just like Rome.",
    ],
  },
  {
    city: "Dubrovnik",
    country: "Croatia",
    clues: [
      "This coastal city is surrounded by massive stone walls and features in Game of Thrones as 'King's Landing'.",
      "Known as the 'Pearl of the Adriatic' for its beauty and historical significance.",
    ],
    fun_fact: [
      "This city was one of the first medieval cities to have a sewage system, built in 1296.",
      "During its time as an independent republic, this city abolished the slave trade in 1416, one of the first places to do so.",
    ],
    trivia: [
      "This city's old town is completely pedestrianized—no cars are allowed within the walls.",
      "The pharmacy within the Franciscan Monastery in this city has been operating since 1317, making it one of the oldest pharmacies in Europe.",
    ],
  },
  {
    city: "Quebec City",
    country: "Canada",
    clues: [
      "This city has the only fortified city walls north of Mexico in the Americas.",
      "Known for its European feel, old-world charm, and a famous hotel that looks like a castle.",
    ],
    fun_fact: [
      "This city hosts the world's largest winter carnival, featuring ice sculptures and a hotel made entirely of ice and snow.",
      "The famous Château Frontenac hotel holds the Guinness World Record for being the most photographed hotel in the world.",
    ],
    trivia: [
      "This city was founded in 1608 by French explorer Samuel de Champlain.",
      "Quebec City's Old Town is a UNESCO World Heritage site and the only walled city in North America north of Mexico.",
    ],
  },
];

const newData = data.map((item) => ({
  ...item,
  id: uuidv4(),
}));

const Questions = require("./app/models/questions");
async function seedDatabase() {
  try {
    await db.sync({ force: true });
    await Questions.bulkCreate(newData);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await db.close();
  }
}

seedDatabase();
