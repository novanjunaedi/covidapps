import css from "bootstrap/dist/css/bootstrap.min.css";

class NavbarElement extends HTMLElement {

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

				.bg-nav {
					background: #466ac8;
				}

			</style>
		       <nav class="navbar navbar-expand-lg navbar-light bg-nav">
				  <a class="navbar-brand text-light" href="#"><img src="../src/img/logo.svg" height=50 width=50></img> Covid-19 Information Centre</a>

				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav ml-auto">
				      <li class="nav-item">
				        <a class="nav-link text-light" href="#nav">Home</span></a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link text-light" href="#datasum">Data Summary</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link text-light" href="#symptoms">Symptoms</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link text-light" href="#prevention">Prevention Tips</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link text-light" href="#footer">About</a>
				      </li>
				    </ul>
				  </div>
				</nav>
		`;
	}
}

customElements.define("navbar-element", NavbarElement);