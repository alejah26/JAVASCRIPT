var articulos=[
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

var articulosFiltrados =articulos.filter(function(articulo){
    return articulo.costo<=500
});//nuevo array de los articulos con precio de 500 o menos

var nombreArticulos =articulos.map(function(articulo){
    return articulo.nombre
});//nuevo array de los nombres

var encuentraArticulo =articulos.find(function(articulo){
    return articulo.nombre ===  "Laptop"
});//Busca articulo y muestra el primer valor en coincidencia

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});//solo muestra nombres de articulos

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo<=700;
});//solo valida si hay articulos de ese valor