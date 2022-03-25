export default function Sopa() {

  let matriz = [
    ['E', 'G', 'L', 'A', 'P', 'O', 'S', 'A', 'M', 'S', 'A', 'R', 'W'],
    ['E', 'B', 'L', 'S', 'B', 'O', 'E', 'N', 'R', 'W', 'N', 'L', 'O'],
    ['B', 'L', 'D', 'A', 'A', 'S', 'L', 'R', 'L', 'I', 'A', 'S', 'A'],
    ['M', 'E', 'I', 'E', 'W', 'W', 'L', 'C', 'I', 'A', 'R', 'M', 'A'],
    ['S', 'R', 'G', 'M', 'R', 'G', 'E', 'E', 'R', 'A', 'E', 'N', 'U'],
    ['E', 'E', 'A', 'I', 'A', 'L', 'N', 'A', 'R', 'T', 'L', 'S', 'R'],
    ['G', 'I', 'A', 'R', 'U', 'I', 'O', 'T', 'S', 'S', 'S', 'P', 'I'],
    ['U', 'Z', 'A', 'L', 'A', 'C', 'R', 'I', 'O', 'O', 'A', 'S', 'R'],
    ['R', 'R', 'A', 'I', 'U', 'A', 'S', 'M', 'D', 'D', 'S', 'C', 'B'],
    ['I', 'R', 'M', 'O', 'P', 'A', 'A', 'W', 'A', 'G', 'T', 'R', 'E'],
    ['D', 'N', 'A', 'G', 'N', 'R', 'D', 'A', 'E', 'R', 'R', 'A', 'L'],
    ['A', 'D', 'E', 'M', 'E', 'R', 'L', 'S', 'O', 'B', 'A', 'S', 'L'],
    ['D', 'D', 'E', 'P', 'E', 'A', 'E', 'O', 'T', 'O', 'R', 'O', 'A']
  ]
  // Pabras a buscar: SOPA WEB CELULAR SISTEMA SEGURIDAD

  //GENERAR TABLA
  function generarMatriz() {
    console.table(matriz)
    document.querySelector('#posicion').innerHTML = ""
    document.querySelector('#inputpalabra').value = ""
    crearTabla(matriz)
  }

  function crearTabla(matriz) {
    let tabla = document.createElement('table')
    tabla.classList.add('table', 'table-bordered')
    let tbody = document.createElement('tbody')

    for (let fil = 0; fil < matriz.length; fil++) {
      let fila = document.createElement('tr')
      for (let col = 0; col < matriz[fil].length; col++) {
        let columna = document.createElement('td')
        columna.classList.add(`color${fil}-${col}`)
        columna.appendChild(document.createTextNode(matriz[fil][col]))
        fila.appendChild(columna)
      }
      tbody.appendChild(fila)
    }
    tabla.appendChild(tbody)
    let sopa = document.querySelector('.sopa')
    sopa.innerHTML = ''
    sopa.appendChild(tabla)
  }

  //BUSCAR PALABRAS
  function buscar(e) {
    e.preventDefault();

    let posicion = document.querySelector('#posicion')
    let palabra = document.querySelector('#inputpalabra').value.trim().toUpperCase()

    for (let fil = 0; fil < matriz.length; fil++) {
      for (let col = 0; col < matriz[fil].length; col++) {

        if (palabra[0] === matriz[fil][col]) {

          //Derecha
          if (col + (palabra.length - 1) < matriz[fil].length) {
            let encontrada = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada == true) {
                if (palabra[m] == matriz[fil][col + m]) {
                  encontrada = true
                  break
                } else {
                  encontrada = false
                  break
                }
              }
            }
            if (encontrada) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil}-${col + m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          //Izquierda
          if (col - (palabra.length - 1) >= 0) {
            let encontrada2 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada2 == true) {
                if (palabra[m] == matriz[fil][col - m]) {
                  encontrada2 = true
                  break
                } else {
                  encontrada2 = false
                  break
                }
              }
            }
            if (encontrada2) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil}-${col - m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          //Abajo
          if (fil + (palabra.length - 1) < matriz.length) {
            let encontrada3 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada3 == true) {
                if (palabra[m] == matriz[fil + m][col]) {
                  encontrada3 = true
                  break
                } else {
                  encontrada3 = false
                  break
                }
              }
            }
            if (encontrada3) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil + m}-${col}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          //Arriba
          if (fil - (palabra.length - 1) >= 0) {
            let encontrada4 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada4 == true) {
                if (palabra[m] == matriz[fil - m][col]) {
                  encontrada4 = true
                  break
                } else {
                  encontrada4 = false
                  break
                }
              }
            }
            if (encontrada4) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil - m}-${col}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          //Diagonal superior izquierdo
          if ((fil - (palabra.length - 1) >= 0) && (col - (palabra.length - 1) >= 0)) {
            let encontrada5 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada5 == true) {
                if (palabra[m] == matriz[fil - m][col - m]) {
                  encontrada5 = true
                  break
                } else {
                  encontrada5 = false
                  break
                }
              }
            }
            if (encontrada5) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil - m}-${col - m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          //Diagonal superior derecho
          if ((fil - (palabra.length - 1) >= 0) && (col + (palabra.length - 1) < matriz[fil].length)) {
            let encontrada6 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada6 == true) {
                if (palabra[m] == matriz[fil - m][col + m]) {
                  encontrada6 = true
                  break
                } else {
                  encontrada6 = false
                  break
                }
              }
            }
            if (encontrada6) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil - m}-${col + m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          // //Diagonal inferior izquierdo
          if ((fil + (palabra.length - 1) < matriz.length) && (col - (palabra.length - 1) >= 0)) {
            let encontrada7 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada7 == true) {
                if (palabra[m] == matriz[fil + m][col - m]) {
                  encontrada7 = true
                  break
                } else {
                  encontrada7 = false
                  break
                }
              }
            }
            if (encontrada7) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil + m}-${col - m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }

          // //Diagonal inferior derecho
          if ((fil + (palabra.length - 1) < matriz.length) && (col + (palabra.length - 1) <= matriz[fil].length)) {
            let encontrada8 = true
            for (let m = 1; m < palabra.length; m++) {
              while (encontrada8 == true) {
                if (palabra[m] == matriz[fil + m][col + m]) {
                  encontrada8 = true
                  break
                } else {
                  encontrada8 = false
                  break
                }
              }
            }
            if (encontrada8) {
              for (let m = 0; m < palabra.length; m++) {
                let celdacolor = document.querySelector(`.color${fil + m}-${col + m}`)
                celdacolor.style.background = 'yellow'
              }
              posicion.innerHTML = `La palabra encontrada comienza en la posición [${fil},${col}]`
            }
          }
        }
      }
    }
    if (posicion.innerHTML === "") {
      posicion.innerHTML = `Palabra no encontrada`
    }
  }

  return (
    <div className='container'>

      <div className="header">
        <h1 className="pb-3">Sopa de letras</h1>
        <div className="p-5" style={{textAlign: 'left'}}>
          <div>
            <button type="button" className="btn btn-primary mb-3" onClick={generarMatriz}>Limpiar y generar matriz</button>
          </div>
          <div>
            <form className="row g-3" onSubmit={buscar}>
              <div className="col-auto">
                <label>Palabra a buscar : </label>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="inputpalabra" required />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Buscar</button>
              </div>
            </form>
          </div>
          <div>
            <label id='posicion'></label>
          </div>
        </div>
      </div>
      <div className="sopa"></div>
    </div>
  )
}