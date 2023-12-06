export async function load(){
    const response = await fetch(
        'https://saas-wh3p8.wstd.io',
        {
          //headers: {
            // Your project ID and public API token
            //'x-plasmic-api-project-tokens': 'tTqxxSNNPLamhhbvK9V5UT:BFywrK12CIOe9GdI57EfvyxjW7xEs71PPMsXuClOsEgDAxUttSe822OGURTYgOQOTXiI4HudjQYhPEFyy46Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          //}
        }
      );
      const paporesult = await response.text().replaceAll('href="/build/_assets', 'href="https://saas-wh3p8.wstd.io/build/_assets');
    return{
            papopage:paporesult
    };
}

