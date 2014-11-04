

/* Load main page */
function load_main () {
  $( ".mainContent" ).load( "src/main.html" );
  document.title = 'Temchen Law';
};

/* Load practices page and update page title */
function load_practices () {
  $( ".mainContent" ).load( "src/practices.html" );
  document.title = 'Temchen Law - Practices';
};

/* Load about me page and update page title */
function load_about_me () {
  $( ".mainContent" ).load( "src/about_me.html" );
  document.title = 'Temchen Law - About Me';
};

/* Load contact us page and update page title */
function load_contact_us () {
  $( ".mainContent" ).load( "src/contact_us.html" );
  document.title = 'Temchen Law - Contact Us';
};

/* Load pricing page and update page title */
function load_pricing () {
  $( ".mainContent" ).load( "src/pricing.html" );
  document.title = 'Temchen Law - Pricing';
};

/* If contact form is valid then submit email */
function submit_contact_form() {
  if(check_contact_form_fields()){
    load_main();
  }
};

/* Called when contact us form is submitted. Check if the name and 
email address are filled in. Also check if email is valid. */
function check_contact_form_fields () {
  var flag = true;
  /* Clear errors from previous run */
  $(".name_error").text("");
  $(".name_field").removeClass(" error ");
  $(".email_error").text("");
  $(".email_field").removeClass(" error ");

  if($(".name_field").val() == ""){
    $(".name_field").addClass(" error ");
    $(".name_error").append(" Please enter your name ");
    flag =  false;
  }

  /* Check if email is filled in. If not display erorr. 
  If it is then check syntax. */
  email_val = $(".email_field").val();
  if( email_val == ""){
    $(".email_field").addClass(" error ");
    $(".email_error").append(" Please enter an email ");
    flag =  false;
  }  
  else if(!is_email(email_val)){
    $(".email_field").addClass(" error ");
    $(".email_error").append(" Invalid email ");
    flag = false;
  }
  return flag;
};

/* Check if email is valid */
function is_email(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

/* function to load header, footer, and main content when page is loaded */
$(function(){
  $(".header").load("src/header.html");
  $(".mainContent").load("src/main.html");
  $(".footer").load("src/footer.html");
});




