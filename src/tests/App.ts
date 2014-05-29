/// <reference path="../libs/jquery.d.ts" />

import EventDispatcher = require("../kurst/events/EventDispatcher");
import UIBase = require("../kurst/core/UIBase");
import $ = require("jquery");

//class TestApp extends Base {
class App extends UIBase {

	private testString:string = 'Hello RequireJS';

	constructor()
	{
		super();

		this.test( this.testString );

		var p : HTMLParagraphElement = <HTMLParagraphElement> document.createElement( 'p' );
			p.innerHTML				 = 'App initialised';

		document.body.appendChild( p );

		$( p ).hide();
		$( p ).fadeIn( 2000 );

	}
}

export = App;
