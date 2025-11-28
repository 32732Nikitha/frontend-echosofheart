import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ArtManagement.css'; // Assuming you create a simple CSS file

const ArtManagement = () => {
    const { userToken, isAdmin, isLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    const [artworks, setArtworks] = useState([]);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [editingArt, setEditingArt] = useState(null);
    const [message, setMessage] = useState('');

    const API_URL = 'http://localhost:8089/api/art';

    useEffect(() => {
        if (!isLoggedIn || !isAdmin) {
            navigate('/login');
            return;
        }
        fetchArtworks();
    }, [isLoggedIn, isAdmin, navigate, userToken]);

    const getAuthHeader = () => ({
        headers: { Authorization: `Bearer ${userToken}` }
    });

    const fetchArtworks = async () => {
        try {
            // Admin fetches all art to manage them
            const response = await axios.get(API_URL, getAuthHeader());
            setArtworks(response.data);
        } catch (error) {
            console.error('Error fetching artworks:', error);
            setMessage('Failed to load artworks.');
        }
    };

    // --- CRUD Operations ---

    const handleSubmit = async (e) => {
        e.preventDefault();
        const artData = { title, artist, price: parseFloat(price), imageUrl };
        
        try {
            if (editingArt) {
                // UPDATE
                await axios.put(`${API_URL}/${editingArt.id}`, artData, getAuthHeader());
                setMessage('Artwork updated successfully!');
            } else {
                // CREATE
                await axios.post(API_URL, artData, getAuthHeader());
                setMessage('Artwork added successfully!');
            }
            
            resetForm();
            fetchArtworks(); // Refresh list
        } catch (error) {
            console.error('Error saving artwork:', error);
            setMessage('Failed to save artwork. Check backend status.');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this artwork?')) return;

        try {
            await axios.delete(`${API_URL}/${id}`, getAuthHeader());
            setMessage('Artwork deleted successfully.');
            fetchArtworks();
        } catch (error) {
            console.error('Error deleting artwork:', error);
            setMessage('Failed to delete artwork.');
        }
    };

    const startEdit = (art) => {
        setEditingArt(art);
        setTitle(art.title);
        setArtist(art.artist);
        setPrice(art.price.toString());
        setImageUrl(art.imageUrl);
        setMessage('');
    };

    const resetForm = () => {
        setEditingArt(null);
        setTitle('');
        setArtist('');
        setPrice('');
        setImageUrl('');
    };

    if (!isLoggedIn || !isAdmin) {
        return <div style={{color: 'white', padding: '50px'}}>Access Denied. Redirecting to login...</div>;
    }

    return (
        <div className="art-management-container">
            <h1>Admin Art Management 🎨</h1>
            <p className="status-message">{message}</p>
            
            {/* --- Art Form (Create/Update) --- */}
            <form onSubmit={handleSubmit} className="art-form">
                <h2>{editingArt ? 'Edit Artwork' : 'Add New Artwork'}</h2>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Artist" 
                    value={artist} 
                    onChange={(e) => setArtist(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    step="0.01" 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                    required 
                />
                <div className="form-actions">
                    <button type="submit">
                        {editingArt ? 'Save Changes' : 'Add Artwork'}
                    </button>
                    {editingArt && <button type="button" onClick={resetForm}>Cancel Edit</button>}
                </div>
            </form>

            {/* --- Art List (Read/Delete/Edit) --- */}
            <div className="art-list">
                <h3>Current Artworks ({artworks.length})</h3>
                {artworks.map((art) => (
                    <div key={art.id} className="art-item-manage">
                        <img src={art.imageUrl} alt={art.title} />
                        <div className="details">
                            <h4>{art.title}</h4>
                            <p>by {art.artist} - ${art.price.toLocaleString()}</p>
                        </div>
                        <div className="actions">
                            <button onClick={() => startEdit(art)} className="edit-btn">Edit</button>
                            <button onClick={() => handleDelete(art.id)} className="delete-btn">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtManagement;