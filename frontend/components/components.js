import angular from 'angular';
import Home from './home/home';
import Navbar from './navbar/navbar';
import MailBox from './mail-box/mail';

let componentModule = angular.module('app.components', [
    Home,
    Navbar,
    MailBox
]).name;

export default componentModule;