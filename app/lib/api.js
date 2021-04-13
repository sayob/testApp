const URL = '';

const request = async (data, type, url) => {
    let response = '';
    let responseBody;
    let responseText;

    try{
        if(type === 'GET') {
            response = await fetch(url, {
                method: type,
                headers: {
    
                },
            })
            responseBody = await response.text();
            responseText = JSON.parse(responseBody);
        } else {
            let stringifiedData = JSON.stringify(data);

            response = await fetch(url, {
                method: type,
                headers: {
    
                },
                body: stringifiedData,
            })
        }
    } catch(error) {
        console.log('API ERROR ===>', error);
    }
}