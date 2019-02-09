'use strict';

(function(module) {
  const homeController = {};
  homeController.show = () => {
    $("main > section").show();
    $("main > div").show();
    $('.tab').removeClass('selected');
    $('.sidefo').empty();
  };
  module.homeController = homeController;

  const projectController = {};
  projectController.show = () => {
    $("#projectZone").show().siblings().hide();
    $("#footerBuffer, #pageBreak").show();
  };
  module.projectController = projectController;

  const aboutController = {};
  aboutController.show = () => {
    $("#about").show().siblings().hide();
    $("#footerBuffer, #pageBreak").show();
  }
  module.aboutController = aboutController;

  const contactController = {};
  contactController.show = () => {
    $("#contact").show().siblings().hide();
    $("#footerBuffer, #pageBreak").show();
  }
  module.contactController = contactController;

})(window);
