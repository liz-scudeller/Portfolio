$(document).ready(function() {
  let lockedScrollY = 0;

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

$('.experience-toggle').on('click', function() {
  const $button = $(this);
  const $card = $button.closest('.experience-card');
  const isMobile = window.matchMedia('(max-width: 980px)').matches;

  if (!isMobile) {
    return;
  }

  const $modal = $('.experience-modal');
  const $content = $('.experience-modal-content');
  const title = $card.find('h3').first().text();
  const company = $card.find('.company').first().text();
  const roleMeta = $card.find('.experience-meta').first().html();
  const roleDetail = $card.find('.role-detail').first().prop('outerHTML');
  const summary = $card.find('.experience-content > p').first().text();
  const achievements = $card.find('.achievement-list').first().prop('outerHTML');
  const techStack = $card.find('.tech-stack').first().prop('outerHTML');

  $content.html(`
    <div class="experience-modal-copy">
      <div class="experience-meta">${roleMeta}</div>
      <h3 id="experience-modal-title">${title}</h3>
      <p class="company">${company}</p>
      ${roleDetail}
      <p class="experience-summary">${summary}</p>
      ${achievements}
      ${techStack}
    </div>
  `);

  $modal.addClass('is-open').attr('aria-hidden', 'false');
  lockedScrollY = window.scrollY || window.pageYOffset || 0;
  $('body')
    .addClass('modal-open')
    .css('top', `-${lockedScrollY}px`);
});

$('.experience-modal-backdrop, .experience-modal-close').on('click', function() {
  $('.experience-modal').removeClass('is-open').attr('aria-hidden', 'true');
  $('.experience-modal-content').empty();
  $('body')
    .removeClass('modal-open')
    .css('top', '');
  window.scrollTo(0, lockedScrollY);
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
