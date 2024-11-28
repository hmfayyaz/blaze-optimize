window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVXJLN6K');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href]').forEach(function(link) {
        link.addEventListener('click', function() {
            var href = link.href;
            if (href.includes('/app')) {
                dataLayer.push({
                    'event': 'conversion_event_default_1',
                    'event_category': 'Navigation',
                    'event_label': 'App Link',
                    'event_action': 'Click',
                    'event_value': href
                });
            } else if (href.match('/contact')) {
                dataLayer.push({
                    'event': 'conversion_event_default_2',
                    'event_category': 'Navigation',
                    'event_label': 'Contact Link',
                    'event_action': 'Click',
                    'event_value': href
                });
            } else {
                dataLayer.push({
                    'event': 'other_link_click',
                    'event_category': 'Navigation',
                    'event_label': 'Other Link',
                    'event_action': 'Click',
                    'event_value': href
                });
            }
        });
    });
});