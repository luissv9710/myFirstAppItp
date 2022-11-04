export const getText = () => {
    const options = {
      method: 'GET',
    };
  
    return fetch('https://catfact.ninja/fact', options)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log(error));
  };
  