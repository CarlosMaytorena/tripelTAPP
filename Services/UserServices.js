
const axios = require('axios');

export async function getAllUsers() {

    try{
        const response = await axios.get('/api/users');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {

    try{
        const response = await axios.post(`http://192.168.1.134:3000/api/login`, data);
        return response.data;
    }
    catch{
        
    }
}

export async function getDashboard(data) {

    try{
        const response = await axios.post(`http://192.168.1.134:3000/api/dashboard`, data);
        return response.data;
    }
    catch{
        
    }
}



export async function getAllUsers2() {


    try{
        const response = await fetch('/api/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser2(data) {
    
    const response = await fetch(`http://192.168.1.134:3000/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}
