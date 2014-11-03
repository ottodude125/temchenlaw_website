

function load_main () {
  $( ".mainContent" ).load( "src/main.html" );
  document.title = 'Temchen Law';
};
function load_practices () {
  $( ".mainContent" ).load( "src/practices.html" );
  document.title = 'Temchen Law - Practices';
};
function load_about_me () {
  $( ".mainContent" ).load( "src/about_me.html" );
  document.title = 'Temchen Law - About Me';
};
function load_contact_us () {
  $( ".mainContent" ).load( "src/contact_us.html" );
  document.title = 'Temchen Law - Contact Us';
};
function load_pricing () {
  $( ".mainContent" ).load( "src/pricing.html" );
  document.title = 'Temchen Law - Pricing';
};
$(function(){
  $(".header").load("src/header.html");
  $(".mainContent").load("src/main.html");
  $(".footer").load("src/footer.html");
});


