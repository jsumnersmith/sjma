import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  margin: "0 auto",
  maxWidth: 960,
  width: "90%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 20,
  maxWidth: 800,
  display: 'flex'
}

const paragraphStyles = {
  marginBottom: 20,
}

const listStyles = {
  marginBottom: 96,
  marginLeft: 0,
  paddingLeft: 20,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 40,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}


const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const columns = { 
  display: 'flex',
}

const column = {
  width: "45%",
}


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
  {
    text: "Free Baby Goods Exchange",
    url: "https://docs.google.com/document/d/e/2PACX-1vS3BL5cNIkzZ7J6_56Mpq1QKphiiNBonJIcsQT1ISqYkX_mOZyYyAVmwtZ-aOReM3TWBe4J2Q9wiEBN/pub",
    description:
      "Oct 16: Pick up or drop off clothes for babies and kids, toys, books, baby gear, and maternity clothes.",
    color: "#443F8F",
  }
]

const links = [
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
  },
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
    <main style={pageStyles}>
      <title>Home Page</title>
      <header style={headingStyles}>
        <StaticImage src="../images/logo.jpg" style={{width: 100, height: 'auto', marginRight: 20}}/> 
        <div style={{grow: 1}}>
          <h1 style={{margin: "5px 0 10px"}}>Más Recursos / Additional Resources</h1>
          <h2 style={{color: "#443F8F", margin: 0}}>South Jersey Mutual Aid Network - Pennsuaken</h2>
        </div>
      </header>
      <div style={columns}>
        <div style={column}>
          <p style={paragraphStyles}>
            Si buscas más recursos sobre alimentos, aquí son unos sitios de web que tienen mas infomaccíon. 
          </p>
          <ul style={listStyles}>
            {links.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{...column, marginLeft: '10%'}}>
          <p style={paragraphStyles}>
            If you are looking for additional food resources, here are a few websites where you can find more information.
          </p>
          <ul style={listStyles}>
            {linksEnglish.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
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
