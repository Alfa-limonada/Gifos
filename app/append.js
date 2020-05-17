
function append(content, wrap) {
    let i = 0
    while (i < content.data.length) {        
    //Elementos
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    let figcap = document.createElement("figcaption");
    //Append img - figcap to fig
    fig.appendChild(img);
    fig.appendChild(figcap);
    fig.classList.add("sugg-fig");
    //Atributos
    img.src = content.data[i].images.fixed_height.url;
    figcap.textContent = content.data[i].title;
    //Append fig to DOM
    wrap.insertAdjacentElement("afterbegin", fig);
    // wrap.appendChild(fig); La diferencia es si se pegan al ppio o al final
    i++
    }
  }
