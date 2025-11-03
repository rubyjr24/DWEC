

class Logger{

    constructor(id){
        this.asignId(id);
    }

    checkIdExist(id){
        return id != undefined && document.getElementById(id) != undefined;
    }

    asignId(id){

        if (this.checkIdExist(id)){
            this.id = id;
            this.loggerHtmlElement = document.getElementById(id);

        }else{
            while(this.id == undefined){
                const id = `${Math.random() * 10_000_000_000_000_000}`;
                
                if (document.getElementById(this.id) == undefined){
                    this.id = id;

                    const element = document.createElement('div');
                    element.id = this.id;
                    document.body.appendChild(element);

                    this.loggerHtmlElement = element;
                    this.applyStyles();
                }

            }
        }

    }

    appendChild(node){
        this.loggerHtmlElement.appendChild(node);
    }

    appendLine(contentString){
        const div = document.createElement('div');
        div.textContent = contentString;

        if (this.stylesApplied) this.stylize(div);

        this.loggerHtmlElement.appendChild(div);
    }

    applyStyles(){
        this.loggerHtmlElement.style.position = 'relative';
        this.loggerHtmlElement.style.width = '100%';
        this.loggerHtmlElement.style.height = 'auto';
        this.loggerHtmlElement.style.display = 'flex';
        this.loggerHtmlElement.style.flexDirection = 'column';
        this.loggerHtmlElement.style.gap = '10px';
        this.stylesApplied = true;
    }

    stylize(node){
        node.style.position = 'relative';
        node.style.backgroundColor = '#f8f8f8';
        node.style.padding = '10px';
        node.style.margin = '0';
    }

    appendObjectPrittier(object, title = ''){

        const div = document.createElement('div');
        this.stylize(div);

        if (title !== ''){
            const h3 = document.createElement('h3');
            h3.textContent = title;
            div.appendChild(h3);
        }

        const pre = document.createElement('pre');
        pre.textContent = JSON.stringify(object, null, 2);
        div.appendChild(pre);

        this.loggerHtmlElement.appendChild(div);
        
    }

}