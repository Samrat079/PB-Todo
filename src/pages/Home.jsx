import FruitList from "../components/FruitList"

function Home({ fruits, onDelete, onUpdate }) {
    if (!fruits) return <div>Loading...</div>;
    return (
        <div className="flex flex-col justify-center w-screen">
            <FruitList fruits={fruits} onDelete={onDelete} onUpdate={onUpdate}/>
        </div>
    )
}

export default Home