​(​(​)​ ​=>​ ​{
 ​    ​const​ ​refs​ ​=​ ​{
 ​        ​openMobileMenuBtn​: ​document​.​querySelector​(​'[data-mobile-menu--open]'​)​,
 ​        ​closeMobileMenuBtn​: ​document​.​querySelector​(​'[data-mobile-menu--close]'​)​,
 ​        ​mobileMenu​: ​document​.​querySelector​(​'[data-mobile-menu]'​)​,
mobileWindow: document.querySelector('[data-mobile-menu__window]'),
 ​    ​}​;
 ​    ​refs​.​openMobileMenuBtn​.​addEventListener​(​'click'​,​ ​toggleMobile​)​;
 ​    ​refs​.​closeMobileMenuBtn​.​addEventListener​(​'click'​,​ ​toggleMobile​)​;
 ​    ​function​ ​toggleMobile​(​)​ ​{
 ​        ​refs​.​mobileMenu​.​classList​.​toggle​(​'is-hidden'​)​;
refs.mobileWundow.classList.toggle ('mobile-menu__window--animated');
 ​    ​}
 ​}​)​(​)​;