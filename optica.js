use Optica
'switched to db Optica'
db.Proveedores.insertOne(
    {nombre:"Gafapasta",
    direccion:{calle:"Gran Via",numero:"123",piso:"2",puerta:"A",
ciudad:"Barcelona",codigo_postal:"08012",pais:"España"},
telefono:"654321123", 
fax:"654321123",
NIF:"B11111111"})
{
  acknowledged: true,
  insertedId: ObjectId("6406402d6038c009f6bff90d")
}
db.Proveedores.insertOne(
    {nombre:"Anteojito",
    direccion:{calle:"Street One",numero:"43",piso:"6",puerta:"8",
ciudad:"NY",codigo_postal:"11111",pais:"EEUU"},
telefono:"111111111", 
fax:"11111111",
NIF:"Q33333333"})
{
  acknowledged: true,
  insertedId: ObjectId("6406409e6038c009f6bff90e")
}
db.Gafas.insertMany(
    [{marca:"Raiban",
    graduacion:{derecha:"1",izquierdo:"1"},
    montura:"flotante", 
    color_montura:"negro",
    color_cristal:"negro", 
    precio:"135", 
    proveedor: {
    $ref: "Proveedores",
    $id: ObjectId("6406409e6038c009f6bff90e")
  }},
    {marca:"Afelu",
    graduacion:{derecha:"0",izquierdo:"0"},
    montura:"pasta", 
    color_montura:"marron",
    color_cristal:"marron", 
    precio:"155",
    proveedor: {
    $ref: "Proveedores",
    $id: ObjectId("6406409e6038c009f6bff90e")
  }
},
    {marca:"Polaroid",
    graduacion:{derecha:"1",izquierdo:"1"},
    montura:"metalica", 
    color_montura:"dorado",
    color_cristal:"verde", 
    precio:"145",
    proveedor: {
    $ref: "Proveedores",
    $id: ObjectId("6406402d6038c009f6bff90d")
  }
}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64064b8c6038c009f6bff90f"),
    '1': ObjectId("64064b8c6038c009f6bff910"),
    '2': ObjectId("64064b8c6038c009f6bff911")
  }
}
db.Empleados.insertMany([{nombre:"Pedro"},{nombre:"Rosa"},{nombre:"Juana"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64064e686038c009f6bff912"),
    '1': ObjectId("64064e686038c009f6bff913"),
    '2': ObjectId("64064e686038c009f6bff914")
  }
}
db.Clientes.insertOne(
    {nombre:"Maria Martinez",
    direccion:{calle:"Arago",numero:"333",piso:"1",puerta:"2",ciudad:"Barcelona",codigo_postal:"08002",pais:"España"},
    telefono:"655444333", 
    correo_electronico:"maria@gmail.com",
    fecha_registro:"12-02-2023", 
    referenciado:" ",
    producto_comprado:{gafa: {
    $ref: "Gafas",
    $id: ObjectId("64064b8c6038c009f6bff90f")
  },
    vendedor: {
    $ref: "Empleados",
    $id: ObjectId("64064e686038c009f6bff913")
  }}
})
{
  acknowledged: true,
  insertedId: ObjectId("6406507a6038c009f6bff915")
}
db.Clientes.insertOne(
  {nombre:"Paco Ruiz",
  direccion:{calle:"Valencia",numero:"44",piso:"3",puerta:"5",ciudad:"Barcelona",codigo_postal:"08002",pais:"España"},
  telefono:"655444555", 
  correo_electronico:"paco@gmail.com",
  fecha_registro:"13-02-2023", 
  referenciado:{$ref: "Clientes",
  $id: ObjectId("6406507a6038c009f6bff915")},
  producto_comprado:{gafa: {
  $ref: "Gafas",
  $id: ObjectId("64064b8c6038c009f6bff910")
},
  vendedor: {
  $ref: "Empleados",
  $id: ObjectId("64064e686038c009f6bff912")
}}
})
{
acknowledged: true,
insertedId: ObjectId("6407888340d8e7a085ba6e55")
}