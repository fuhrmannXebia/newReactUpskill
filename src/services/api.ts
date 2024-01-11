import { Invoice } from "../components/models/invoice";

const API_URL = 'http://localhost:3001';

export const fetchInvoices = async(): Promise<Invoice[]> => {
    const response = await fetch(`${API_URL}/invoices`);
    if(!response.ok) {
        throw new Error('Failed to fetch invoices');
    }

    return response.json();
}

export const fetchInvoice = async (id) => {
  const response = await fetch(`${API_URL}/invoices/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch invoice with id ${id}`);
  }
  return response.json();
}

export const postInvoice = async(body) => {
  const response = await fetch(`${API_URL}/invoices`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if(!response.ok) {
    throw new Error('Saving new invoice failed')
  }

  console.log(response)
  return response;
}

export const updateInvoice = async (id, body) => {
  const response = await fetch(`${API_URL}/invoices/${id}`, {
    method: 'PUT', // PUT method for full replacement, PATCH for partial update
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to update invoice with id ${id}`);
  }

  return response.json();
}

export const deleteInvoice = async (id: number) => {
    const response = await fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Deletion failed');
    }
    return response.json();
  };