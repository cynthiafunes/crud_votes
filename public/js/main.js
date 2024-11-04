function votarPorTema(id) {
    fetch(`/temas/${id}/votar`, {
        method: 'POST'
    })
    .then(function(respuesta) {
        if(respuesta.ok) {
            let contadorVotos = document.querySelector(`#votos-tema-${id}`)
            let votosActuales = parseInt(contadorVotos.textContent) + 1
            contadorVotos.textContent = votosActuales

            const listaTemas = document.querySelector('.lista-temas')
            const temas = Array.from(listaTemas.getElementsByClassName('tema'))

            temas.sort((a, b) => {
                const votosA = parseInt(a.querySelector('[id^="votos-tema-"]').textContent)
                const votosB = parseInt(b.querySelector('[id^="votos-tema-"]').textContent)
                return votosB - votosA 
            })

            listaTemas.innerHTML = ''

            temas.forEach(tema => {
                listaTemas.appendChild(tema)
            })
        } else {
            alert('Error al votar')
        }
    })
    .catch(function(error) {
        console.log('Error:', error)
        alert('Error al procesar el voto')
    })
}

function votarPorLibro(id) {
    fetch(`/libros/${id}/votar`, {
        method: 'POST'
    })
    .then(function(respuesta) {
        if(respuesta.ok) {
            let contadorVotos = document.querySelector(`#votos-libro-${id}`)
            let votosActuales = parseInt(contadorVotos.textContent) + 1
            contadorVotos.textContent = votosActuales

            const listaLibros = document.querySelector('.lista-libros')
            const libros = Array.from(listaLibros.getElementsByClassName('libro'))

            libros.sort((a, b) => {
                const votosA = parseInt(a.querySelector('[id^="votos-libro-"]').textContent)
                const votosB = parseInt(b.querySelector('[id^="votos-libro-"]').textContent)
                return votosB - votosA 
            })

            listaLibros.innerHTML = ''

            libros.forEach(libro => {
                listaLibros.appendChild(libro)
            })
        } else {
            alert('Error al votar')
        }
    })
    .catch(function(error) {
        console.log('Error:', error)
        alert('Error al procesar el voto')
    })
}