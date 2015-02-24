$( function () {
  $( ".markdown" ).find( ".node" ).not( ".active" ).filter( function () {
    return !/[0-9]/.test( $( this ).attr( "id" ) );
  }).each( function( index, element ) {
    $( element ).on( "mouseenter", function( event ) {
      $( this ).css( { cursor: "pointer", fill: "transparent" } );
    }).on( "mouseleave", function( event ) {
      $( this ).css( { cursor: "", fill: "" } );
    }).on( "click", function( event ) {
      window.location.assign( "/plum/docs/" + $( this ).attr( "id" ).toLowerCase() + ".html" );
    });
  });
});
