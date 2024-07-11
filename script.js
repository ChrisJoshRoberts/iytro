document.addEventListener('DOMContentLoaded', () => {
  const filterItems = document.querySelectorAll('.filter-item-container');
  const contentContainers = document.querySelectorAll('.inner-content-container');
  const infoContainers = document.querySelectorAll('.info-container');
  const bannerTexts = document.querySelectorAll('.banner-text');
  const quotes = document.querySelectorAll(".quote-container");

  if (filterItems.length > 0) {
    // Add the active classes to the first filter item and its corresponding content on page load
    const firstItem = filterItems[0];
    firstItem.classList.add('filter-active');
    firstItem.querySelector('h1').classList.add('heading-active');
    firstItem.querySelectorAll('.leg1, .leg2, .leg3').forEach(arrow => arrow.classList.add('active-arrow'));

    const firstContentId = firstItem.getAttribute('data-content');
    const firstBannerId = firstItem.getAttribute('data-banner');
    const firstQuoteId = firstItem.getAttribute('data-quote');

    document.getElementById(firstContentId).classList.add('show');
    document.getElementById('info-' + firstContentId.split('-')[1]).classList.add('show');

    console.log(`First banner ID: ${firstBannerId}`);
    const firstBannerElement = document.getElementById(firstBannerId);
    if (firstBannerElement) {
      firstBannerElement.classList.add('show');
    } else {
      console.error(`Banner element with ID ${firstBannerId} not found.`);
    }

    const firstQuoteElement = document.getElementById(firstQuoteId);
    if (firstQuoteElement) {
      firstQuoteElement.classList.add('show');
    } else {
      console.error(`Quote element with ID ${firstQuoteId} not found.`);
    }
  }

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove the active classes from all filter items and add hide class to all content containers, info containers, banner texts, and quotes
      filterItems.forEach(el => {
        el.classList.remove('filter-active');
        el.querySelector('h1').classList.remove('heading-active');
        el.querySelectorAll('.leg1, .leg2, .leg3').forEach(arrow => arrow.classList.remove('active-arrow'));
      });
      contentContainers.forEach(content => {
        content.classList.remove('show');
        content.classList.add('hide');
      });
      infoContainers.forEach(info => {
        info.classList.remove('show');
        info.classList.add('hide');
      });
      bannerTexts.forEach(banner => {
        banner.classList.remove('show');
        banner.classList.add('hide');
      });
      quotes.forEach(quote => {
        quote.classList.remove('show');
        quote.classList.add('hide');
      });

      // Add the active classes to the clicked filter item and show the corresponding content, info container, banner text, and quote
      item.classList.add('filter-active');
      item.querySelector('h1').classList.add('heading-active');
      item.querySelectorAll('.leg1, .leg2, .leg3').forEach(arrow => arrow.classList.add('active-arrow'));

      const contentId = item.getAttribute('data-content');
      const bannerId = item.getAttribute('data-banner');
      const quoteId = item.getAttribute('data-quote');

      document.getElementById(contentId).classList.remove('hide');
      document.getElementById(contentId).classList.add('show');
      document.getElementById('info-' + contentId.split('-')[1]).classList.remove('hide');
      document.getElementById('info-' + contentId.split('-')[1]).classList.add('show');

      // Show the corresponding banner text
      console.log(`Clicked banner ID: ${bannerId}`);
      const bannerElement = document.getElementById(bannerId);
      if (bannerElement) {
        bannerElement.classList.remove('hide');
        bannerElement.classList.add('show');
      } else {
        console.error(`Banner element with ID ${bannerId} not found.`);
      }

      // Show the corresponding quote
      const quoteElement = document.getElementById(quoteId);
      if (quoteElement) {
        quoteElement.classList.remove('hide');
        quoteElement.classList.add('show');
      } else {
        console.error(`Quote element with ID ${quoteId} not found.`);
      }
    });
  });
});
