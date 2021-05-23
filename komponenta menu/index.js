'use strict';
console.log('JavaScript funguje');

const polozky = [
	{
		id: 1,
		logo:` Brno with Kids`,
		nazevPolozky: 'Health Care',
		odkaz: 'healthCare',
		
	},
	{
		id: 2,
		nazevPolozky: 'Travelling',
		odkaz: 'travelling',
	},
	{
		id: 3,
		nazevPolozky: 'Education',
		odkaz: 'education',
	},
	{
		id: 4,
		nazevPolozky: 'DaysOut',
		odkaz: 'daysOut',
	},
	{
		id: 5,
		nazevPolozky: 'Events',
		odkaz: 'events',
	},
	{
		id: 6,
		nazevPolozky: 'Parenthood',
		odkaz: 'parenthood',
	},
	
	
];


const Polozka = (props) => {
	const { nazevPolozky, odkaz } = props;

	
	return `
	<header>
	<div class="topbar">
	  <div class="header__title">
		<a href="index.html"><h1 class="title"></h1></a>
	  </div>
	  <div class="navigation">
		<a href="menu.html"><button class="nav-btn"></button></a>
		<nav class="nav-closed">
		  <a href="${odkaz}.html">${nazevPolozky}</a>
		
		</nav>
	  </div>
	</div>
  </header>
	`;
}


const SeznamPolozek = (props) => {
	const { seznam, nadpis, } = props;

	let result = '';
	// for (let i = 0; i < seznam.length; i++) {
	// 	result += Zvire( seznam[i] );
	// }

	seznam.forEach((zviratko) => {
		result += Polozka(zviratko)
	});

	return `
		<div class="polozky" id="polozky">
			<h2>${nadpis}</h2>
			${result}
		</div>
	`;
}

const appElm = document.querySelector('#menu');
appElm.innerHTML = SeznamPolozek( { seznam: polozky, nadpis: '', } );







// const tlacitkoElm = document.querySelector('#hledat');
// tlacitkoElm.addEventListener('click', hledej);



