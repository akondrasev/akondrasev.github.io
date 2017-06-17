import angular from 'angular';
import Home from './home/home';
import Navbar from './navbar/navbar';
import MailBox from './mail-box/mail';
import MailBoxList from './mail-box-list/list';

let componentModule = angular.module('app.components', [
    Home,
    Navbar,
    MailBox,
    MailBoxList
]).name;

export default componentModule;