'use strict';
console.log('JavaScript funguje');

const vylety = [
  {
    id: 1,
    nazev: `Židlochovice`,
    tripPodtitul: `a paradise of children playgrounds, a park with mouflons and a beautiful lookout tower  the Acacia Tower`,
    stroller: `partly`,
    distance: '2,2',
    popis: `Open cafe: 
		The bakery (49.0371094N, 16.6197625E) take away tortillas, cafe, sweets, bread, snacks. Checkpoint no.5 on the mapy.cz.
		
		Playgrounds:
		The "Robertova vila" playground (49.0325317N, 16.6156044E)
		The "Družba" playground (49.0392272N, 16.6170986E)
		
		Lookout tower:
		The Výhon lookout tower (49.0418314N, 16.6390458E)
		
		
		Getting to the start:
		By public transport: 
		By train to the terminus "Židlochovice".  From the railway stations "Brno-Královo Pole, Brno-Lesná, Brno-Židenice, Brno-Hlavní nádraží."
		
		More details and timetables:
		www.idos.cz

		By car:
		Parking is possible in front of railway station in Židlochovice. (49.0331672N, 16.6179294E)

		Route description:
		You will see a gate and behind it a children's playground at "Robertova vila", we recommend starting here from the train station. From the playground, then return to the station and cross the road at the end of the tracks. You will reach a sidewalk along the river. Follow it to the left of the station towards the high chimney. He cannot be overlooked. From the chimney, you will see the local castle. It is not accessible, but you will find a large field with mouflons. Access to the park is the gateway to the Penny's Store.  The garden is beautiful and worth a visit. From the park then continue to the many playgrounds on the street "Družba", they are hidden between the houses but explore them. From the playgrounds, we recommend going back to the main square. You will find the court just behind the big bridge. At its upper end, you will see the town hall. Right next to it is an excellent bakery where you can buy coffee and tortillas. At the same time, a green tourist sign starts at the bakery. If you follow it towards the church and further up the hills, you will reach a lookout tower called the Acacia Tower. On the tourist signpost, the lookout tower is marked under the name "Výhon". The journey to the Acacia Tower / "Výhon" lookout tower takes about 40 minutes. Distance from the square is 2 km.
		It leads through a beautiful landscape with unique forests and statues in the countryside.		
		`,
    foto: `zidlochovice.jpg`,
  },

  {
    id: 2,
    nazev: `Dinopark and ZOO in Vyškov`,
    tripPodtitul: `childrens playgrounds, ZOO and Dinopark`,
    stroller: 'yes',
    distance: '2,2',
    popis:
      'DinoPark and ZOO PARK Vyskov represent an ideal combination to get information about long-extinct Mesozoic giants and about fauna at present focusing on local domestic animals. DinoPark Vyskov is located in a picturesque forest park on the outskirts Vyskov, and dinosaurs literally fell in love with the environment. Dozens of life-size models, absolutely unique hanging cableway called DinoBike that will let you see DinoPark from bird´s eye view; and a list of attractions is just beginning, come and see. A unique road train DinoExpress will transport you to zoopark and back for free.But the area is not only Dinopark. You can spent a half day in the ZOO PARK with lot of house animals. The ZOO PARK is great for smaller visitors and can be more interesting than the Dinopark for them.The Dinopark highly recomended for the older children. The access to the Dinopark is only via DinoTrain from the ZOO Park. ',
    foto: 'dinopark.jpg',
  },

  {
    id: 3,
    nazev: 'Educational Forest Path for children',
    tripPodtitul: 'all you wanted to know about forest life',
    stroller: 'no',
    distance: '2,2',
    popis:
      'For lovers of secrets of forest, games and beautiful views: The Educational forest path in Kuřim.Follow the description of the journey in the post.    ',
    foto: 'kurim.jpg',
  },
];

const trip = (props) => {
  const { nazev, tripPodtitul, stroller, distance, popis, foto } = props;

  // const nazev = props.nazev;
  // const nazevLatinsky = props.nazevLatisky;
  // const popis = props.popis;
  // const foto = props.foto;

  return `
		<div class="trip">
			<div class="trip__foto">
				<img src="img/${foto}" alt="${nazev}">
			</div>
			<div class="trip__detail">
				<div class="trip__nazev">${nazev}</div>
				<div class="trip__podtitul">${tripPodtitul}</div>
				<div class="trip__stroller">${stroller}</div>
				<div class="trip__distance">${distance}</div>
				<div class="trip__popis">
				${popis.slice(0, 150)}...
				</div>
			</div>
		</div>
	`;
};

const SeznamVyletu = (props) => {
  const { seznam, nadpis } = props;

  let result = '';

  seznam.forEach((vyletik) => {
    result += trip(vyletik);
  });

  return `
		<div class="vylety" id="trips">
			<h2>${nadpis}</h2>
			${result}
		</div>
	`;
};

const appElm = document.querySelector('#app');
appElm.innerHTML = SeznamVyletu({
  seznam: vylety,
  nadpis: 'Best family hikes ever',
});

const hledej = (event) => {
  event.preventDefault();

  const dotaz = document.querySelector('#dotaz').value;

  const vysledekHledani = vylety.filter((vyletik) =>
    vyletik.nazev.toLowerCase().includes(dotaz.toLowerCase()),
  );

  appElm.innerHTML = SeznamVyletu({
    seznam: vysledekHledani,
    nadpis: 'Výsledky hledání',
  });
};

// const tlacitkoElm = document.querySelector('#hledat');
// tlacitkoElm.addEventListener('click', hledej);

const formularElm = document.querySelector('#formular');
formularElm.addEventListener('submit', hledej);
