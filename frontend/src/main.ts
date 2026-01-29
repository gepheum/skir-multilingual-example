import { ServiceClient } from 'skir-client';
import { Greet, HelloRequest } from '../skirout/api.js';

const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const sendBtn = document.getElementById('sendBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

// Initialize Skir Service Client
// Point to the Skir dispatcher endpoint on the backend
const client = new ServiceClient('http://localhost:8080/skir');

sendBtn.addEventListener('click', async () => {
  const name = nameInput.value;
  if (!name) return;

  const request = HelloRequest.create({ name });

  try {
    // Invoke the remote method using the client
    const response = await client.invokeRemote(Greet, request);
    resultDiv.innerText = response.message;
  } catch (error) {
    console.error(error);
    resultDiv.innerText = 'Error: ' + String(error);
  }
});
