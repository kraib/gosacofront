/**
 * Created by leona on 5/18/15.
 */
'use strict';
angular.module('gosaccoApp',['ngResource', 'ngRoute','ngMessages','mgcrea.ngStrap','formly','formlyBootstrap'])
.config(['$httpProvider', function($httpProvider){
        // django and angular both support csrf tokens. This tells
        // angular which cookie to add to what header.
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.withCredentials=true;
    }])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
      // $locationProvider.html5Mode(true);
      $routeProvider
      .when('/home',{
      	templateUrl:'views/home/home.html',
      	controller:'BaseCtrl'
      })
      .when('/login',{
      	templateUrl:'views/auth/login.html',
      	controller:'authCtrl'
      })

      .when('/members',{
      	templateUrl:'views/members/members.html',
      	controller:'MemberCtrl'
      })
      .when('/createMembers',{
      	templateUrl:'partials/members/createMember.html'
      })
      .when('/memberlogcategory',{
      	templateUrl:'partials/members/memberlogCategory.html'
      })
      .when('/membergroups',{
      	templateUrl:'partials/members/memberGroups.html'
      })
      .when('/nextofkinlist',{
      	templateUrl:'partials/members/nextofkinlist.html'
      })
      .when('/savings',{
      	templateUrl:'views/savings/savings.html',
      	controller:'DepositCtrl as vm'
      })
      .when('/deposit',{
            templateUrl:'partials/savings/deposit_savings.html',
            controller:'DepositCtrl as vm'
      })
      .when('/withdraw',{
            templateUrl:'partials/savings/withdraw_savings.html',
            controller:'WithdrawCtrl as vm'
      })
      .when('/list_savings',{
            templateUrl:'partials/savings/list_savings.html',
                controller:'ListSavingsCtrl'
      })
      .when('/loans',{
      	templateUrl:'views/loans/loans.html',
      	 controller:'LoanListCtrl'
      })
      .when('/loan_application',{
            templateUrl:'partials/loans/loan_application.html',
            controller:'LoanApplicationCtrl as vm'
      })
      .when('/loan_application_list',{
            templateUrl:'partials/loans/loan_application_list.html',
            controller:'loanApplicationListCtrl as vm'
      })
      .when('/loan_type',{
            templateUrl:'partials/loans/loan_type.html',
            controller:'LoanTypeCtrl as vm'
      })
      .when('/loan_form',{
            templateUrl:'partials/loans/loan_form.html',
            controller:'LoanFormCtrl as vm'
      })
      .when('/loan_list',{
            templateUrl:'partials/loans/loan_list.html',
                controller:'LoanListCtrl'
      })
      .when('/loan_status',{
            templateUrl:'partials/loans/loan_status.html',
              controller:'LoanStatusCtrl'

      })
      .when('/security',{
            templateUrl:'partials/loans/security.html',
            controller:'SecurityCtrl as vm'
      })
      .when('/security_article',{
            templateUrl:'partials/loans/security_article.html',
            controller:'SecurityArticleCtrl as vm'
      })
      .when('/shares',{
      	templateUrl:'views/shares/shares.html',
      	controller:'ShareCtrl'
      })
      .when('/share_type',{
            templateUrl:'partials/shares/share_type.html',
            controller:'SharetypeCtrl as vm'
      })
      .when('/share_purchase',{
            templateUrl:'partials/shares/share_purchase.html',
            controller:'SharepurchaseCtrl'
      })
      .when('/share_transfer',{
            templateUrl:'partials/shares/share_transfer.html',
            controller:'SharetransferCtrl as vm'
      })
      .when('/others',{
      	templateUrl:'views/others/others.html',
      	controller:'OtherCtrl'
      })
      .when('/accounting',{
      	templateUrl:'views/accounting/accounting.html',
      	controller:'AccountingCtrl'
      })
      .when('/reports',{
      	templateUrl:'views/reports/reports.html',
      	controller:'ReportCtrl'
      })
      .when('/notifications',{
      	templateUrl:'views/notifications/notifications.html',
      	controller:'NotificationCtrl'
      })
      .when('/settings',{
      	templateUrl:'views/settings/settings.html',
      	controller:'SettingCtrl'
      })
      .when('/login',{
        templateUrl:'views/auth/login.html',
        controller:'LoginCtrl'
      }).otherwise({redirectTo:'/'});
    }])
    .constant('SERVER', {

       url: 'http://localhost:8000'
    });
