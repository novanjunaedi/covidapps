import css from "bootstrap/dist/css/bootstrap.min.css";

class PreventionElement extends HTMLElement {

	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode : "open"});
	}

	connectedCallback(){
		this.render();
	}

	render(){
		this.shadowDOM.innerHTML = `
			<style>
				${css}

				.jumbotron {
					height: auto;
					background: white;
					background-size: cover;
					background-height: auto;
					background-widht: auto;
					background-repeat: no-repeat;
					overflow: auto;
					border-radius: 0px;
				}

				.row {
					margin: 20px;
				}

				p {
					padding-bottom: 35px;
				}

				img {
					width: 500px;
					height: auto;
				}

			</style>
		       	<div class="jumbotron">
		       		<div class="row">
		       			<div class="col-lg-12">
		       				<div class="card">
							    <img src="./src/img/prevention.jpg" class="card-img-top" alt="image">
						  	</div>
		       			</div>
		       		</div>
				
				  	
				</div>
		`;
	}
}

customElements.define("prevention-element", PreventionElement);