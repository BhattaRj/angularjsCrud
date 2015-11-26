<!DOCTYPE html>
<html class="no-js">
<head>

    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="sis/bower_components/bootstrap/dist/css/bootstrap.min.css" />
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="sis/src/styles/main.css">
    <link rel="stylesheet" href="sis/src/styles/sb-admin-2.css">
    <link rel="stylesheet" href="sis/src/styles/timeline.css">

    <link rel="stylesheet" href="sis/bower_components/metisMenu/dist/metisMenu.min.css">
    <link rel="stylesheet" href="sis/bower_components/angular-loading-bar/build/loading-bar.min.css">
    <link rel="stylesheet" href="sis/bower_components/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">

    <link rel="stylesheet" type="text/css" href="https://cdn.gitcdn.xyz/cdn/angular/bower-material/v1.0.0-rc5/angular-material.css">

    <!-- endbuild -->

    <!-- build:js(.) scripts/vendor.js -->
    <!-- bower:js -->
    <script src="sis/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="sis/bower_components/angular/angular.min.js"></script>
    <script src="sis/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="sis/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="sis/bower_components/json3/lib/json3.min.js"></script>
    <script src="sis/bower_components/oclazyload/dist/ocLazyLoad.min.js"></script>
    <script src="sis/bower_components/angular-loading-bar/build/loading-bar.min.js"></script>
    <script src="sis/bower_componentsk/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
    <script src="sis/bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <script type="text/javascript" src="sis/bower_components/angular-animate/angular-animate.min.js"></script>

    <script type="text/javascript" src="sis/bower_components/angular-route/angular-route.min.js"></script>

    <script type="text/javascript" src="sis/bower_components/angular-aria/angular-aria.min.js"></script>

    <script type="text/javascript" src="sis/bower_components/angular-messages/angular-messages.min.js"></script>
    <script type="text/javascript" src="https://cdn.gitcdn.xyz/cdn/angular/bower-material/v1.0.0-rc5/angular-material.js"></script>

    <script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/assets-cache.js"></script>

    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) scripts/scripts.js -->
    <script src="sis/src/app/app.js"></script>
    <script src="sis/src/js/sb-admin-2.js"></script>
    <script type="text/javascript" src="sis/src/common/directives/header/header.js"></script>
    <script type="text/javascript" src="sis/src/common/directives/header/header-notification/header-notification.js"></script>
    <script type="text/javascript" src="sis/src/common/directives/sidebar/sidebar.js"></script>
    <script type="text/javascript" src="sis/src/common/directives/sidebar/sidebar-search/sidebar-search.js"></script>

    <script type="text/javascript" src="sis/src/app/settings/settings.js"></script>
    <script type="text/javascript" src="sis/src/app/settings/courses/settings-courses-list.js"></script>

    <!-- endbuild -->

</head>
<body>
    <div ng-app="app">

        <div ui-view></div>

    </div>
</body>
</html>
