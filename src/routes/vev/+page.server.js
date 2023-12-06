export async function load(){
    const response = await fetch(
        'https://a-dindinet.vev.site/dindinet/',
        {}
      );
      const result = await response.text();
    return{
            vevpage:result.replaceAll('</head>','</head><style>#vevwatermark{display:none;}</style>')
    };
}

