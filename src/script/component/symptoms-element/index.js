import css from "bootstrap/dist/css/bootstrap.min.css";

class SymptomsElement extends HTMLElement {

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
					background: url('./src/img/symp-bg.jpg');
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

			</style>
		       <div class="jumbotron">

		       		<h4 class="text-light">Recognize the symptoms</h4>
				  	<p class="text-light">Here's some tips to recognize the symptoms of covid-19.</p>

				 <div class="row">
					<div class="card-deck">
					  <div class="card">
					    <img src="./src/img/fever.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Fever</h5>
					      <p class="card-text">Fever is when a human's body temperature goes above the normal range of 36–37° Centigrade (98–100° Fahrenheit). It is a common medical sign. Other terms for a fever include pyrexia and controlled hyperthermia. As the body temperature goes up, the person may feel cold until it levels off and stops rising.</p>
					    </div>
					  </div>
					  <div class="card">
					    <img src="./src/img/cough.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Dry Cough</h5>
					      <p class="card-text">Dry cough is "one where no mucus or phlegm is produced with the cough</p>
					    </div>
					  </div>
					  <div class="card">
					    <img src="./src/img/soretroath.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Sore Throat</h5>
					      <p class="card-text">A sore throat is pain, scratchiness or irritation of the throat that often worsens when you swallow. The most common cause of a sore throat (pharyngitis) is a viral infection, such as a cold or the flu. A sore throat caused by a virus resolves on its own.</p>
					    </div>
					  </div>
					</div>
				</div>

				<div class="row">
					<div class="card-deck">
					  <div class="card">
					    <img src="./src/img/limp.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Limp</h5>
					      <p class="card-text">Asthenia or limp body is a condition where the body has decreased strength, so you need extra energy to do activities. Usually this weak condition occurs in the arms or legs.</p>
					    </div>
					  </div>
					  <div class="card">
					    <img src="./src/img/headache.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Headache</h5>
					      <p class="card-text">A headache can be a sign of stress or emotional distress, or it can result from a medical disorder, such as migraine or high blood pressure, anxiety, or depression. It can lead to other problems.</p>
					    </div>
					  </div>
					  <div class="card">
					    <img src="./src/img/outofbreath.jpg" class="card-img-top" alt="image">
					    <div class="card-body">
					      <h5 class="card-title">Shortness of Breath</h5>
					      <p class="card-text">Shortness of breath — known medically as dyspnea — is often described as an intense tightening in the chest, air hunger, difficulty breathing, breathlessness or a feeling of suffocation. Very strenuous exercise, extreme temperatures, obesity and higher altitude all can cause shortness of breath in a healthy person.</p>
					    </div>
					  </div>
					</div>
				</div>

				
				  	
				</div>
		`;
	}
}

customElements.define("symptoms-element", SymptomsElement);