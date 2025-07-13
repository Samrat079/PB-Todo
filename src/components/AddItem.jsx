import { useState } from "react";

function AddItem({ onAdd }) {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !color) return;

        onAdd({ name, color });
        
        setName('');
        setColor('');
    }

    return (
        <form
            className="m-4 rounded-xl bg-indigo-800 py-4 px-6 text-md"
            onSubmit={handleSubmit}>
            <label className="text-sm">Name</label><br />
            <input
                type="text"
                value={name}
                placeholder="eg: Mango..."
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-lg bg-indigo-500 my-2">
            </input><br />

            <label className="text-sm">Color</label><br />
            <input
                type="text"
                value={color}
                placeholder="eg: Orange"
                onChange={(e) => setColor(e.target.value)}
                className="p-2 rounded-lg bg-indigo-500 my-2">
            </input><br />
            <button type="submit" className="bg-green-500 font-bold px-6 py-2 my-4 rounded-xl">
                Add
            </button><br />
        </form>
    )
}

export default AddItem;