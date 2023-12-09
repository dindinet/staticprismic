export async function load(){
    const response = await fetch(
        'https://codegen.plasmic.app/api/v1/loader/html/preview/hSiU58ew8y2jNRGtjijM7Z/Homepage',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'hSiU58ew8y2jNRGtjijM7Z:jMZ15ub1ZJEEGUmVUBKpWPKS3T835s8DZJOOFWTOXEpQhrZd5gugeScUbCUV03uLHmf1q0htVOsn5aqXWDVw'
            // You can find your PROJECT token by visiting go
            // https://studio.plasmic.app/projects/[tTqxxSNNPLamhhbvK9V5UT]/docs/loader#showToken=true
          }
        }
      );
      const result = await response.json();
    return{
            agency:result.html
    };
}

