const app = "I don't do much.";
const token = 'ddb1be0288a77fd6ff858b2cbea8fa0e155cad18'
fetch('https://api.github.com/user/repos'{
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
