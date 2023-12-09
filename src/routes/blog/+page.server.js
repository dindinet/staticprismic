export async function load(){
    const response = await fetch(
        //'https://codegen.plasmic.app/api/v1/loader/html/preview/tTqxxSNNPLamhhbvK9V5UT/Blog',
        'https://codegen.plasmic.app/api/v1/loader/html/preview/tTqxxSNNPLamhhbvK9V5UT/Header?hydrate=1&embedHydrate=1',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'tTqxxSNNPLamhhbvK9V5UT:BFywrK12CIOe9GdI57EfvyxjW7xEs71PPMsXuClOsEgDAxUttSe822OGURTYgOQOTXiI4HudjQYhPEFyy46Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          }
        }
      );
      const result = await response.json();
      
      const papohtml = await fetch(
        'https://primo-startup-vercel.vercel.app/papo',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'tTqxxSNNPLamhhbvK9V5UT:BFywrK12CIOe9GdI57EfvyxjW7xEs71PPMsXuClOsEgDAxUttSe822OGURTYgOQOTXiI4HudjQYhPEFyy46Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          }
        }
      );
      const paporesult = await papohtml.text();
      
      const respfooter = await fetch(
        'https://codegen.plasmic.app/api/v1/loader/html/preview/tTqxxSNNPLamhhbvK9V5UT/Footer?hydrate=1&embedHydrate=1',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'tTqxxSNNPLamhhbvK9V5UT:BFywrK12CIOe9GdI57EfvyxjW7xEs71PPMsXuClOsEgDAxUttSe822OGURTYgOQOTXiI4HudjQYhPEFyy46Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          }
        }
      );
      const footerresult = await respfooter.json();

    return{
            plasmic:result.html,papopage:paporesult,plasfooter:footerresult.html
    };
}

