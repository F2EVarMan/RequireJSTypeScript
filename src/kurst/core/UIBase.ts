import EventDispatcher = require("../events/EventDispatcher");
import SkinBase = require("SkinBase");

class UIBase extends EventDispatcher{

	//------------------------------------------------------------------------

	private _width              : number;
	private _height             : number;
	private _skin               : SkinBase;
	private _animationLoopFlag  : boolean = false;

	//------------------------------------------------------------------------

	constructor( ) {

		super();

	}

	//-PUBLIC----------------------------------------------------------------------

	public test( str : string ) : void
	{
		console.log( str );
	}

	//--PUBLIC----------------------------------------------------------------------

	/*
	 */
	public isLoopActive() : boolean
	{
		return this._animationLoopFlag;
	}
	/*
	 */
	public skin( ) : SkinBase
	{
		return this._skin;
	}
	/*
	 */
	public setSkin ( s : SkinBase ) : void
	{
		this._skin = s;
		this.skinSet();
	}
	/*
	 */
	public setSize( w : number , h : number ): void
	{
		this._width = w;
		this._height = h;
		this.resize();
	}
	/*
	 */
	public height ( ) : number
	{
		return this._height;
	}
	/*
	 */
	public width ( ) : number
	{
		return this._width;
	}

	//--Override / UIBase----------------------------------------------------------------------

	/*
	 */
	public skinSet() : void {}
	/*
	 */
	private resize() : void {}

	//--Selection Helpers----------------------------------------------------------------------

	/*
	 */
	public getId(id : string ) : HTMLElement
	{
		return document.getElementById( id );
	}
	/*
	 */
	public getClass( className : string ) : NodeList
	{
		return document.getElementsByClassName( className );
	}
	/*
	 */
	public getElementsByClassNme( theClass : string ) : Node[]
	{
		var classElms   : Array<Node>   = new Array<Node>();//[];
		var node        : Document      = document;
		var i           : number        = 0

		if ( node.getElementsByClassName ) // check if it's natively available
		{
			var tempEls = node.getElementsByClassName(theClass);

			for ( i = 0 ; i < tempEls.length ; i++)
				classElms.push(tempEls[i]);

		}
		else// if a native implementation is not available, use a custom one
		{

			var getclass    : RegExp    = new RegExp('\\b'+theClass+'\\b');
			var elems       : NodeList  = node.getElementsByTagName('*');

			for ( i = 0; i < elems.length; i++)
			{
				var classes = elems[i]['className'];

				if ( getclass.test( classes ))
					classElms.push(elems[i]);

			}
		}
		return classElms;
	}

	//------------------------------------------------------------------------

	/*
	 */
	public animationLoop() : void
	{
	}
	/*
	 */
	public startLoop() : void {

		this._animationLoopFlag = true;

		var updateFunc = () => {

			this.animationLoop();

			if( this._animationLoopFlag )
				requestAnimationFrame( updateFunc );

		}

		requestAnimationFrame( updateFunc );

	}
	/*
	 */
	public stopLoop() : void
	{
		this._animationLoopFlag = false;
	}

}

//------------------------------------------------------------------------



export = UIBase;
