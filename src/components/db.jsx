import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase('http://127.0.0.1:8090');

export default function useDatabase() {
    const [fruits, setFruits] = useState([]);

    // Fetch data from PocketBase
    useEffect(() => {
        const fetchFruits = async () => {
            const records = await pb.collection('fruits').getFullList({
                sort: '-created'
            });
            setFruits(records);
        };
        fetchFruits();
    }, []);

    const addFruit = async (newFruit) => {
        const record = await pb.collection('fruits').create(newFruit);
        setFruits(prev => [...prev, record]);
    };

    const deleteFruit = async (id) => {
        await pb.collection('fruits').delete(id);
        setFruits(prev => prev.filter(fruit => fruit.id !== id));
        console.log("Deleting fruit with ID:", id);
    };

    const updateFruit = async (id, updatedData) => {
        const updated = await pb.collection('fruits').update(id, updatedData);
        setFruits(prev => 
            prev.map(fruit => fruit.id === id ? updated : fruit)
        );
        console.log("Current fruits state:", fruits);
    };

    return { fruits, addFruit, deleteFruit, updateFruit };
}
