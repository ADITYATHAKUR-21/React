function customRander (reactElement,container) {
    /* 
    const domElement = document.createElement(reactElement.type)
  
     domElement.innerHTML = reactElement.Children
     domElement.setAttribute('href', reactElement.props.hraf)
      domElement.setAttribute('target', reactElement.props.taraget)

     container.appendChild(domElement)
     */

     const domElement =  document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.Children
     
     for(const props in reactElement.props){
        if(props === 'children')continue;
        domElement.setAttribute('prop', reactElement.props[props])


        container.appendChild(domElement)
     }
} 

     
     
     


const reactElement = {
    type: 'a',
    props:{
        hraf: 'https://www.google.com/',
        target: 'blank'

    },
    Children : "Click and move to google"
}

const maincontainer = document.querySelector('#root');

customRander (reactElement, maincontainer);
