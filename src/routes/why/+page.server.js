export async function load(){
    const response = await fetch(
        'https://primo-startup-vercel.vercel.app/why',
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
            whypage:result
    };
}

