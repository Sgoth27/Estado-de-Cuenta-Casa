const table = document.querySelector('#mainTable');
const mainTableBody = document.querySelector('#mainTableBody');
const trbody = document.querySelector('#mainTrbody');

const gastos = [
    //registro:[],
    
];

let id = 0;

function crearID(){
        
        let registro;
  
        if(!gastos[id]){
            gastos[id] ={registro};
            
        }else{
            
        }
    id +=1;
    //console.log(gastos);
    //console.log(id);
    return id
    
    
}

function meterDatos(fecha,gasto,valor,persona){
    crearID();
    if(!gastos[id-1].registro){
        gastos[id-1].registro = [];
    }else{
        return;
    }
    gastos[id-1].registro.push(fecha);
    gastos[id-1].registro.push(gasto);
    gastos[id-1].registro.push(valor);
    gastos[id-1].registro.push(persona);
    
    ingresarAlDom(gastos[id-1].registro);
    return gastos;
}



function ingresarAlDom(lista){
    const tr = document.createElement('tr');
    

    for(let i=0; i<lista.length; i++){
        let td = document.createElement('td');
        td.innerText = lista[i];
        tr.appendChild(td);
        
        
    }
    
    console.log(tr);
    mainTableBody.appendChild(tr);

}

meterDatos('05-02-23','almuerzos','$50.000','NT');
meterDatos('05-02-23','pedialite','$7.500','NT');
meterDatos('12-02-23','almuerzos','$11.500','NT');
meterDatos('12-02-23','luz','$418.100','JE');
meterDatos('15-02-23','15na Estela','$604.000','ST');
meterDatos('15-02-23','claro','$81.900','JE');
meterDatos('15-02-23','claro','$72.695','ST');
meterDatos('18-02-23','almuerzo','$13.300','NT');
meterDatos('18-02-23','etb','$165.000','ST');
meterDatos('19-02-23','almuerzos','$40.000','NT');

