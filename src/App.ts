/// <reference path="libs/jquery.d.ts" />

import EventDispatcher 	= require("kurst/events/EventDispatcher");
import UIBase 			= require("kurst/core/UIBase");
import $ 				= require("jquery");
import TorusPrimitive 	= require("kurst/away3d/TorusPrimitive");

class App extends UIBase {

	private testString		: string = 'Hello RequireJS';
	private torusPrimitive 	: TorusPrimitive;

	constructor()
	{
		super();

		document.body.style.overflow = 'hidden';

		this.torusPrimitive = new TorusPrimitive();
		this.test( this.testString );

		var p : HTMLParagraphElement 	= <HTMLParagraphElement> document.createElement( 'p' );
			p.innerHTML				 	= 'App initialised';
			p.style.color				= '#FFFFFF';
			p.style.zIndex				= '10';
			p.style.position			= 'absolute';
			p.style.left				= '30px';
			p.style.top					= '30px';
			p.style.fontFamily			= "Arial, Courier";

		document.body.appendChild( p );

		$( p ).hide();
		$( p ).fadeIn( 2000 );

	}
}

export = App;