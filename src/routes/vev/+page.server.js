export const prerender = true;

export async function load(){
    const response = await fetch(
        'https://a-dindinet.vev.site/dindinet/',
        {}
      );
      const result = await response.text();
      const vevresult = result.replaceAll('</body>','<style>#vevwatermark{display:none;}</style></body>')
      
    return{
            vevpage:vevresult
    };
}

