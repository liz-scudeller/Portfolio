$(document).ready(function() {

  const menuNav = document.querySelector(".navbar");
  const navToggle = document.querySelector('.mobile-nav-toggle');

  navToggle.addEventListener('click', () => {
    const visibility = menuNav.getAttribute('data-visible');

    if (visibility === "false"){
      menuNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded',true);

    } else if (visibility === "true"){
      menuNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded',false);

    }
  })

//Active Section and Menu

$.fn.isInViewport = function() {

	var elementTop = $(this).offset().top;

	var elementBottom = elementTop + $(this).outerHeight() / 2;

	var viewportTop = $(window).scrollTop();

	var viewportHalf = viewportTop + $(window).height() / 2;

	return elementBottom > viewportTop && elementTop < viewportHalf;

};

$(window).on('load resize scroll', function() {

	$('.section').each(function() {

    var sectionTitle = $(this).data("title");
    var menuItemTitle = $('#' + sectionTitle);

		if ($(this).isInViewport()) {
      $(menuItemTitle).addClass('active')
		} else {
      $(menuItemTitle).removeClass('active')
		}

	});

});
//End Active Section and Menu

$('.menu-items a').on('click', function() {
  menuNav.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
});

});

//jquery end

function sendEmail() {
  // Email configuration
  const recipientEmail = 'lizalvarezscudeller@gmail.com';
  const subject = 'Inquiry from Portfolio Website';
  const body = 'Hello Liz,\n\nI am reaching out from your portfolio website.';

  // Construct mailto URL
  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open default email client with pre-filled email
  window.location.href = mailtoUrl;
}
