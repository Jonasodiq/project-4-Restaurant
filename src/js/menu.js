const siteMenu = () => {
  // Get element from DOM
  const menuButton = document.querySelector('.menu-button'); // Hämta knappen som öppnar menyn
  const menu = document.querySelector('.site-menu'); // Hämta menyn
  const bookButton = document.querySelector('.site-header__button'); // Hämta bokningsknappen
  const menuItem = document.querySelector('.site-menu__list');

  // Toggle Menu - Funktion för att växla (visa/dölja) menyn
  const toggleMenu = () => {
    menu.classList.toggle('site-menu--visible'); // Lägg till eller ta bort CSS-klassen 'site-menu--visible' på menyn för att visa eller dölja den
    menuButton.classList.toggle('menu-button--close'); // Lägg till eller ta bort CSS-klassen 'menu-button--close' på knappen för att ändra dess utseende
    bookButton.classList.toggle('site-header__button--menu-opened'); // Lägg till eller ta bort CSS-klassen 'site-header__button--menu-opened' på bokningsknappen för att ändra dess utseende
  };

  const closeMenuItem = () => {
    menu.classList.remove('site-menu--visible');
  };

  // Create Event - Skapa en händelselyssnare för att lyssna på klick på menyknappen
  menuButton.addEventListener('click', toggleMenu);
  menuItem.addEventListener('click', closeMenuItem);

  console.log('Menu started...');
};

siteMenu(); // Anropa funktionen för att aktivera menyn
