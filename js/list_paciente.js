$(document).ready(function(){
    axios({
        url: 'https://rickandmortyapi.com/api/character/',
        method: 'get'
    }).then(res => {

        //selecciona div creado en html
        const list = document.getElementById('listado-paciente')
        //instancia
        const fragment = document.createDocumentFragment()
        
        //recorre valores de objeto entregado por la url
        for (let value of  res.data.results ){
            
            //crea div contenedor paciente
            const listItem = document.createElement('div');
            listItem.className = "paciente"
            listItem.id = `${value.id }`

            fragment.appendChild(listItem) 
            list.appendChild(fragment)
            
            //CREA h4 Nombre
            const listH4 = document.getElementById(`${value.id }`)
            const fragmentH4 = document.createDocumentFragment()
            const listItemH4 = document.createElement('h4');
            listItemH4.className = "nombre"
            listItemH4.textContent = `${value.name }`
            
            fragmentH4.appendChild(listItemH4) 
            listH4.appendChild(fragmentH4)

            //CREA h4 Parrafo
            const list_p = document.getElementById(`${value.id }`)
            const fragment_p = document.createDocumentFragment()
            const listItem_p = document.createElement('p');
            listItem_p.className = "parrafo"
            listItem_p.textContent = `${value.status }`
            
            fragment_p.appendChild(listItem_p) 
            list_p.appendChild(fragment_p)

            //crea btn
            const list_btn = document.getElementById(`${value.id }`)
            const fragment_btn = document.createDocumentFragment()
            const listItem_btn = document.createElement('button');
            listItem_btn.className = "detalle"
            listItem_btn.textContent = "Detalle"
            listItem_btn.value = `${value.id }`
            
            fragment_btn.appendChild(listItem_btn) 
            list_btn.appendChild(fragment_btn)
        }

    }).catch(err => console.log(err))
});