$(window).on("load", function () {
     $("html").addClass('ss-preload');
     $(".loader-wrapper").delay(500).fadeOut("slow");
     // for hero content animations 
     $("html").removeClass('ss-preload');
     $("html").addClass('ss-loaded');
});

$(document).ready(function () {
     $(this).scrollTop(0);
});





/**************************************************************************** */
const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
     naviList.classList.toggle('active');
})



/********************How does it work************************************** */
const buttonIssuer = document.getElementById('button-issuer');
const buttonVerifier = document.getElementById('button-verifier');
const buttonHolder = document.getElementById('button-holder');

$('#button-holder').click(function () {
     $('#trust-trig-image').removeClass('issuer-state verifier-state holder-state');
     $('#trust-trig-image').addClass('holder-state');

     $("#trig-h").attr("transform", "rotate(0 487.848 250.326)");
     $("#trig-i").attr("transform", "rotate(0 213.726 92.593)");
     $("#trig-v").attr("transform", "rotate(0 215.569 411.809)");


     $('.sign-main').fadeOut("slow");
     $('.how-para-main').fadeOut("slow");
     $('.how-list').fadeOut("slow");


     $('.sign-main').fadeIn(5, function () {
          /** text replacement*/
          $('.sign-all').replaceWith('<div class="sign-holder sign-all">H</div>')
          $('.sign-header-main').replaceWith("<h1 class='sign-header-main'>The Holder</h1>");
     });
     $('.how-para-main').fadeIn(5, function () {
          $('.how-para').replaceWith('<p class="how-para">Everyday people who hold academic credentials. The holder will store each digital credential in a digital wallet that is privacy preserving and completely controlled by the owner.</p>')
          $('.how-para-1').replaceWith('<p class="how-para-1">Example of holders:</p>')
     });
     $('.how-list').fadeIn(5, function () {
          $('.how-list-1').replaceWith('<dd class="how-list-1">-  &nbsp;&nbsp;Graduation Certificate</dd>')
          $('.how-list-2').replaceWith('<dd class="how-list-2">-  &nbsp;&nbsp;Academic Transcript</dd>')
          $('.how-list-3').replaceWith('<dd class="how-list-3">-  &nbsp;&nbsp;Specialised Qualifications</dd>')
          $('.how-list-4').replaceWith('<dd class="how-list-4">-  &nbsp;&nbsp;Proof of Club Membership</dd>')


     });

     $(this).addClass('holder-nav-enable')
     $('#button-verifier').removeClass('holder-nav-enable')
     $('#button-issuer').removeClass('holder-nav-enable')




})

$('#button-verifier').click(function () {

     $('#trust-trig-image').removeClass('issuer-state verifier-state holder-state');
     $('#trust-trig-image').addClass('verifier-state');

     $("#trig-h").attr("transform", "rotate(120 487.848 250.326)");
     $("#trig-i").attr("transform", "rotate(120 213.726 92.593)");
     $("#trig-v").attr("transform", "rotate(120 215.569 411.809)");

     $('.sign-main').fadeOut("slow");
     $('.how-para-main').fadeOut("slow");
     $('.how-list').fadeOut("slow");

     $('.sign-main').fadeIn(5, function () {
          /** text replacement*/
          $('.sign-all').replaceWith('<div class="sign-verifier sign-all">V</div>')
          $('.sign-header-main').replaceWith("<h1 class='sign-header-main'>The Verifier</h1>");
     });
     $('.how-para-main').fadeIn(5, function () {
          $('.how-para').replaceWith('<p class="how-para">The verifier is an entity or organisation that wishes to verify claims or credentials of a certain individual. They can make requests to see specific information in a credential.</p>')
          $('.how-para-1').replaceWith('<p class="how-para-1">Examples of Verifiers:</p>')
     });
     $('.how-list').fadeIn(5, function () {
          $('.how-list-1').replaceWith('<dd class="how-list-1">-  &nbsp;&nbsp;Universities</dd>')
          $('.how-list-2').replaceWith('<dd class="how-list-2">-  &nbsp;&nbsp;Employers</dd>')
          $('.how-list-3').replaceWith('<dd class="how-list-3">-  &nbsp;&nbsp;Governments</dd>')
          $('.how-list-4').replaceWith('<dd class="how-list-4">-  &nbsp;&nbsp;Proffesional Associations</dd>')

     });


     $(this).addClass('holder-nav-enable')
     $('#button-holder').removeClass('holder-nav-enable')
     $('#button-issuer').removeClass('holder-nav-enable')
})

$('#button-issuer').click(function () {
     $('#trust-trig-image').removeClass('issuer-state verifier-state holder-state');
     $('#trust-trig-image').addClass('issuer-state');

     $("#trig-h").attr("transform", "rotate(240 487.848 250.326)");
     $("#trig-i").attr("transform", "rotate(240 213.726 92.593)");
     $("#trig-v").attr("transform", "rotate(240 215.569 411.809)");


     $('.sign-main').fadeOut("slow");
     $('.how-para-main').fadeOut("slow");
     $('.how-list').fadeOut("slow");


     $('.sign-main').fadeIn(5, function () {
          /** text replacement*/
          $('.sign-all').replaceWith('<div class="sign-issuer sign-all">I</div>')
          $('.sign-header-main').replaceWith("<h1 class='sign-header-main'>The Issuer</h1>");
     });
     $('.how-para-main').fadeIn(5, function () {
          $('.how-para').replaceWith('<p class="how-para">The issuer is an entity or organisation that issues credentials or other form of claims to individuals.</p>')
          $('.how-para-1').replaceWith('<p class="how-para-1">Example of issuers:</p>')
     });
     $('.how-list').fadeIn(5, function () {
          $('.how-list-1').replaceWith('<dd class="how-list-1">-  &nbsp;&nbsp;High Schools</dd>')
          $('.how-list-2').replaceWith('<dd class="how-list-2">-  &nbsp;&nbsp;Universities</dd>')
          $('.how-list-3').replaceWith('<dd class="how-list-3">-  &nbsp;&nbsp;Organisation Presidents</dd>')
          $('.how-list-4').replaceWith('<dd class="how-list-4">-  &nbsp;&nbsp;Examination Authority</dd>')

     });

     $(this).addClass('holder-nav-enable')
     $('#button-verifier').removeClass('holder-nav-enable')
     $('#button-holder').removeClass('holder-nav-enable')


})

/********* *********************************************************/


/******************** */
