'use strict';

page('/', homeController.show);
page('/projects', projectController.show);
page('/about', aboutController.show );
page('/contact', contactController.show);
page();
