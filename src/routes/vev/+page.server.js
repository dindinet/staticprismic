export const prerender = true;

export async function load(){
    const response = await fetch(
        'https://a-dindinet.vev.site/review',
        //'https://a-dindinet.vev.site/dindinet',
        //'https://a-dindinet.vev.site/sick?trick',
        //'https://a-dindinet.vev.site/bali_60383',
        //'https://maxgoldhouse.com',
        //'https://wiltoninternational.com/',
        //'https://websitesforgrowth.com/',
        {}
      );
    const vevresult = await response.text();
      
    return{
      vevpage:vevresult
    };
}
