import React from "react";
import data from "./data.json";
import Swal from "sweetalert2";


let historial = []

export default class Historia extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data: data,
            opcionSelected: "",
            contador: 0
        }
        this.handleSelectA = this.handleSelectA.bind(this);
        this.handleSelectB = this.handleSelectB.bind(this);
       
    }
    
    componentDidUpdate(){
        
        historial = [...historial, this.state.opcionSelected]
        
    }

    handleSelectA(){
        if(this.state.contador>=7){
            Swal.fire({
                imageUrl: 'https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700309/83226448-ilustraci%C3%B3n-vectorial-de-little-girl-despertarse-en-una-cama-y-bostezo.jpg',
                imageWidth: 400,
                imageHeight: 200,
                title: 'FIN!',
                text: 'Te despertaste! Se termino elige tu propia aventura.'
            })

        }else{
        
            if(this.state.opcionSelected !== "A") {
                // si vengo de un B y selecciono un A -> tengo que pasar al sig elemento del array data
                // por ej: 3b para llegar a 4a, solo avanzo uno
                this.setState({
                contador: this.state.contador + 1,
                opcionSelected: "A"
                });
            } else if (this.state.opcionSelected === "A") {
                // si vengo de un A y selecciono un A -> tengo que pasar 2 elementos del array data
                // por ej: 2a para llegar a 3a, paso por 2b 
                this.setState({
                contador: this.state.contador + 2,
                // no hace falta que cambie el estado de opcionSelected ya que es el mismo(A)
                });
            }

        }
    }

    handleSelectB(){
        if(this.state.contador>=7){
            Swal.fire({
                imageUrl: 'https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700309/83226448-ilustraci%C3%B3n-vectorial-de-little-girl-despertarse-en-una-cama-y-bostezo.jpg',
                imageWidth: 400,
                imageHeight: 200,
                title: 'FIN!',
                text: 'Te despertaste! Se termino elige tu propia aventura.'
            })


        }else{
            
            if(this.state.opcionSelected === "A") {
            // si vengo de un A y selecciono un B -> tengo que pasar 3 elementos del array data
            // por ej: 2a para llegar a 3b, paso por 2b y 3a
                this.setState({
                contador: this.state.contador + 3,
                opcionSelected: "B"
                });

            } else {
                // si vengo de un B y selecciono un B -> tengo que pasar 2 elementos del array
                // por ej: 2b para llegar a 3b, paso por 3a
                this.setState({
                contador: this.state.contador + 2,
                opcionSelected: "B"
                });
            }
        }        
    }


    render(){
        return (
        <div className="card layout">
            <p>{this.props.id}</p>
            <p className="historia">{this.state.data[this.state.contador].historia}</p>
            <div className="opciones">
                <div className="opcion">
                    <button id="A" onClick={this.handleSelectA} className="botones">A</button>
                    <p>{this.state.data[this.state.contador].opciones.a}</p> 
                </div>
                <div className="opcion">
                    <button id="B" onClick={this.handleSelectB} className="botones">B</button>
                    <p>{this.state.data[this.state.contador].opciones.b}</p>
                </div>       
            </div>
            <p>Ultima seleccion: {this.state.opcionSelected}</p>
            <p>Historial seleccionados:{historial.map(
                (opc, key)=> (<p key={key}>{key+1}: {opc}</p>))
            }</p>
        </div>
        );
    }

}
