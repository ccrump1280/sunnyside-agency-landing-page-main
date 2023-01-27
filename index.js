$(() => {
    fillNavigationMenus();
})

const fillNavigationMenus = function() {
    const navigationMenus = $('.navigation');
    navigationMenus.html(`
        <div class="navigation-menu">
            <a href="#" class="button">About</a>
            <a href="#" class="button">Services</a>
            <a href="#" class="button">Projects</a>
            <a href="#" class="button contact-button">
                <h5 class="primary-button-text">Contact</h5>
            </a>
        </div>
    `)

}
const toggleMobileNavigationMenu = function() {
    const mobileMenu = $('#mobile-menu');
    if (mobileMenu.css('display') == 'block'){
        mobileMenu.css('display','none');
    }else {
        mobileMenu.css('display','block');
    }
}
