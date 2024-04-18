import React from "react";
import "../../styles/home.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FullStack from "../../img/FullStack.png"
import DataScience from "../../img/DataScience.png"
import CiberSecurity from "../../img/CiberSecurity.png"
import AI from "../../img/AI.png"
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<br />
			<div className="Landing-page">
				<div>
					<div className="text-center">
						< div>
							<img src={rigoImage} />
							<p> Made by Jose Antonio Tovar With love!</p>
						</div>
						<div className="Text p-2">
							<h1 className="aling-justify">Hello Geeks!</h1>
							<p className="text1">
								4Geeks Academy es el lugar donde los desarrolladores crecen y prosperan. Estamos autorizados por el
								Departamento de Educación de Florida. Elegido como uno de los 35 mejores cursos de programacion del
								mundo y el mejor curso de programacion en Miami según SwitchUp. 4Geeks Academy ha sido reconocida
								como uno de los 10 mejores bootcamps de codificación en los Estados Unidos según Newsweek.
								Una comunidad construida para desarrolladores.
							</p>
							<button type="button" className="btn btn-primary" id="liveAlertBtn"> Saber mas</button>
						</div>
					</div>
					<div className="Card p-2">
						<div className="row row-cols-1 row-cols-md-4 g-4">
							<div className="col">
								<div className="card h-100">
									<img src={FullStack} className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">Desarrollador Full stack </h5>
										<p className="card-text"> Convierte en un programador que utiliza las tecnologias más búscadas,
											mentoria personalizada y un plan de estudios y career support para
											conseguir tu primer trabajo.</p>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" id="liveAlertBtn"> Saber mas </button>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100">
									<img src={DataScience} className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">Cientifico de Datos</h5>
										<p className="card-text"> Conviértete en un científico de datos, desarrolla modelos de predicción y uneté
											a una de las profesiones mejores pagadas del mundo.</p>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" id="liveAlertBtn"> Saber mas</button>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100">
									<img src={CiberSecurity} className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">Ciberseguridad</h5>
										<p className="card-text">Conviértete en un hacker ético y aprende a detectar, corregir y protegerte de ataques
											y vulnerabilidades en sistemas informáticos </p>
									</div>
									<div className="card-footer ">
										<button type="button" className="btn btn-primary" id="liveAlertBtn"> Saber mas</button>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card h-100">
									<img src={AI} className="card-img-top" />
									<div className="card-body">
										<h5 className="card-title">Inteligencia Artificial</h5>
										<p className="card-text"> Explora a detalle la inteligencia artificial y cómo aplicarla en diferentes industrias, roles
											y en tu trabajo.</p>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" id="liveAlertBtn"> Saber mas</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<Footer />
		</div>
	);
};

export default Home;
