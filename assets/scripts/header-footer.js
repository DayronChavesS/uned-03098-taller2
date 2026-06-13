/**************************** AL · CARGAR · PAGINA **************************************** */

window.onload = function()
{
    Main(); //se ejecuta el main
}

function Main()
{
    loadHeader();
    loadFooter();
}

const loadHeader = async () => {
    try {
      const res = await fetch("/html/header.txt");
      const template = await res.text();
      const parse = new DOMParser();
      const html = parse.parseFromString(template, "text/html");
      const header = html.querySelector("body header");
  
      document.body.prepend(header);
    } catch (err) {
      console.log(err);
    }
  };
  
  const loadFooter = async () => {
    try {
      const res = await fetch("/html/footer.txt");
      const template = await res.text();
      const parse = new DOMParser();
      const html = parse.parseFromString(template, "text/html");
      const footer = html.querySelector("body footer");
  
      document.body.append(footer);
    } catch (err) {
      console.log(err);
    }
  };