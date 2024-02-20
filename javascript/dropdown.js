jQuery(document).ready(function ($) {
    var mobileServicesBtn = $(".services_mobile_btn");

    var isActive = false;
    mobileServicesBtn.click(function() {
        if (isActive == false) {
            isActive = true;
            $(".mobile_nav_dropdown").stop(true).fadeIn();
        }else {
            isActive = false;
            $(".mobile_nav_dropdown").stop(true).fadeOut();
        }
    });
  });