'use strict';
console.log('JavaScript funguje');

const polozky = [
  {
    id: 1,
    logo: ` Brno with Kids`,
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
    nazevPolozky: 'Days Out',
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

const PolozkaMenu = (props) => {
  const { nazevPolozky, odkaz } = props;

  return `
	<li>
		<a href="${odkaz}.html">${nazevPolozky}</a>
	</li>
	`;
};

const MenuKomponenta = (props) => {
  const { seznam, nadpis, rozbalenoProMobil } = props;

  let polozkyHtml = '';
  seznam.forEach((zviratko) => {
    polozkyHtml += PolozkaMenu(zviratko);
  });

  return `
		<h1><a href="index.html">${nadpis}</a></h1>

		<a class="navigation__burger-btn" href="#">
			<i class="fas fa-bars"></i>
		</a>
		<nav class="static-navigation">
			<ul>
				${polozkyHtml}
			</ul>
		</nav>

		<nav class="burger-navigation">
			<a class="navigation__close-btn" href="#">
				<i class="fas fa-times"></i>
			</a>
			<ul>
				${polozkyHtml}
			</ul>
		</nav>
	`;
};

const activateBurgerMenu = (closeBtnElm, expandBtnElm, headerElm) => {
  const toggleClasses = (event) => {
    event.preventDefault();
    headerElm.classList.toggle('burger-collapsed');
    headerElm.classList.toggle('burger-expanded');
  };

  closeBtnElm.addEventListener('click', toggleClasses);
  expandBtnElm.addEventListener('click', toggleClasses);
};

const headerElm = document.querySelector('header');

headerElm.innerHTML = MenuKomponenta({
  seznam: polozky,
  nadpis: 'Brno with kids',
});
headerElm.classList.add('burger-collapsed'); // ve vychozim stavu je burger menu neviditelne

activateBurgerMenu(
  document.querySelector('.navigation__close-btn'),
  document.querySelector('.navigation__burger-btn'),
  headerElm,
);

