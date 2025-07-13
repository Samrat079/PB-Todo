import AddItem from "../components/AddItem"

function AddNew({ onAdd }) {
    return (
        <div className="flex flex-col justify-center w-screen">
            <AddItem onAdd={onAdd}/>
        </div>
    )
}

export default AddNew