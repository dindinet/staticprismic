export async function load(){
    const response = await fetch(
        'https://consulto.dcms.site/',
        {
          //headers: {
            // Your project ID and public API token
            //'x-plasmic-api-project-tokens': 'tTqxxSNNPLamhhbvK9V5UT:BFywrK12CIOe9GdI57EfvyxjW7xEs71PPMsXuClOsEgDAxUttSe822OGURTYgOQOTXiI4HudjQYhPEFyy46Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          //}
        }
      );
      const result = await response.text();
    return{
            consultopage:result.replaceAll('/_next/','https://consulto.dcms.site/_next/').replaceAll('/css/main.css','https://consulto.dcms.site/css/main.css')//.replaceAll('/images/jcogs_img/','https://www.optimadesign.co.uk//images/jcogs_img/')
    };
}

