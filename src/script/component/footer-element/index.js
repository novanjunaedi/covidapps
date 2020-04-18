import css from "bootstrap/dist/css/bootstrap.min.css";

class FooterElement extends HTMLElement {

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

				footer {
					background: #3f6be0;
					font-family: sans-serif;
				}

				.footer-copyright {
					background: #07319c;
					font-family: sans-serif;
				}
			</style>

			<!-- Footer -->
			<footer class="page-footer font-small pt-4">

			  <!-- Footer Links -->
			  <div class="container-fluid text-center text-md-left">

			    <!-- Grid row -->
			    <div class="row">

			      <!-- Grid column -->
			      <div class="col-md-7 mt-md-0 mt-3 ml-4">

			        <!-- Content -->
			        <h5 class="text-uppercase text-light">About</h5>
			        <p class="text-light">CovidApp is a web app that provides the latest information about covid-19. This web was made by Novan Junaedi for submitting Dicoding Web Fundamental Class.</p>

			      </div>
			      <!-- Grid column -->

			      <hr class="clearfix w-100 d-md-none pb-3">

			    </div>
			    <!-- Grid row -->

			  </div>
			  <!-- Footer Links -->

			  <!-- Copyright -->
			  <div class="footer-copyright text-light text-center py-3">© 2020 - CovidApp. All rights reserved. Developed by
			    <a class="text-light" href="https://instagram.com/novanjunaedi"> Novan Junaedi</a>
			  </div>
			  <!-- Copyright -->

			</footer>
			<!-- Footer -->
		`;
	}
}

customElements.define("footer-element", FooterElement);