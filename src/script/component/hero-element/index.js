import css from "bootstrap/dist/css/bootstrap.min.css";

class HeroElement extends HTMLElement {

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
					height: 100vh;
					background: url('./src/img/jumbotron-bg.jpg');
					background-size: cover;
					background-height: auto;
					background-widht: auto;
					background-repeat: no-repeat;
					overflow: hidden;
					border-radius: 0px;
				}

			</style>
		       <div class="jumbotron">
				  <h5 class="display-4">Welcome to Covid-19 Info Centre</h5>
				  <p class="lead">Find out the latest informations about Covid-19. Stay safe everyone!
				  <br/>
				  #dirumahaja
				  </p>
				  <hr class="my-4">
				  <a class="btn btn-primary btn-lg" href="#datasum" role="button">Learn more</a>
				</div>
		`;
	}
}

customElements.define("hero-element", HeroElement);