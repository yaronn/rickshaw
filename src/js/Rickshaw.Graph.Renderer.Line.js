Rickshaw.namespace('Rickshaw.Graph.Renderer.Line');

Rickshaw.Graph.Renderer.Line = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'line',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: false,
			stroke: true
		} );
	},

	seriesPathFactory: function(orientation) {
		
		var graph = this.graph;

		var y = orientation=='left'?graph.y1:graph.y2;
		var factory = d3.svg.line()
			.x( function(d) { return graph.x(d.x) } )
			.y( function(d) { return y(d.y) } )
			.interpolate(this.graph.interpolation).tension(this.tension)

		factory.defined && factory.defined( function(d) { return d.y !== null } );
		return factory;
	}
} );

