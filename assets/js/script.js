let bulbasaur = `<div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" id="titulo-carta">Bulbasaur</h5>
                                <p class="card-text" id="parrafo-carta">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                    
                            </div>
                        </div>
                    </div>
                </div>`

let cartaPokemon = document.getElementById('carta-pokemon');
cartaPokemon.addEventListener('click',function(){
    console.log('latigo sepa');
   // document.getElementById('carta-pokemon').parentNode
   // cartaPokemon.parentNode.innerHtml += bulbasaur
    cartaPokemon.parentNode.insertAdjacentHTML('beforeend',bulbasaur)
})