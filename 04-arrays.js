let citys = ["Rionegro", "Retiro", "Ceja", "Carmen", "Guarne"]

// Mostrar todas con for
for (let i = 0; i < citys.length; i++) {
  
  document.writeln(`${citys[i]} <br/>`)  

}

document.writeln("-------------- <br/>")

// Agregar una ciudad nueva
citys.push("Marinilla")

document.writeln(`${citys}, <br/>`)

document.writeln("-------------- <br/>")

// Eliminar la primera
citys.shift(0)

document.writeln(`${citys} <br/>`)

document.writeln("-------------- <br/>")

// Cambiar la tercera
citys.splice(2, 1, "Santuario")

document.writeln(`${citys} <br/>`)

