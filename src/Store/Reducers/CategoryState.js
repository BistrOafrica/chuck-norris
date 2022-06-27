
const CategoryState=(state="all",action)=>{
    switch (action.type) {
        case "SET_CATEGORY_STATE":
            return state=action.category
        default:
            return state
    }
}
export default CategoryState;