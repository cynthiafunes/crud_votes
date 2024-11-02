function votarPorTema(id) {
    fetch(`/temas/${id}/votar`, {
        method: 'POST'
    })
    .then(function(respuesta) {
        if(respuesta.ok) {
            let contadorVotos = document.querySelector(`#votos-tema-${id}`)
            let votosActuales = parseInt(contadorVotos.textContent)
            contadorVotos.textContent = votosActuales + 1
            window.location.reload()
        } else {
            alert('Error al votar')
        }
    })
    .catch(function(error) {
        console.log('Error:', error)
    })
}

function votarPorLibro(id) {
    fetch(`/libros/${id}/votar`, {
        method: 'POST'
    })
    .then(function(respuesta) {
        if(respuesta.ok) {
            let contadorVotos = document.querySelector(`#votos-libro-${id}`)
            let votosActuales = parseInt(contadorVotos.textContent)
            contadorVotos.textContent = votosActuales + 1
            window.location.reload()
        } else {
            alert('Error al votar')
        }
    })
    .catch(function(error) {
        console.log('Error:', error)
    })
}