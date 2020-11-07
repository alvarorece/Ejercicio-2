for(const property in infoNavegador){
    const p = document.createElement('p');
    const propertyText = document.createTextNode(property+': '+infoNavegador[property]);
    p.appendChild(propertyText);
    document.body.appendChild(p);
}