function customRender(reactElem, container){
    const domElement = document.createElement(reactElem.type)
    domElement.innerHTML = reactElem.children
    domElement.setAttribute('href', reactElem.props.href)
    domElement.setAttribute('target', reactElem.props.target)
}


const reactElem = {
    type : "a",
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : "click me to visit google"
}

const mainContainer = document.querySelector('#root')

const customRender(reactElem, mainContainer)