var urlParams = new URLSearchParams(window.location.search);
var paramNames = ['gclid', 'li_fat_id', 'utm_term', 'utm_content', 'utm_source'];
paramNames.forEach(function(name) {
    var value = urlParams.get(name);
    if (value) {
        localStorage.setItem(name, value);
    }
});
var full_url = window.location.href;

if (!localStorage.getItem('fullUrl')) {
  localStorage.setItem('fullUrl', full_url);
}
