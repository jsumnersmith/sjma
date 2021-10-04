import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './main.css';

// data
const linksEnglish = [
  {
    text: "South Jersey Food Bank",
    url: "https://foodbanksj.org/zip-code-locator/",
    description:
      "Use this website along with your zip code to find other locations where food is distributed on behalf of the Food Bank of South Jersey.",
    color: "#443F8F",
  },
  {
    text: "South Jersey Mutual Aid Network - Request Form",
    url: "https://airtable.com/shrwkCwpZOqSkfbts",
    description:
      "Use this form to request food from the South Jersey Mutual Aid Network at large.",
    color: "#443F8F",
  },
  
]

const otherLinksEnglish = [
  {
    text: "Free Baby Goods Exchange",
    url: "https://docs.google.com/document/d/e/2PACX-1vS3BL5cNIkzZ7J6_56Mpq1QKphiiNBonJIcsQT1ISqYkX_mOZyYyAVmwtZ-aOReM3TWBe4J2Q9wiEBN/pub",
    description:
      "Oct 16: Pick up or drop off clothes for babies and kids, toys, books, baby gear, and maternity clothes.",
    color: "#443F8F",
  }
]

const linksSpanish = [
  {
    text: "Banco de Alimentos de South Jersey",
    url: "https://foodbanksj.org/zip-code-locator/",
    description:
      "Utilice este sitio con su código postal para encontrar otra locacciones donde se distribuye comida con el Banco de Alimentos de South Jersey.",
    color: "#443F8F",
  },
  {
    text: "South Jersey Mutual Aid Network - Forma de Solicitar",
    url: "https://airtable.com/shrwkCwpZOqSkfbts",
    description:
      "Utilice esta forma para solicitar alimentos de la South Jersey Mutual Aid Network en general.",
    color: "#443F8F",
  }
]

const otherLinksSpanish = [
  {
    text: "Intercambio Gratis de Artículos de Bebés",
    url: "https://docs.google.com/document/d/e/2PACX-1vS3BL5cNIkzZ7J6_56Mpq1QKphiiNBonJIcsQT1ISqYkX_mOZyYyAVmwtZ-aOReM3TWBe4J2Q9wiEBN/pub",
    description:
      "Oct. 16: Recoja o deje ropa para bebés y niños, juguetes, libros, artículos para bebés y ropa de maternidad.",
    color: "#443F8F",
  }
]

// markup
const IndexPage = () => {
  return (
    <main className="wrapper">
      <title>Home Page</title>
      <header className="header">
        <StaticImage src="../images/logo.jpg" className="logo"/> 
        <div className="header-inner">
          <h1 style={{margin: "5px 0 10px"}}>South Jersey Mutual Aid Network - Pennsuaken</h1>
        </div>
      </header>
      <div className="columns">
        <div className="column">
          <h2 style={{color: "#443F8F", margin: 0}}>Más Recursos Sobre Alimentos</h2>
          <p className="paragraph">
            Si buscas más recursos sobre alimentos, aquí son unos sitios de web que tienen mas infomaccíon. 
          </p>
          <ul className="link-list">
            {linksSpanish.map(link => (
              <li key={link.url} className="link-list-item" style={{ color: link.color }}>
                <span>
                  <a
                    className="link-list-item-link"
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  <p className="link-list-item-description">{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2 style={{color: "#443F8F", margin: 0}}>Additional Food Resources</h2>
          <p className="paragraph">
            If you are looking for additional food resources, here are a few websites where you can find more information.
          </p>
          <ul className="link-list">
            {linksEnglish.map(link => (
              <li key={link.url} className="link-list-item" style={{ color: link.color }}>
                <span>
                  <a
                    className="link-list-item-link"
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  <p className="link-list-item-description">{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 style={{color: "#443F8F", margin: 0}}>Otras Recursos</h2>
          <p className="paragraph">
            Algunos recursos para udsted y su familia.
          </p>
          <ul className="link-list">
            {otherLinksSpanish.map(link => (
              <li key={link.url} className="link-list-item" style={{ color: link.color }}>
                <span>
                  <a
                    className="link-list-item-link"
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  <p className="link-list-item-description">{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2 style={{color: "#443F8F", margin: 0}}>Other Resources</h2>
          <p className="paragraph">
            Some other resources for you and your family.
          </p>
          <ul className="link-list">
            {otherLinksEnglish.map(link => (
              <li key={link.url} className="link-list-item" style={{ color: link.color }}>
                <span>
                  <a
                    className="link-list-item-link"
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  <p className="link-list-item-description">{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
