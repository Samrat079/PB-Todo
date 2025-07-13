import { useState } from "react";

function FruitList({ fruits, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(null);
    const [editName, setEditName] = useState('');
    const [editColor, setEditColor] = useState('');

    const startEditing = (fruit) => {
        setEditing(fruit.name);
        setEditName(fruit.name);
        setEditColor(fruit.color);
    };

    const saveEdit = (originalName) => {
        if (!editName.trim()) return alert("Name can't be empty");
        onUpdate(originalName, { name: editName.trim(), color: editColor.trim() });
        setEditing(null);
    };

    return (
        <div>
            <ul className="w-full">
                {fruits.map((fruit, index) => (
                    <li
                        key={index}
                        className="bg-indigo-800 text-white m-4 p-4 rounded-lg shadow-lg"
                    >
                        {editing === fruit.name ? (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm">Name</label>
                                    <input
                                        className="p-2 rounded-md bg-indigo-600"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        placeholder="Fruit name"
                                    />
                                    <label className="text-md">Color</label>
                                    <input
                                        className="p-2 rounded-md bg-indigo-600"
                                        value={editColor}
                                        onChange={(e) => setEditColor(e.target.value)}
                                        placeholder="Fruit color"
                                    />
                                    <div className="flex flex-row gap-4 mt-2">
                                        <button
                                            className="bg-green-600 px-6 w-full font-bold text-md py-2 rounded-xl"
                                            onClick={() => saveEdit(fruit.id)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="bg-gray-400 px-6 w-full font-bold text-md py-2 rounded-xl"
                                            onClick={() => setEditing(null)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>
                                    The name of this fruit is <strong>{fruit.name}</strong>
                                </p>
                                <p>
                                    The color of this fruit is <strong>{fruit.color}</strong>
                                </p>
                                <div className="flex flex-row gap-4 mt-4">
                                    <button
                                        className="bg-red-600 px-6 w-full font-bold text-md py-2 rounded-xl"
                                        onClick={() => onDelete(fruit.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-yellow-500 px-6 w-full font-bold text-md py-2 rounded-xl"
                                        onClick={() => startEditing(fruit)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;
