import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';


bootstrap(AppComponent,[])
.then(success => console.log("bootstrap successful"))
.catch(error => console.log("Bootstrap Error: " + error));
