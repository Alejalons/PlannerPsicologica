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
            listItem.className = "paciente filtr-title "+`${value.name.toUpperCase()}`
            listItem.setAttribute('data-category' , '5')
            listItem.setAttribute('data-filtr' , `${value.name }`)

            listItem.id = `${value.id }`

            fragment.appendChild(listItem) 
            list.appendChild(fragment)
            
            //CREA h4 Nombre
            const listH4 = document.getElementById(`${value.id }`)
            const fragmentH4 = document.createDocumentFragment()
            const listItemH4 = document.createElement('h4');
            // listItemH4.className = "nombre filtr-title"
            listItemH4.className = "nombre"
            // listItemH4.setAttribute('data-filtr' , `${value.name }`)
            listItemH4.textContent = `${value.name }`
            
            fragmentH4.appendChild(listItemH4) 
            listH4.appendChild(fragmentH4)

            //CREA h4 Parrafo
            const list_p = document.getElementById(`${value.id }`)
            const fragment_p = document.createDocumentFragment()
            const listItem_p = document.createElement('p');
            listItem_p.className = "parrafo"
            // listItem_p.setAttribute('data-filtr' , `${value.name }`)
            listItem_p.textContent = `${value.status }`
            
            fragment_p.appendChild(listItem_p) 
            list_p.appendChild(fragment_p)

            //crea btn
            const list_btn = document.getElementById(`${value.id }`)
            const fragment_btn = document.createDocumentFragment()
            const listItem_btn = document.createElement('button');
            listItem_btn.className = "detalle"
            // listItem_btn.setAttribute('data-filtr' , `${value.name }`)
            listItem_btn.textContent = "Detalle"
            listItem_btn.value = `${value.id }`
            
            fragment_btn.appendChild(listItem_btn) 
            list_btn.appendChild(fragment_btn)
        }

        // document.getElementById("InputSearch").onchange = function() {myFunction()};
        // function myFunction(){
        //     console.log("hola");
        // }
        //ordena los valores entregados por cada X items
        $("#tab").pagination({
            items: 8,
            contents: 'contents',
            previous: 'Anterior',
            next: 'Siguiente',
            position: 'bottom',
        });
        // $("#fltr-controls").c
        

        //$('input[name="filtr_input"]').filtr($('#wrapper .filtr-title'));   
        // $('input[name="filtr_input"]').filtr($('.filter-list .filtr-title'));   

        

        // document.getElementById("fltr-controls").onchange = function() {myFunction()};
        // function myFunction(){
        //     var value  = document.getElementById("fltr-controls").value;
        //     console.log(value.toUpperCase());

        //     $(".paciente").css("display", "none");            
        //     $("."+value.toUpperCase()).css("display", "block");
        //     // $(".hola").css("display", "block");
        // }
     

    }).catch(err => console.log(err))

    // $(function()
    // {
      
    // });

});

function search() {
    $('input[name="filtr_input"]').filtr($('.filter-list .filtr-title'));
}
function cancel(){
    $('#InputSearch').val('');
    $("#tab").pagination({
        items: 8,
        contents: 'contents',
        previous: 'Anterior',
        next: 'Siguiente',
        position: 'bottom',
    });
}