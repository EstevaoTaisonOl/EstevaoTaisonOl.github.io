const apiResponseRepositorios = async () => {
    var apiResponse = await fetch(`https://api.github.com/users/EstevaoTaisonOl/repos`)

    var data = await apiResponse.json()


    return data
}

async function infosRep(){
    const data = await apiResponseRepositorios()
    for(var key in data){
    }
}

infosRep()