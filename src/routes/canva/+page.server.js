export const prerender = true;

export async function load(){
    const response = await fetch(
        'https://brandmessage.my.canva.site/',
        {}
      );
      const canvaresult = await response.text();
      //const vevresult = result.replaceAll('</body>','<style>#vevwatermark{display:none;}</style></body>')
      
    return{
            canvasite:canvaresult.replaceAll('icon" href="','icon" href="https://brandmessage.my.canva.site/').replaceAll('<img src="images/','<img src="https://brandmessage.my.canva.site/images/')
    };
}

