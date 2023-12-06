export async function load(){
    const response = await fetch(
        'https://saas-wh3p8.wstd.io',
       {}
      );
      const paporesult = await response.text();

    return{
            papopage:paporesult.replaceAll('/build/_assets', 'https://saas-wh3p8.wstd.io/build/_assets').replaceAll('/cgi/image/', 'https://saas-wh3p8.wstd.io/cgi/image/').replaceAll('/build/','https://saas-wh3p8.wstd.io/build/')
    };
}

