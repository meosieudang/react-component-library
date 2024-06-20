import axios from "axios";

const getListShift = () => {
    return axios.get("api/listshift/get_listshiftlipovitan");
}

const exportListShift = () => {
    return axios.get("api/listshift/export_listshift_lipovitan");
}
const ListShiftServices = {
    getListShift,
    exportListShift
}

export default ListShiftServices;