$(function() {
  $('input[type=number], select').styler({
    locale : 'en',
    locales : {
      'en' : {
        filePlaceholder : 'No file selected',
        fileBrowse : 'Browse...',
        fileNumber : 'Selected files: %s',
        selectPlaceholder : 'Select...',
        selectSearchNotFound : 'No matches found',
        selectSearchPlaceholder : 'Search...'
      }
    },
  });


  $('.slider__wrapper').slick({
    arrows: false,
    dots: true
  })
});