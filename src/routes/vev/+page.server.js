export const prerender = true;

export async function load(){
    const response = await fetch(
        'https://a-dindinet.vev.site/sick/',
        {}
      );
      const vevresult = await response.text();
      
    return{
            vevpage:vevresult
    };
}

