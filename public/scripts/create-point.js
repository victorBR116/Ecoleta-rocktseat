

function poulateUFs(){
    const ufselect = document.querySelector("select[name=uf]")
    

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => res.json() )
    .then( states => {

        for(state of states) {
             ufselect.options.add(new Option(state.nome,state.id))
        }
    })
}

poulateUFs()

 function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufvalue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then(  cities => {
        for( const city of cities){
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>` 
        }
        citySelect.disabled = false
    })
 }
 document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)  

    // Itens de coleta 
    const itemsToCollect =  document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem)  
    }
    
    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemli = event.target
        
        // adicionar ou remover uma classe com java script 
        itemli.classList.toggle("selected")

        const itemId = itemli.dataset.id

        console.log('ITEM ID: ',itemId)

        // verificar se existem itens selecionado, se sim   
        // pegar os itens selecionados 

        const alreadySelected = selectedItems.findIndex( item =>  {
            const itemFound = item == itemId // isso sera true ou false 
            return itemFound 
        })
        
        // se já tiver selecionado tirar da seleção 
        if(alreadySelected >= 0){
            //tirar da selecao
             const filteredItems = selectedItems.filter( item => {
                const itensIsDifferent = item != itemId // false 
                return itensIsDifferent
             })

             selectedItems = filteredItems
        } else {
            // se não estiver selecionado,  
            //adicionar seleção 
            selectedItems.push(itemId)
        }
        
        console.log("")
 
        // atualizar o campo escondido com itens selecionados 
        collectedItems.value = selectedItems
    }